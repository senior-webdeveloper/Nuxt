<template>
  <div>
    <!--<h1 class="red">{{ product[0].details.name }}</h1>
    <h3 class="red">{{ product[0].details.description }}</h3>

    <div v-if="options">
      <br />
      <label v-for="(item, index) in options" :key="index"
        >{{ item }}
        <input type="radio" :value="item" v-model="checkedproductCategory" />
        <br />
      </label>
      <br />
    </div>

    <ul id="example-1" v-if="relatedProducts">
      <li v-for="(item, index) in relatedProducts" :key="index">
        {{ item.details.name }}
        <br />
        <small>{{ item.details.description }}</small>
        <br />
        <small>{{ item.productCategory }}</small>
        <br />
        <small style="color:blue">{{ item.isAccessoryOrSparePartFor }}</small>
        <br />
      </li>
    </ul>-->

    <div>
      <div class="min-h-screen bg-white">
        <main class="py-10">
          <!-- Page header -->
          <div
            class="max-w-3xl px-4 mx-auto sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"
          >
            <div class="flex items-center space-x-5">
              <div>
                <h1>{{product.details.name}}</h1>
                <p>Series (if applicable)</p>
              </div>
            </div>
          </div>

          <div
            class="grid max-w-3xl gap-6 mx-auto mt-8 md:grid-cols-2 sm:px-6 lg:max-w-7xl"
          >
            <div class="space-y-6 md:col-span-1">
              <!-- Product Image -->
              <ProductsHero :product="product" />
            </div>

            <ProductsDetails v-if="product" :product="product" />
          </div>

          <!-- RELATED PRODUCTS -->
          <!-- Main content -->
          <div class="flex items-stretch flex-1 overflow-hidden">
            <div class="flex-1 overflow-y-auto">
              <div class="px-4 pt-8 mx-auto md:pt-20 max-w-7xl sm:px-6 lg:px-8">
                <div class="flex">
                  <h1 class="flex-1 text-2xl font-bold text-gray-900">
                    Related Products
                  </h1>
                  <!-- <div
                    class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden"
                  >
                    <button
                      type="button"
                      class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="sr-only">Use list view</span>
                    </button>
                    <button
                      type="button"
                      class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      <span class="sr-only">Use grid view</span>
                    </button>
                  </div> -->
                </div>

                <!-- Related products -->
                <ProductsRelatedProducts :headers="options" :relatedProducts="relatedProducts" />
              </div>
            </div>
          </div>
        </main>
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
