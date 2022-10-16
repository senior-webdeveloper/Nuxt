// CD (KO on 20210228): component used in only "/pages/_slug.vue"

<template>
  <div>
    <div class="relative">
      <h4 class="text-lg font-semibold text-gray-900">
        Related Products
      </h4>
    </div>

    <UiAppTabs
      v-model="tabs.selected"
      with-view-option
      :tabs="headers"
      :view-option="tabs.view"
      @change:view="changeView"
    >
      <section class="pb-16 mt-8" aria-labelledby="related-products">
      <UiAppSwitchTableList :direction="tabs.view" :items="selectedProducts" v-if="selectedProducts.length">
        <template #grid="{ item }">
          <UiAppCardPortraitRelatedProducts
            :type="{ whole: false, line: true }"
            :title="item.details.name"
            :subtitle="item.details.alternateName"
            :image="item.details.image"
            :imgAlt="item.details.name"
            :content="item.details.description"
            :sku="item.sku"
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
            :sku="item.sku"
            :to="'/products/' + item.slugForUrl"
          >
          </UiAppCardLandscapeRelatedProducts>
        </template>
      </UiAppSwitchTableList>
      <div v-else>
        <p class="text-blueGray-600">No related products in this category.</p>
      </div>
      </section>
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
