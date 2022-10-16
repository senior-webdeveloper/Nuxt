<template>
  <!-- Keep the fields blank if no value -->

  <div class="relative overflow-hidden bg-white">
    <template>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <h1>
            <span class="block text-center">
              {{ news.headline }}</span>
          </h1>
          <p class="max-w-2xl mx-auto mt-3 text-xl text-center text-blueGray-500 sm:mt-4">
            {{ news.datePublished | formatDate }}
          </p>
          <p class="max-w-2xl mx-auto mt-3 text-xl text-center text-blueGray-500 sm:mt-4">
            {{ news.author }}
          </p>
        </div>
        
        <div class="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
          <figure>
            <img class="w-full rounded-sm" :src="news.image | image" :alt="news.headline">
            <!--<figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>-->
          </figure>
          <div v-html="news.articleBody"></div>
          <!--<a :href="news.url" :title="`${news.headline} URL`" class="cursor-pointer">Download file here.</a>-->
        </div>
        <div class="mt-10 text-center">
          <UiAppBadge class="mx-1 my-1" v-for="tag in news.tags" :key="tag.id" :tag="tag" :className="'grey-border'" :label="tag.title"/>
        </div>
      </div>
    </template>
  </div>

</template>

<script>
import breadcrumbMixin from "~/mixins/breadcrumb";

export default {
  mixins: [breadcrumbMixin],
  props: ["news"],
  created(){
    this.setBreadcrumb(this.news.headline)
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    image(image) {
      return image.includes("http") ? image : `https://${image}`;
    }
  }
};
</script>
