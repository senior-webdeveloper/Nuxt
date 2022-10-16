// CD (KO on 20210228): component used in only "/pages/_slug.vue"

<template>
  <div>
    <h2>Related Products</h2>

    <UiAppTabs v-model="selected" :tabs="tabs">
      <ul id="example-1">
        <li
          v-for="(product, index) in products.filter(product => {
            return product.productCategory == tabs[selected];
          })"
          :key="index"
          @click="redirect('/test-products/' + product.slugForUrl)"
          class="cursor-pointer"
        >
          {{ product.details.name }}
          <br />
          {{ product.details.description }}
          <br />
          <br />
        </li>
      </ul>
    </UiAppTabs>
  </div>
</template>
<script>
export default {
  props: ["options", "products"],
  watch: {
    // whenever question changes, this function will run
    selected: function(newSelected, oldSelected) {
      console.log(this.selected);
    }
  },
  data() {
    return {
      selected: 0,
      tabs: this.options
    };
  },
  methods: {
    redirect(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>
