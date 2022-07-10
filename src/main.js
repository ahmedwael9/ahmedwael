// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// import bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import Bootstrap from "bootstrap/dist/js/bootstrap.min.js"

import "bootstrap-icons/font/bootstrap-icons.css"

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
