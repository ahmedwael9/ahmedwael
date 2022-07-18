import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import themes from './modules/themes'
import languages from './modules/languages'

Vue.use(Vuex)

let plugins = []
if(process.isClient) {
    plugins = [
        createPersistedState({ fetchBeforeUse: true })
    ]
} 

export default new Vuex.Store({
    modules: {
        themes,
        languages,
    },
    plugins
})