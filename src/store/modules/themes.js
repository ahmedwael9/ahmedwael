const state = {
    currentTheme: "primary",
}

const getters = {
    currentTheme: state => state.currentTheme,
}

const actions = {}

const mutations = {
    changeCurrentTheme: (state, payload) => {
        state.currentTheme = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}