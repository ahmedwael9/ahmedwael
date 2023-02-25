<template>
  <div
  >
  <v-app-bar
  class="px-16"
  absolute
  elevation="0"
      color="white"
    >

      <v-toolbar-title class="font-weight-bold">AHMED WAEL</v-toolbar-title>
      <v-spacer/>

      <v-btn text>
      HOME
    </v-btn>
    <svg style="width: 15px;" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g transform="translate(0 24) scale(1 -1)"><path fill="currentColor" d="M12 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z"/></g></svg>
    <v-btn text>
        CONTACT ME
    </v-btn>
    <svg style="width: 15px;" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g transform="translate(0 24) scale(1 -1)"><path fill="currentColor" d="M12 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z"/></g></svg>
      <v-btn text>
      MY PROJECTS
    </v-btn>

      <v-spacer/>

      <div class="text-center">
    <v-btn
      rounded
      dark
      @click="$vuetify.theme.dark=toggle()"
    >
      KEEP IN TOUCH
    </v-btn>
  </div>
    </v-app-bar>

  </div>
</template>


<script>
export default {


  
  data() {
    return {
      collapse:false
      
    };
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse;
      return this.collapse
    }
  }
};
</script>
