// SeriesDetails and Series components insider the series folder have the same code. But when in here, 
  <SeriesSeriesDetails :series="series" /> does not work but
  <SeriesDetails :series="series" /> works.
// Same case with SeriesSeriesRelatedProducts vs SeriesRelatedProducts 

<template>
  <div>
    <SeriesDetails :series="series" />
    <SeriesRelatedProducts :options="options" :products="products" />
  </div>
</template>

<script>
import breadcrumbMixin from "~/mixins/breadcrumb";

export default {
  mixins: [breadcrumbMixin],
  layout: "product-detail",
  head() {
    return {
      title: this.series.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.series.description
        },
        {
        hid: 'keywords',
        name: 'keywords',
        content: this.series.tags
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.series.name
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.series.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.series.image
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
          content: this.series.name
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.series.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.series.image
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
    const [series] = await $content("series")
      .where({ slugForUrl: slug })
      .fetch();

    const products = await $content("products")
      .where({ isAccessoryOrSparePartFor: { $contains: series.name } })
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
    const options = products
      .map(item => item.productCategory)
      .filter((value, index, self) => self.indexOf(value) === index);

    return {
      series,
      products: products,
      options: options
    };
  },
  created(){
    this.setBreadcrumb(this.series.name)
  }
};
</script>