import { mapState } from 'vuex'
export default {
  computed: mapState(['slider']),
  methods: {
    setSlider(data) {
      this.$store.commit('slider/set', data)
    },
    resetSlider() {
      this.setSlider({
        show:false,
        title: ''
      })
    }
  }
}
