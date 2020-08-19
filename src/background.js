'use strict'

import path from 'path'
import {
  app,
  Menu,
  protocol,
  ipcMain,
  Notification,
  BrowserWindow,
} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { logger } from '@/utils/Logger'
import { createLocalStore } from '@/utils/LocalStore'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const axios = require('axios')
const isDevelopment = process.env.NODE_ENV !== 'production'

const localStore = createLocalStore()

console.log(process.env.NODE_ENV)

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
])

function callNotification(title, body) {
  const icon = path.join(__static, 'icon.png')
  const notif = { title, body, icon }
  new Notification(notif).show()
}

function numberFormat(number, decimals, decPoint, thousandsPoint) {
  // eslint-disable-next-line no-restricted-globals
  if (number == null || !isFinite(number)) {
    callNotification('Erro', 'number is not valid')
  }

  if (!decimals) {
    const len = number.toString().split('.').length
    // eslint-disable-next-line no-param-reassign
    decimals = len > 1 ? len : 0
  }

  if (!decPoint) {
    // eslint-disable-next-line no-param-reassign
    decPoint = '.'
  }

  if (!thousandsPoint) {
    // eslint-disable-next-line no-param-reassign
    thousandsPoint = ','
  }

  // eslint-disable-next-line no-param-reassign
  number = parseFloat(number).toFixed(decimals)

  // eslint-disable-next-line no-param-reassign
  number = number.replace('.', decPoint)

  const splitNum = number.split(decPoint)
  splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsPoint)
  // eslint-disable-next-line no-param-reassign
  number = splitNum.join(decPoint)

  return number
}

function getMoeda(code) {
  axios.get(`https://economia.awesomeapi.com.br/${code}`).then(res => {
    const dif = (res.data[0].varBid >= 0 ? 'Alta' : 'Queda').concat(
      ` de ${res.data[0].varBid}%`
    )
    const price = numberFormat(res.data[0].bid)
    callNotification(`Valor do ${res.data[0].name}`, `R$ ${price} \n${dif}`)
  })
}

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 900,
    height: 600,
    resizable: true,
    maximizable: true,
    title: 'Minhas Horas',
    icon: path.join(__static, 'icon.png'),
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      enableRemoteModule: true,
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('page-title-updated', event => event.preventDefault())

  win.on('closed', () => {
    win = null
  })
}

function createTray() {
  console.log('Tray')
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// ipc Comandos de Janelas
ipcMain.on('valor-moeda', (event, arg) => {
  getMoeda(arg)
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  logger.info('app ready')
  const minToTray = localStore.get('minToTray')
  const alwaysOnTop = localStore.get('alwaysOnTop')

  if (isDevelopment && !process.env.IS_TEST) {
    const dockMenu = Menu.buildFromTemplate([
      {
        label: 'Nova Janela',
        click() {
          console.log('Nova Janela')
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Moedas',
        enabled: true,
        submenu: [
          {
            label: 'Dolar',
            click() {
              getMoeda('usd')
            },
          },
          {
            label: 'BTC',
            click() {
              getMoeda('btc')
            },
          },
        ],
      },
    ])

    app.dock.setMenu(dockMenu)

    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  createWindow()

  if (minToTray) {
    createTray()
  }

  win.setAlwaysOnTop(alwaysOnTop)
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
