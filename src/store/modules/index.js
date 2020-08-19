import { createLocalStore } from '@/utils/LocalStore'

const localStore = createLocalStore()
const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export { modules, localStore }
