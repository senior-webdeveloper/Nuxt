// CD (KO on 20210228): component used in only "/pages/_slug.vue"

<template>
  <div>
    <section aria-labelledby="product-details">
      <h2 class="sr-only" id="product-details">Product Details</h2>
      <div class="overflow-hidden bg-white">
        <div class="">
          <!-- <pre>{{product}}</pre> -->
          <div class="hidden md:block">
            <h1>{{ series.name }}</h1>
            <!-- <p class="pt-4">[IF PART OF SERIES, SHOW SERIES NAME]</p> -->
            <!-- <p class="pt-4">{{product.isAccessoryOrSparePartFor.toString()}}</p> -->
          </div>
          <div class="flex pt-4 space-x-2">
            <!-- CD (CD on 20210421): Use appbadge here for tags for this product -->
         
            <!-- <UiAppBadge v-for="(tag,index) in product.tags" :key="index" className="grey-border" :label="tag" /> -->
            <!-- <UiAppBadge className="grey-border" label="tag2" />
            <UiAppBadge className="grey-border" label="tag3" />
            <UiAppBadge className="grey-border" label="tag4" /> -->
          </div>
          <div class="pt-10">
            <p>{{ series.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["series"]
};
</script>
