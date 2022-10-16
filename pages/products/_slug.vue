<!-- CD (CT on 20210819): Original working file this is based on is _slug-original-working.vue -->

<template>
  <div>
    <ProductsProductDetails :product="product" />
    <ProductsRelatedProductsHeader :product="product" />
    <ProductsRelatedProducts :headers="options" :relatedProducts="relatedProducts" />
  </div>
</template>

<!-- CD (CT on 20210819): Script part not cleaned up yet from original file _slug-original-working.vue -->
<script>
import breadcrumbMixin from "~/mixins/breadcrumb";

export default {
  mixins: [breadcrumbMixin],
  layout: "product-detail",
  head() {
    return {
      title: this.product.details.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `NSK offers a wide range of ${this.product.productCategory} and ${this.product.toolType}, such as ${this.product.details.alternateName}`
        },
        {
        hid: 'keywords',
        name: 'keywords',
        content: this.product.tags
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.product.details.name
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `NSK offers a wide range of ${this.product.productCategory} and ${this.product.toolType}, such as ${this.product.details.alternateName}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.product.details.image
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: process.env.APP_URL + this.$route.fullPath
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'NSK'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.product.details.name
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `NSK offers a wide range of ${this.product.productCategory} and ${this.product.toolType}, such as ${this.product.details.alternateName}`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.product.details.image
        },
        {
          // Twitter Username @
          hid: 'twitter:site',
          name: 'twitter:site',
          content: ''
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        }
      ]
    }
  },
  async asyncData({ params, $content }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    const [product] = await $content("products")
      .where({ slugForUrl: slug })
      .fetch();

    let relatedProducts = []
    if(product.isRelatedTo){
      relatedProducts = await $content("products")
        .where({ sku: { $in: product.isRelatedTo } })
        .fetch();
    }

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
  watch: {
    // whenever question changes, this function will run
    checkedproductCategory: async function(
      newCheckedproductCategory,
      oldCheckedproductCategory
    ) {
      // console.log(newCheckedproductCategory)
      if(this.product.isRelatedTo){
        this.relatedProducts = await this.$content("products")
          .where({
            sku: { $in: this.product.isRelatedTo },
            productCategory: newCheckedproductCategory
          })
          .fetch();
      }
    }
  },
  created(){
    this.setBreadcrumb(this.product.details.name)
  }
};
</script>