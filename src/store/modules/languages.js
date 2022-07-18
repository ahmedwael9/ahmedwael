const state = {
    currentLang: "primary",
}

const getters = {
    currentLang: state => state.currentLang,
}

const actions = {}

const mutations = {
    changeCurrentLang: (state, payload) => {
        state.currentLang = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}