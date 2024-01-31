<!-- Denna del av koden innehåller en Vue-komponent för en hero-sektion på webbsidan -->
<script>
</script>
<!-- HTML-mallen för hero-sektionen -->
<template>
    <!-- En behållare med id 'wrapper-hero' som innehåller en responsiv bild och centrering av text -->
    <div id="wrapper-hero">
        <!-- En bild som laddas från sökvägen till bilden med en fluid class för responsivt beteende -->
        <img
            src="../assets/img/jared-rice-PibraWHb4h8-unsplash.jpg"
            class="img-fluid"
            alt="..."
        />
        <!-- En behållare med klassen 'centered' som innehåller centrering av text -->
        <div class="centered">
            <!-- En rubrik (h1) med texten 'Tag hand om dig.' -->
            <h1>Tag hand om dig.</h1>
        </div>
    </div>
</template>

<!-- Denna del av koden är för stilmallar -->
<style>
    /* Stilar för att centrera och justera utseendet av hero-sektionen */
    #wrapper-hero img {
        margin: 0 auto;    /* Centrerar bilden horisontellt */
        height: auto;      /* Gör bilden responsiv för olika skärmstorlekar */
        overflow-x: hidden; /* Döljer eventuell horisontell overflow av bilden */
    }

    /* Stilar för centrerad text */
    #wrapper-hero .centered {
        position: absolute; /* Absolut positionering relativt till första föräldern med relativ eller absolut positionering */
        top: 50%;           /* Centrerar vertikalt till 50% av förälderns höjd */
        left: 50%;          /* Centrerar horisontellt till 50% av förälderns bredd */
        transform: translate(-50%, -50%); /* Justerar positionen så att centrum av elementet hamnar exakt i mitten */
        color: white;       /* Sätter textfärg till vit */
    }
</style>
