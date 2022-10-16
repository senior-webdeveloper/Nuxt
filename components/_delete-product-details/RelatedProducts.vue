// CD (KO on 20210228): component used in only "/pages/_slug.vue"

<template>
  <UiAppTabs
    v-model="tabs.selected"
    with-view-option
    :tabs="headers"
    :view-option="tabs.view"
    @change:view="changeView"
  >
    <section class="pb-16 mt-8" aria-labelledby="related-products">
      <UiAppSwitchTableList :direction="tabs.view" :items="selectedProducts">
        <template #grid="{ item }">
          <UiAppCardPortrait1
            :type="{ whole: false, line: true }"
            :title="item.details.name"
            :subtitle="item.details.alternateName"
            :image="item.details.image"
            :imgAlt="item.details.name"
            :content="item.details.description"
            @click="redirect(item.slugForUrl)"
          >
            <template v-slot:footer>
              <div class="mt-2">
                <UiAppButton
                  className="primary"
                  label="View"
                  @click="redirect(item.slugForUrl)"
                />
              </div>
            </template>
          </UiAppCardPortrait1>
        </template>
        <template #list="{ item }">
          <UiAppCardLandscape
            :type="{ whole: false, line: true }"
            :title="item.details.name"
            :subtitle="item.details.alternateName"
            :image="item.details.image"
            :imgAlt="item.details.name"
            :content="item.details.description"
            :to="'/products/' + item.slugForUrl"
          >
            <template v-slot:footer>
              <div class="flex justify-end p-2">
                <!-- Remove this button part, not needed -->
                <UiAppButton
                  className="icon"
                  @click="redirect(item.slugForUrl)"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </UiAppButton>
              </div>
            </template>
          </UiAppCardLandscape>
        </template>
      </UiAppSwitchTableList>
    </section>
  </UiAppTabs>
</template>
<script>
export default {
  props: ["relatedProducts", "headers"],
  data: () => ({
    tabs: {
      selected: 0,
      view: "grid"
    }
  }),
  computed: {
    selectedProducts() {
      return this.relatedProducts.filter(
        product => product.productCategory === this.headers[this.tabs.selected]
      );
    }
  },
  methods: {
    redirect(slug) {
      this.$router.push(`/products/${slug}`);
    },
    changeView(view) {
      console.log({ view });
      this.tabs.view = view;
    }
  }
};
</script>
