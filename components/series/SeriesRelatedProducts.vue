// CD (KO on 20210228): component used in only "/pages/_slug.vue"

<template>
  <div>
    <h2>Related Products</h2>

    <UiAppTabs
      v-model="tabs.selected"
      with-view-option
      :tabs="headers"
      :view-option="tabs.view"
      @change:view="changeView"
    >
      <UiAppSwitchTableList :direction="tabs.view" :items="selectedProducts">
        <template #grid="{ item }">
          <UiAppCardPortraitRelatedProducts
            :type="{ whole: false, line: true }"
            :title="item.details.name"
            :subtitle="item.details.alternateName"
            :image="item.details.image"
            :imgAlt="item.details.name"
            :content="item.details.description"
            @click="redirect(item.slugForUrl)"
            :to="'/products/' + item.slugForUrl"
          >
          </UiAppCardPortraitRelatedProducts>
        </template>
        <template #list="{ item }">
          <UiAppCardLandscapeRelatedProducts
            :type="{ whole: false, line: true }"
            :title="item.details.name"
            :subtitle="item.details.alternateName"
            :image="item.details.image"
            :imgAlt="item.details.anme"
            :content="item.details.description"
            :to="'/products/' + item.slugForUrl"
          >
          </UiAppCardLandscapeRelatedProducts>
        </template>
      </UiAppSwitchTableList>
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
      headers: this.options,
      tabs: {
        view: "grid",
        selected: 0
      }
    };
  },
  methods: {
    redirect(slug) {
      this.$router.push(`/products/${slug}`);
    },
    changeView(view) {
      this.tabs.view = view;
    }
  },
  computed: {
    selectedProducts() {
      return this.products.filter(
        product => product.productCategory === this.headers[this.tabs.selected]
      );
    }
  }
};
</script>
