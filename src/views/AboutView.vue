<!-- Denna del av koden använder 'script setup' för att importera komponenten HeroImage.vue -->
<script setup>
    import HeroImage from '../components/HeroImage.vue';
</script>

<!-- Denna del av koden utgör HTML-mallen för en sida om företaget -->
<template>
    <!-- En överordnad behållare med en CSS-klass 'about' för att gruppera innehållet -->
    <div class="about">
        <!-- Använder HeroImage-komponenten för att visa en hjältebild eller hjälteomslag -->
        <HeroImage />

        <!-- En rubrik (h1) för att visa att detta är en sida om företaget -->
        <h1>This is an about page</h1>
    </div>
</template>

<!-- Denna del av koden är för stilmallar som gäller för den här komponenten -->
<!-- Här kan du lägga till specifik CSS-styling för den här sidan eller komponenten,
       men just nu är den tom och väntar på eventuell styling. -->
<style></style>
