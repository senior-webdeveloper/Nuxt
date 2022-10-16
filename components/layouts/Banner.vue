<template>
  <div v-show="banner.status === 'active'">
    <a :href="banner.url">
      <div :style="{'background-color': banner.bannerColor ? banner.bannerColor : default_color}">
        <div class="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center">
              <p class="mx-auto" :style="{color: banner.textColor ? banner.textColor : default_text_color}" v-html="banner.text"></p>
          </div>
        </div>
      </div>
      </a>
  </div>
</template>

<script>
import { FETCH_ONE_BANNER } from "~/graphql/dashboard/admin/cms/banner";

export default {
  data() {
    return {
      banner: {},
      default_color: null,
      default_text_color: null,
    }
  },
  created(){
    this.default_color = process.env.BANNER_COLOR
    this.default_text_color = process.env.BANNER_TEXT_COLOR
  },
  async fetch(){
    const banner = await this.$apollo.query({ 
      query: FETCH_ONE_BANNER,
      variables: { query: { id: 1 } }
     });
    this.banner = banner.data.banners[0]
  },
}
</script>