<template>
  <div>
    <div class="text-center">
      <h1>
        Ads
      </h1>
      <p class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
        The latest promotions and offers from NSK as seen in trade publications.
      </p>
    </div>
    <div class="grid gap-5 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
      <!-- Use the following fields
        Title - title
        Subtitle - no value
        Content - description
        image - image
        imageAlt - title
      -->
      <template v-for="ad in ads">
        <UiAppCardPortrait1
        :key="ad._id"
        :type="{ whole: false, line: true }"
        :title="ad.title"
        subtitle=""
        :image="ad.image|image"
        :imgAlt="ad.title"
        :tags="ad.tags"
        content=""
        :to="`/ads/${ad.slug}`"
        @click="goToAd(ad)"
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
import { FETCH_ALL_AD } from "~/graphql/dashboard/admin/ad";
export default {
  async fetch() {
    const {
      data: { ads }
    } = await this.$apollo.query({ query: FETCH_ALL_AD });
    this.ads = ads
  },
  data: () => ({
    ads: []
  }),
  methods: {
    goToAd(ad) {
      this.$router.push(`/ads/${ad.slug}`);
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
    image(image) {
      return image.includes("http") ? image : `https://${image}`;
    }
  }
};
</script>
