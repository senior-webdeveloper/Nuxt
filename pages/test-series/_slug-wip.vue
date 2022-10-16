<template>
  <div>
    <main class="pb-8">
      <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">{{ series[0].name }}</h1>
        <!-- Main 2 column grid -->
        <div class="grid items-start grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 p-2 border border-red-500">
            <SeriesHero :series="series[0]"/>
            
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4 p-2 border border-blue-500">
            <SeriesDetails :series="series[0]" />
          </div>

          <!-- RELATED PRODUCTS -->
          <div
            class="grid grid-cols-1 gap-4 p-2 border border-green-500 md:col-span-2"
          >
            <SeriesRelatedProducts
              :options="options"
              :products="products"
            />
            <!-- :relatedProducts="relatedProducts" -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $content }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    const series = await $content("series")
      .only(["name", "description", "image", "catalog"])
      .where({ slugForUrl: slug })
      .fetch();

    const products = await $content("products")
      .where({ isAccessoryOrSparePartFor: { $contains: series[0].name } })
      .only([
        "sku",
        "isAccessoryOrSparePartFor",
        "details",
        "toolType",
        "productCategory",
        "productType",
        "tags",
        "inProductGroupWithID",
        "isRelatedTo",
        "slugForUrl"
      ])
      .fetch();
  console.log(products)
    const options = products
      .map(item => item.productCategory)
      .filter((value, index, self) => self.indexOf(value) === index);

    return {
      series,
      products: products,
      options: options,
    
    };
  }
};
</script>
