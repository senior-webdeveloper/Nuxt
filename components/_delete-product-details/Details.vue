// CD (KO on 20210228): component used in only "/pages/_slug.vue"

<template>
  <section aria-labelledby="product-details">
    <h2 class="sr-only" id="product-details">Product Details</h2>
    <div class="overflow-hidden bg-white">
      <div class="">
        <!-- <pre>{{product}}</pre> -->
        <div class="hidden md:block">
          <h2>{{ product.details.name }}</h2>
          <!-- <p class="pt-4">[IF PART OF SERIES, SHOW SERIES NAME]</p> -->
          <p class="pt-4" v-if="hasIsAccessoryOrSparePartFor">
            <UiAppBadge
              v-for="(part, index) in product.isAccessoryOrSparePartFor"
              className="grey"
              :key="`series-${index}`"
              :label="part"

            />
          </p>
        </div>
        <div class="flex pt-4 space-x-2">
          <!-- CD (CD on 20210421): Use appbadge here for tags for this product -->

          <UiAppBadge
            v-for="(tag, index) in product.tags"
            :key="index"
            :label="tag"
            @click="redirect(tag)"
            className="grey-border"
            class="cursor-pointer"
          />
        </div>
        <div class="pt-10">
          <p>{{ product.details.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { stringify } from 'qs'
export default {
  props: ["product"],
  computed: {
    hasIsAccessoryOrSparePartFor() {
      return this.product.isAccessoryOrSparePartFor !== "[]";
    }
  },
  methods: {
    redirect(tag) {
      const qs = stringify({'products-content': { refinementList: { tags: [tag] } }})
      this.$router.push(`/products?${qs}`)
    }
  }
};
</script>
