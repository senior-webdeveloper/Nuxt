// CD (KO on 20210228): component used in only "/pages/_slug.vue"

<template>
  <div>
    <h2>Related Products</h2>

    <ul id="example-1">
      <li
        v-for="(product, index) in relatedProducts.filter((product, index) => {
          //  CD (EV on 20210424): filter the products (8 random products)
          return product;
        })"
        :key="index"
        @click="redirect('/test-products/' + product.slugForUrl)"
        class="cursor-pointer"
      >
        {{ product.details.name }}
        <br />
        {{ product.productCategory }}

        <br />
        <img :src="product.details.image" :alt="product.details.name" />

        <br />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["relatedProducts"],
  methods: {
    redirect(url) {
      this.$router.push({ path: url });
    }
  }
  // watch: {
  //   // whenever question changes, this function will run
  //   selected: function(newSelected, oldSelected) {
  //     console.log(this.selected);
  //   }
  // },
  // data() {
  //   return {

  //     // tabs: this.options,
  //     //  CD (EV on 20210424): generate array of 8 elements from relatedProducts length
  //     // randomKey: Array(8)
  //     //   .fill()
  //     //   .map(() => Math.round(Math.random() * this.relatedProducts.length))
  //   };
  // }
};
</script>
