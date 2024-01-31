<!-- Denna del av koden importeras två komponenter från filer NavBar.vue och FooterComponent.vue -->
<script setup>
    import NavBar from './components/NavBar.vue';
    import FooterComponent from './components/FooterComponent.vue';
</script>

<!-- Denna del av koden utgör HTML-mallen och använder de importerade komponenterna NavBar och FooterComponent -->
<template>
    <!-- Här används NavBar-komponenten för att skapa en navigeringsfält överst på sidan -->
    <NavBar />

    <!-- Här används FooterComponent-komponenten för att skapa en sidfot längst ned på sidan -->
    <FooterComponent />
</template>

<!-- Denna del av koden är för stilmallar som gäller endast för den här komponenten -->
<!-- Här kan du lägga till specifik CSS-styling för komponenten,
       men just nu är den tom och väntar på eventuell styling. -->
<style scoped></style>
