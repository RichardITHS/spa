<template>
    <div class="col">
        <div class="card" style="width: 18rem">
            <img
                src="../assets/img/laura-chouette-bD4j1V52dx0-unsplash.jpg"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-title">{{ offer.name }}</h5>
                <p>{{ offer.including }}</p>
                <p>
                    <span :style="{ color: 'green' }"
                        >{{ offer.price }} kr</span
                    >
                </p>
                <a href="/about" class="btn btn-primary">Läs mer här</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            offer: {
                requried: true,
                type: Object
            }
        }
    }
</script>

<style>
    .col {
        display: flex;
        justify-content: center;
        padding-top: 2vh;
    }
</style>
