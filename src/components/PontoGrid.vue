<template>
  <div class="flex flex-col shadow-lg">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="align-middle inline-block min-w-full">
        <table class="min-w-full divide-y divide-gray-200">
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="hora in horas"
              :key="hora.id"
              :class="
                hora.id % 2 === 0
                  ? 'bg-background-primary'
                  : 'bg-background-secondary'
              "
            >
              <td
                class="px-6 py-4 whitespace-no-wrap border-b border-border-color-primary"
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <svg
                      v-if="hora.id % 2 === 0"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 52.519 52.519"
                      style="enable-background:new 0 0 52.519 52.519;"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          style="fill:#f56565;"
                          d="M21.524,16.094V4.046L1.416,23.998l20.108,20.143V32.094c0,0,17.598-4.355,29.712,16
		c0,0,3.02-15.536-10.51-26.794C40.727,21.299,34.735,15.696,21.524,16.094z"
                        />
                        <path
                          style="fill:#f56565;"
                          d="M51.718,50.857l-1.341-2.252C40.163,31.441,25.976,32.402,22.524,32.925v13.634L0,23.995
		L22.524,1.644v13.431c12.728-0.103,18.644,5.268,18.886,5.494c13.781,11.465,10.839,27.554,10.808,27.715L51.718,50.857z
		 M25.645,30.702c5.761,0,16.344,1.938,24.854,14.376c0.128-4.873-0.896-15.094-10.41-23.01c-0.099-0.088-5.982-5.373-18.533-4.975
		l-1.03,0.03V6.447L2.832,24.001l17.692,17.724V31.311l0.76-0.188C21.354,31.105,23.014,30.702,25.645,30.702z"
                        />
                      </g>
                    </svg>
                    <svg
                      v-else
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 52.522 52.522"
                      style="enable-background:new 0 0 52.522 52.522;"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          style="fill:#26B99A;"
                          d="M31.113,16.038V3.99l19.971,20.08l-19.971,20.08V32.102c0,0-17.735-4.292-29.849,16.064
		c0,0-3.02-15.536,10.51-26.794C11.774,21.371,17.903,15.64,31.113,16.038z"
                        />
                        <path
                          style="fill:#26B99A;"
                          d="M0.783,50.929l-0.5-2.573c-0.031-0.161-2.974-16.25,10.852-27.753
		c0.202-0.191,6.116-5.585,18.674-5.585c0.102,0,0.203,0,0.305,0.001V1.566L52.495,24.07L30.113,46.574V32.937
		c-0.662-0.098-1.725-0.213-3.071-0.213c-5.761,0-16.657,2.073-24.918,15.953L0.783,50.929z M29.808,17.018
		c-11.776,0-17.297,5.033-17.352,5.084C2.911,30.046,1.878,40.274,2.004,45.149C14.365,27.091,31.127,31.077,31.348,31.13
		l0.765,0.185v10.411L49.674,24.07L32.113,6.413v10.654l-1.03-0.03C30.65,17.024,30.226,17.018,29.808,17.018z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <div
                      class="text-sm leading-5 font-medium text-copy-primary"
                    >
                      {{ hora.id % 2 === 0 ? 'Saída' : 'Entrada' }}
                    </div>
                    <div class="text-sm leading-5 text-copy-secondary">
                      {{
                        hora.id % 2 === 0
                          ? 'Registro de Saída'
                          : 'Registro de Entrada'
                      }}
                    </div>
                  </div>
                </div>
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap border-b border-border-color-primary"
              >
                <div class="text-sm leading-5 text-copy-primary">
                  {{ hora.ponto }}
                </div>
                <div class="text-sm leading-5 text-copy-secondary">
                  08:00
                </div>
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-border-color-primary text-sm leading-5 font-medium"
              >
                <a href="#" class="text-copy-primary hover:text-copy-secondary"
                  >Editar</a
                >
              </td>
            </tr>
            <!-- More rows... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PontoGrid',
  data() {
    return {
      horas: [
        { id: 1, ponto: '08:15' },
        { id: 2, ponto: '12:23' },
        { id: 3, ponto: '13:20' },
        { id: 4, ponto: '18:17' },
      ],
    }
  },
}
</script>

<style scoped></style>
