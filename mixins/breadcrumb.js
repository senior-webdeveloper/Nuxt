import { mapState } from 'vuex'
export default {
  computed: mapState(['breadcrumb']),
  methods: {
    setBreadcrumb(name) {
      this.$store.commit('breadcrumb/set', name)
    },
  }
}