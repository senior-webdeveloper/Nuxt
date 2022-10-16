// CD (KO on 20210228): component used in only "/pages/index.vue"

<template>
  <div>
    <div class="overflow-hidden bg-gradient-to-b bg-blueGray-100">
      <div class="px-4 py-16 mx-auto lg:py-24 max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2>News</h2>
          <!-- <p class="mx-auto description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
        </div> 
        <div>
          <h2 v-if="$fetchState.pending">Loading news...</h2>
          <div v-else class="grid gap-5 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            <template v-for="data in news">
              <UiAppCardPortrait1
                :key="data._id"
                :type="{ whole: false, line: true }"
                :title="data.headline"
                :subtitle="data.datePublished | formatDate"
                :image="data.image | image"
                :imgAlt="data.headline"
                :tags="data.tags"
                :content="data.preview"
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
        <div class="mt-8 text-center">
          <nuxt-link 
            to="/news"
            title="Read More News" 
            class="font-semibold text-nsk-primary hover:text-gray-900">
            Read More News
            <span class="sr-only">Read More News</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_ALL_NEWS } from "~/graphql/dashboard/admin/news";

export default {
  data: () => ({
    news: []
  }),
  async fetch() {
    const {
      data: { news }
    } = await this.$apollo.query({ query: FETCH_ALL_NEWS });
    news.sort(function (a, b) {
      const a_date = new Date(a.datePublished)
      const b_date = new Date(b.datePublished)
      return b_date - a_date
    })
    this.news = news.slice(0, 3);
  },
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
}
</script>

