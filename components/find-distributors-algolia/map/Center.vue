<script>
export default {
  props: ["item"],
  watch: {
    item: {
      deep: true,
      immediate: true,
      handler(item) {
        this.$emit("center", item);
      }
    }
  },
  render() {
    return null;
  }
};
</script>
