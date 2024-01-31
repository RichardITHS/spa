<!-- Denna del av koden använder 'script setup' för att importera RouterLink och RouterView från vue-router -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- Denna del av koden utgör en navigationsheader med en navbar och offcanvas-meny -->
<template>
  <header>
    <!-- Navbar med en fast position högst upp på sidan -->
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">

        <!-- En RouterLink som fungerar som en länk till startsidan och har texten "SPA App" -->
        <RouterLink class="navbar-brand" to="/">SPA App</RouterLink>

        <!-- En knapp för att visa offcanvas-menyen när skärmen är mindre -->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Offcanvas-meny som visas när knappen trycks -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">SPA App</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <!-- En lista med navigationslänkar för startsidan och "About" sidan -->
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/">SPA App</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- RouterView används för att rendera den aktuella routade komponenten -->
  <RouterView />
</template>


<!-- Denna del av koden är för stilmallar som gäller endast för den här komponenten -->
<style scoped>

/* Stilar för header-elementet, sätter radhöjd och maximal höjd */
header {
  line-height: 1.5;
  max-height: 100vh;
}

/* Stilar för offcanvas-titeln, sätter textfärg till svart */
.offcanvas-title{
  color:black;
}

/* Stilar för navbar-brand, sätter textfärg till vit */
.navbar-brand {
  color:white;
}

/* Stilar för navbar-toggler, sätter bakgrundsfärg till vit */
.navbar-toggler{
  background-color:white;
}

</style>
