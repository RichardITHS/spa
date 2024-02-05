<!-- Denna del av koden använder 'script setup' för att importera komponenter och använda Composition API -->
<script setup>
    // Importerar komponenten HeroImage.vue
    import HeroImage from '../components/HeroImage.vue';

    // Importerar komponenten SpaOffers.vue
    import SpaOffers from '../components/SpaOffers.vue';

    // Importerar 'ref' från Vue's Composition API för att använda reactive data
    import { ref } from 'vue';

    // Importerar komponenten MailForm.vue
    import MailForm from '../components/MailForm.vue';

    // Skapar en ref-variabel 'show' som är initialt satt till 'true'
    const show = ref(true);
</script>

<!-- Denna del av koden utgör HTML-mallen -->
<template>
    <!-- Använder HeroImage-komponenten för att visa en hjältebild eller hjälteomslag -->
    <HeroImage />

    <!-- En rubrik (h1) som visar ett dynamiskt meddelande baserat på data från 'message' -->
    <h1 class="title">{{ message }}</h1>

    <!-- En sektion för att visa olika spa-erbjudanden -->
    <div id="offers">
        <div class="container text-center">
            <div class="row align-items-center">
                <!-- Använder SpaOffers-komponenten för varje spa-erbjudande i listan 'spas' -->
                <spa-offer v-for="spa in spas" :key="spa.id" :offer="spa" />
            </div>
        </div>
    </div>

    <!-- En sektion för kontakt och ett knapptryck som växlar 'show'-variabeln -->
    <div id="contact">
        <button class="btn btn-primary" @click="show = !show">
            Vill du kontakta oss?
        </button>

        <!-- Visar MailForm-komponenten endast om 'show' är falskt -->
        <div v-if="!show">
            <MailForm />
        </div>
    </div>
</template>

<!-- Denna del av koden är för JavaScript-logik och metoder -->
<script>
    export default {
        // Data-funktion som returnerar initiala data för komponenten
        data() {
            return {
                spas: [], // En tom lista för spa-erbjudanden
                message: 'Vilket paket önskas?' // Ett initialt meddelande
            };
        },
        name: 'HomeView', // Namn på komponenten
        components: { 'spa-offer': SpaOffers }, // Användning av SpaOffers-komponenten
        created() {
            // Efter att komponenten har monterats, hämta data från spa.json-filen
            this.fetchData();
        },
        methods: {
            // En metod för att hämta spa-data från en json-fil asynkront
            async fetchData() {
                const res = await fetch('spa.json/');
                const val = await res.json();
                this.spas = val; // Sätter data från filen till 'spas'-listan
            }
        }
    };
</script>

<!-- Denna del av koden är för stilmallar som gäller endast för den här komponenten -->
<style scoped>
    /* Stilar för att centrera och styla 'offers'- och 'contact'-sektionerna */
    #offers {
        display: flex;
        justify-content: center;
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    #contact {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 300px;
        margin: 0 auto;
        margin-bottom: 20vh;
    }
</style>
<!-- Ang metoden att ange name, och "component spa-offers" -->
<!--

I Vue.js används name-egenskapen för att ge komponenten ett namn.
Namnet kan vara användbart för debugging och identifiering av komponenten.
I det här fallet är komponentens namn satt till 'HomeView'. Detta kan vara användbart
när du tittar på Vue DevTools eller när du arbetar med komponenter i en större
Vue.js-applikation.

Därefter har vi components-egenskapen, där en komponent med namnet 'spa-offer'
associeras med den faktiska komponenten SpaOffers. Detta skapar en parentes där namnet

('spa-offer') är komponentens tag-namn och SpaOffers är den faktiska komponenten som
används. Detta gör det möjligt att använda 'spa-offer' som ett anpassat HTML-element
i mallen för den aktuella komponenten.

Så, om du skulle använda 'spa-offer' i din template för komponenten HomeView,
skulle det tolkas som att använda den SpaOffers-komponenten i det här fallet.
Detta kan vara användbart för att organisera och använda komponenter inom en större
Vue-applikation. Det ger en klar och modulär struktur till koden.

Tips:
https://www.youtube.com/watch?v=jIB1bE57JQg&t=158s
 -->
