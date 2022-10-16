import { mapState } from 'vuex'
export default {
  computed: mapState(['notification']),
  methods: {
    setNotification(data) {
      this.$store.commit('notification/set', data)
    },
    resetNotification() {
      this.setNotification({
        show:false,
        title: '',
        content: ''
      })
    }
  }
}
