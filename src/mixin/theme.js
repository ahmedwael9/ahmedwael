import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('themes', {
            currentTheme: 'currentTheme',
        })
    },
    methods: {
        setTheme(color) {
            this.$store.commit('themes/changeCurrentTheme', color)
        },
    },
}