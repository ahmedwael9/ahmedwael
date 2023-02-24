<template>
  <v-app>
  <v-app-bar app>
    <Header  />
  </v-app-bar>

  <v-main>
    <!-- <v-container> -->
      <slot />
    <!-- </v-container> -->
  </v-main>
  <Footer />
</v-app>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
  components: { Header, Footer },
}
</script>