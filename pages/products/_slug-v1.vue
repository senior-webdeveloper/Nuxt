<template>
  <div>
    <h1 class="red">{{ product[0].details.name }}</h1>
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
    </ul>
  </div>
</template>

<script>
export default {
  watch: {
    // whenever question changes, this function will run
    checkedproductCategory: async function(
      newCheckedproductCategory,
      oldCheckedproductCategory
    ) {
      // console.log(newCheckedproductCategory)
      this.relatedProducts = await this.$content("products")
        .where({
          sku: { $in: this.product[0].isRelatedTo },
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
    const product = await $content("products")
      .where({ slugForUrl: slug })
      .fetch();

    const relatedProducts = await $content("products")
      .where({ sku: { $in: product[0].isRelatedTo } })
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
