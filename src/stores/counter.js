import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const naming = ref('Carlsson')
  const nameAfter = computed(() => naming.value * 2)


  return { naming, nameAfter }
})
