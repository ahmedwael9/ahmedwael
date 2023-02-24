<template>
  <div
  >
  <v-app-bar
  class="px-16"
  absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>AHMED</v-toolbar-title>
      <v-spacer/>

      <v-btn text>
      HOME
    </v-btn>
      <v-btn text>
        CONTACT ME
    </v-btn>
      <v-btn text>
      MY PROJECTS
    </v-btn>

      <v-spacer/>

      <div class="text-center">
    <v-btn
      rounded
      dark
      @click="$vuetify.theme.dark=true"
    >
      KEEP IN TOUCH
    </v-btn>
  </div>

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}


</static-query>

<script>
export default {


  
  data() {
    return {
      drawer: false,
      group: null,
      collapse: false,
      items: [
        { title: "Home", icon: "fa-home", path: "/about" },
        { title: "About", icon: "fa-user-astronaut", path: "/about" },
        { title: "Articles", icon: "fa-newspaper", path: "/articles" },
        { title: "Contact", icon: "fa-envelope", path: "/contact" }
      ],
      mini: false
    };
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse;
    }
  }
};
</script>
