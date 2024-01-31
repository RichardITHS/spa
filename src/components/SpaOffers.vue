<!-- Denna del av koden är en Vue-komponent som visar ett spa-erbjudande -->
<template>
    <!-- En kolumn (col) med flexbox för att centrera innehållet -->
    <div class="col">
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
                <h5 class="card-title">{{ offer.name }}</h5>

                <!-- En paragraf (p) som visar inkluderade tjänster för erbjudandet -->
                <p>{{ offer.including }}</p>

                <!-- En paragraf som visar priset och använder dynamisk färg (grön) -->
                <p>
                    <span :style="{ color: 'green' }"
                        >{{ offer.price }} kr</span
                    >
                </p>

                <!-- En länk (a) som leder till sidan /spa/about och har en primär knappstil -->
                <a href="/spa/about" class="btn btn-primary">Läs mer här</a>
            </div>
        </div>
    </div>
</template>

<!-- Denna del av koden är JavaScript-logik för komponenten -->
<script>
    export default {
        // Definierar properties för komponenten, 'offer' som är ett obligatoriskt objekt
        props: {
            offer: {
                required: true,
                type: Object
            }
        }
    }
</script>

<!-- Denna del av koden är för stilmallar som gäller endast för den här komponenten -->
<style>
    /* Stilar för att centrera komponenten och ge lite extra utrymme ovanför */
    .col {
        display: flex;
        justify-content: center;
        padding-top: 2vh;
    }
</style>
