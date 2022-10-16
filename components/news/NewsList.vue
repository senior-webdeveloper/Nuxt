<template>
  <div>
    <div class="text-center">
      <h1>
        News
      </h1>
      <!--<p class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.
      </p>-->
    </div>
    <p v-if="$fetchState.pending">Loading news...</p>
    <div v-else class="grid gap-5 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
      <!-- Use the following fields
            Title - Headline
            subtitle - datePublished
            image - image
            imgAlt - Headline
            content - articleBody
          -->
      <template v-for="data in news">
        <UiAppCardPortrait1
          :key="data._id"
          :type="{ whole: false, line: true }"
          :title="data.headline"
          :subtitle="data.datePublished | formatDate"
          :image="data.image | image"
          :imgAlt="data.headline"
          :tags="data.tags"
          :content="data.articleBody"
          :to="`/news/${data.slug}`"
          @click="goToArticle(data)"
        >
          <template v-slot:footer>
            <div class="flex justify-end p-2">
              <UiAppButton className="icon">
                <UiIconArrowPointingToRight />
              </UiAppButton>
            </div>
          </template>
        </UiAppCardPortrait1>
      </template>
    </div>
  </div>
</template>

<script>
import { FETCH_ALL_NEWS } from "~/graphql/dashboard/admin/news";
export default {
  async fetch() {
    const {
      data: { news }
    } = await this.$apollo.query({ query: FETCH_ALL_NEWS });
    news.sort(function (a, b) {
      const a_date = new Date(a.datePublished)
      const b_date = new Date(b.datePublished)
      return b_date - a_date
    })
    this.news = news;
  },
  data: () => ({
    news: []
  }),
  methods: {
    goToArticle(article) {
      this.$router.push(`/news/${article.slug}`);
    }
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
