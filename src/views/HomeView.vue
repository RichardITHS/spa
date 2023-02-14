<script setup>
    import HeroImage from '../components/HeroImage.vue'
    import SpaOffers from '../components/SpaOffers.vue'

    /* Steg 2 lägger till ref med composition api */
    /* https://medium.com/codex/options-api-vs-composition-api-4a745fb8610 */
    import { ref } from 'vue'
    import MailForm from '../components/MailForm.vue'

    const show = ref(true)
</script>

<template>
    <HeroImage />
    <h1 class="title">{{ message }}</h1>
    <div id="offers">
        <div class="container text-center">
            <div class="row align-items-center">
                <spa-offer v-for="spa in spas" :key="spa.id" :offer="spa" />
            </div>
        </div>
    </div>
    <!-- steg2 -->
    <div id="contact">
        <button class="btn btn-primary" @click="show = !show">
            Vill du kontakta oss?
        </button>

        <div v-if="!show">
            <MailForm />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                spas: [],
                message: 'Vilket paket önskas?'
            }
        },
        name: 'HomeView',
        components: { 'spa-offer': SpaOffers },
        mounted() {
            this.fetchData()
        },
        methods: {
            async fetchData() {
                const res = await fetch('spa.json')
                const val = await res.json()
                this.spas = val
            }
        }
    }
</script>
<style scoped>
    #offers {
        display: flex;
        justify-content: center;
        margin-top: 10vh;
        margin-bottom: 10vh;
    }
    /* Här lägger vi till steg 2 med ett mailformulär */
    #contact {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 300px;
        margin: 0 auto;
        margin-bottom: 20vh;
    }
</style>
