// Importerar 'ref' och 'computed' från Vue's Composition API
import { ref, computed } from 'vue'

// Importerar 'defineStore' från Pinia för att skapa en store
import { defineStore } from 'pinia'

// Skapar och exporterar en Pinia store med namnet 'counter'
export const useCounterStore = defineStore('counter', () => {
  // Skapar en ref-variabel 'naming' med initialt värde 'Carlsson'
  const naming = ref('Carlsson')

  // Skapar en computed property 'nameAfter' som är dubbelt så stor som värdet av 'naming'
  const nameAfter = computed(() => naming.value * 2)

  // Returnerar de skapade variablerna och properties för att användas i komponenter
  return { naming, nameAfter }
})
