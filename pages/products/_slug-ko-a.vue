<template>

  <div class="pb-8 bg-red-300 sm:pb-12 lg:pb-12">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div class="hidden sm:block">
          </div>
          <div class="relative pl-4 bg-gray-500 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <!-- <ProductsHero :product="product" /> -->test
          </div>
        </div>
      </div>
      <div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div class="mt-20">
            <div class="mt-6 sm:max-w-xl">
              <h1>{{ product[0].details.name }}</h1>
                <p>Series (if applicable)</p>
              <p class="mt-6 text-xl text-gray-500">
                {{ product[0].details.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  layout: "product-detail",
  watch: {
    // whenever question changes, this function will run
    checkedproductCategory: async function(
      newCheckedproductCategory,
      oldCheckedproductCategory
    ) {
      // console.log(newCheckedproductCategory)
      this.relatedProducts = await this.$content("products")
        .where({
          sku: { $in: this.product.isRelatedTo },
          productCategory: newCheckedproductCategory
        })
        .only([
          "sku",
          "isAccessoryOrSparePartFor",
          "details",
          "toolType",
          "productCategory",
          "productType",
          "tags",
          "inProductGroupWithID",
          "isRelatedTo"
        ])
        .fetch();
    }
  },
  async asyncData({ params, $content }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    const [product] = await $content("products")
      .where({ slugForUrl: slug })
      .fetch();

    const relatedProducts = await $content("products")
      .where({ sku: { $in: product.isRelatedTo } })
      .fetch();

    const options = relatedProducts
      .map(item => item.productCategory)
      .filter((value, index, self) => self.indexOf(value) === index);

    return {
      product: product,
      relatedProducts: relatedProducts,
      options: options,
      checkedproductCategory: []
    };
  }
};
</script>

