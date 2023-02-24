import Vuetify from "vuetify";
import DefaultLayout from "~/layouts/Default.vue";

import "vuetify/dist/vuetify.min.css";
// import { aliases, mdi } from 'vuetify/iconsets/mdi'
import colors from "vuetify/lib/util/colors";

export default function(Vue, { appOptions, head }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css"
  });
  // head.link.push({
  //   rel: "stylesheet",
  //   href: "https://use.fontawesome.com/releases/v5.10.2/css/all.css"
  // });

  const opts = {
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
      // iconfont: "mdi" // 'fa' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    // icons: {
    // },
    // adjust the theme if you would like to
    // theme: {
    //   themes: {
    //     light: {
    //       primary: colors.teal.darken2,
    //       secondary: "#424242",
    //       accent: "#82B1FF",
    //       error: "#FF5252",
    //       info: "#2196F3",
    //       success: "#4CAF50",
    //       warning: "#FFC107"
    //     }
    //   }
    // }
  };
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
