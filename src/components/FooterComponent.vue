<!-- Denna del av koden innehåller en Vue-komponent för en footer-sektion på webbsidan -->
<template>
    <!-- Footer-sektion -->
    <footer class="text-center text-white" style="background-color: #45637d">
        <!-- Behållare för grid -->
        <div class="container p-4">
            <!-- Avsnitt: Iframe -->
            <section class="">
                <!-- Rad för att justera innehållet horisontellt -->
                <div class="row d-flex justify-content-center">
                    <!-- Kolumn med bredd för stora skärmar (lg) -->
                    <div class="col-lg-6">
                        <!-- Förhållande (ratio) för att bibehålla 16x9-aspektförhållandet i iframe -->
                        <div class="ratio ratio-16x9">
                            <!-- Iframe för att bädda in en YouTube-video -->
                            <iframe
                                width="1190"
                                height="669"
                                src="https://www.youtube.com/embed/QZbuj3RJcjI"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Copyright-information -->
        <div
            class="text-center p-3"
            style="background-color: rgba(0, 0, 0, 0.2)"
        >
            © 2023 Copyright: Richard
            <!-- Länk till en extern webbplats (iths.se) -->
            <a class="text-white" href="https://iths.se/" />
        </div>
        <!-- Slut på copyright-information -->
    </footer>
</template>
