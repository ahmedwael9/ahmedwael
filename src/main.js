// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex  from 'vuex'
import store  from '@/store'

// import bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import Bootstrap from "bootstrap/dist/js/bootstrap.min.js"

import "bootstrap-icons/font/bootstrap-icons.css"

export default function (Vue, { router, head, isClient,appOptions }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuex)
  appOptions.store=store

}
