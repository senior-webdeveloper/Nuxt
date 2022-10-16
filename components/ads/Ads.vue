<template>
  <!-- Keep the fields blank if no value -->

  <div class="relative overflow-hidden bg-white">
    <template>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <h1>
            <span class="block text-center">
              {{ad.title}}</span>
          </h1>
          <!-- Add tags here. Use class "border-gray" -->
        </div>
        <div class="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
          <figure>
            <img class="w-full rounded-sm" :src="ad.image|image" :alt="ad.title">
            <!--<figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>-->
          </figure> 
          <div v-html="ad.description"></div>
          <!--<a :href="ad.url" class="cursor-pointer">See ad here.</a>-->
        </div>
        <div class="mt-5 text-center">
          <UiAppBadge class="mx-1 my-1" v-for="tag in ad.tags" :key="tag.id" :tag="tag" :className="'grey-border'" :label="tag.title"/>
        </div>
      </div>
    </template>
  </div>

</template>


<script>
import breadcrumbMixin from "~/mixins/breadcrumb";

export default {
  mixins: [breadcrumbMixin],
    props: ["ad"],
    created(){
      this.setBreadcrumb(this.ad.title)
    },
  filters: {
    image(image) {
      return image.includes("http") ? image : `https://${image}`;
    }
  }
}
</script>
