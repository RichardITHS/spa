// Importerar funktionen createApp från Vue för att skapa en Vue-applikation
import { createApp } from 'vue'

// Importerar funktionen createPinia från Pinia för att skapa ett state management system
import { createPinia } from 'pinia'

// Importerar Bootstrap CSS-stilar
import 'bootstrap/dist/css/bootstrap.css'

// Importerar Bootstrap JavaScript-filer
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

// Importerar huvudkomponenten App.vue
import App from './App.vue'

// Importerar router-instansen från filen router.js
import router from './router'

// Importerar anpassade CSS-stilar från filen base.css
import './assets/base.css'

// Skapar en Vue-applikation
const app = createApp(App)

// Använder createPinia för att integrera Pinia i Vue-applikationen för globalt state-hantering
app.use(createPinia())

// Använder router-instansen för att lägga till router-funktionalitet i Vue-applikationen
app.use(router)

// Använder Bootstrap-funktionalitet i Vue-applikationen
app.use(bootstrap)

// Monterar Vue-applikationen på elementet med id 'app' i HTML-dokumentet
app.mount('#app')
