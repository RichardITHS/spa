<script setup>
    import HeroImage from '../components/HeroImage.vue';
</script>
<template>
    <HeroImage />
    <div id="wrapping">
        <!-- En kolumn (col) med flexbox för att centrera innehållet -->
        <div class="col" v-if="spaOffer">
            <!-- En kort (card) med bredd på 18 rem, som innehåller bild och text -->
            <div class="card" style="width: 18rem">
                <!-- En bild i kortet från sökvägen till bilden -->
                <img
                    src="../assets/img/laura-chouette-bD4j1V52dx0-unsplash.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <!-- En kortkropp (card-body) med rubrik, inkluderade tjänster, pris och knapp -->
                <div class="card-body">
                    <!-- En rubrik (card-title) som visar namnet på erbjudandet -->
                    <h5 class="card-title">{{ spaOffer.name }}</h5>

                    <!-- En paragraf (p) som visar inkluderade tjänster för erbjudandet -->
                    <p>{{ spaOffer.including }}</p>

                    <!-- En paragraf som visar priset och använder dynamisk färg (grön) -->
                    <p>
                        <span :style="{ color: 'green' }"
                            >{{ spaOffer.price }} kr</span
                        >
                    </p>

                    <a href="#" class="btn btn-primary">Köp</a>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                spaOffer: null
            };
        },
        mounted() {
            // Hämta id från URL:en (Denna är väldigt viktig för vi behöver arbeta med denna nedan)
            const spaId = this.$route.params.id;

            // Gör en HTTP-förfrågan till spa.json med hjälp av Axios
            axios
                .get('/spa.json') // Uppdatera sökvägen till din spa.json
                .then((response) => {
                    // Filtrera spa.json efter det specifika id:t
                    this.spaOffer = response.data.find(
                        (offer) => offer.id === spaId
                    );
                })
                .catch((error) => {
                    console.error('Error fetching spa data:', error);
                });
        }
    };
</script>
<style scoped>
    #wrapping {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }
</style>
