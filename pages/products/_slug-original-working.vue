//pages/products/_slug
// working. copied August 13 when trying the new layout

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
        <main class="w-full py-10">
          <!-- Prouct header -->
          <div class="max-w-3xl px-4 mx-auto sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div class="flex items-center space-x-5">
              <div>
                <h1>{{product.details.name}}</h1>
                <p>Series (if applicable)</p>
              </div>
            </div>
          </div>

          <div class="flex items-stretch flex-1 max-w-3xl overflow-hidden lg:max-w-7xl">
            <div class="px-4 pt-8 mx-auto md:pt-20 sm:px-6 lg:px-8">
              <div class="grid gap-6 mx-auto mt-8 space-y-6 gap-x-8 md:grid-cols-2 sm:px-6 ">
                <!-- Product Image -->
                <div>
                  <ProductsHero :product="product" />
                </div>
                <!-- Product Description -->
                <div>
                  <ProductsDetails v-if="product" :product="product" />
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-stretch flex-1 overflow-hidden">
            <div class="flex-1 overflow-y-auto">
              <div class="px-4 pt-8 mx-auto md:pt-20 max-w-7xl sm:px-6 lg:px-8">
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
import breadcrumbMixin from "~/mixins/breadcrumb";

export default {
  mixins: [breadcrumbMixin],
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
  },
  created(){
    this.setBreadcrumb(this.product.details.name)
  }
};
</script>
