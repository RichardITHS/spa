<!-- Denna del av koden innehåller JavaScript-logik för komponenten -->
<script>
    export default {
        // Data-funktion som returnerar initiala data för komponenten
        data: function () {
            return {
                email: '',         // En variabel för e-postadressen
                emailBlured: false, // En variabel som indikerar om e-postadressen har blurrats (fokuserats och tappat fokus)
                valid: false,       // En variabel som indikerar om e-postadressen är giltig
                submitted: false    // En variabel som indikerar om formuläret har skickats
            }
        },
        // Metoder för att hantera validering och inskickning av formuläret
        methods: {
            // En metod för att validera e-postadressen
            validate: function () {
                this.emailBlured = true
                if (this.validEmail(this.email)) {
                    this.valid = true
                }
            },
            // En metod som använder en regex för att validera e-postadressen
            validEmail: function (email) {
                var re = /(.+)@(.+){2,}\.(.+){2,}/
                return re.test(email.toLowerCase())
            },
            // En metod för att skicka formuläret, kallar på validering först
            submit: function () {
                this.validate()
                if (this.valid) {
                    // HÄR SKICKAR DU DATA TILL SERVERN
                    this.submitted = true
                }
            } // Slut på submit-metoden
        } // Slut på methods-objektet
    } // Slut på export default
</script>
<!-- Denna del av koden är en Vue-komponent som innehåller ett formulär för att skicka e-post -->
<template>
    <!-- En container med klassen 'form-wrap' som innehåller formuläret -->
    <div class="form-wrap container">
        <!-- Om formuläret inte har skickats, visa inmatningsfälten och knappen -->
        <div v-if="!submitted">
            <!-- En formgrupp med etikett och inmatningsfält för e-postadress -->
            <div class="form-group">
                <label for="email">Email address</label>
                <!-- Binder in värdet av 'email' till inmatningsfältet,
                     använder dynamiska klasser baserat på villkor och hanterar blur-eventet -->
                <input
                    v-model="email"
                    v-bind:class="{
                        'form-control': true,
                        'is-invalid': !validEmail(email) && emailBlured
                    }"
                    v-on:blur="emailBlured = true"
                />
                <!-- En felmeddelande som visas om e-postadressen inte är giltig -->
                <div class="invalid-feedback">
                    Vänligen fyll i mail adress enligt xxx@xxx.com
                </div>
            </div>
            <!-- En knapp för att skicka formuläret -->
            <div class="form-group">
                <a
                    type="submit"
                    href="#"
                    v-on:click.stop.prevent="submit"
                    class="btn btn-lg btn-success"
                    >Skicka</a
                >
            </div>
        </div>
        <!-- Om formuläret har skickats, visa ett meddelande för lyckad inskickning -->
        <div v-else class="alert alert-success" role="alert">
            <!-- Använder v-model för att visa e-postadressen från formuläret -->
            <h5>Tack {{ email }}</h5>
            <p>Vi återkommer till er snarast</p>
        </div>
    </div>
</template>

<style scoped>
    #mail {
        margin-top: 5vh;
    }
    .form-wrap {
        padding-top: 35px;
    }
    .alert {
        padding-top: 2vh;
    }
    .alert h5 {
        margin-bottom: 0rem;
    }
    .form-group {
        padding-top: 1vh;
    }
</style>
