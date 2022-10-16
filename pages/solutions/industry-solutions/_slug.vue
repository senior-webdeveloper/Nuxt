<template>
  <div>
    <SolutionsProductsHeader :name="solution.name" :description="solution.description" :headerImage="solution.headerImage"/>
    <SolutionsVideoShowcase v-if="videos.length" :videos="videos"/>
    <SolutionsProductsList v-if="solution.products" :products="solution.products"/>
  </div>
</template>

<script>
import breadcrumbMixin from "~/mixins/breadcrumb";
import { FETCH_ALL_VIDEOS } from "~/graphql/dashboard/admin/cms/videos";

export default {
  mixins: [breadcrumbMixin],
  head() {
    return {
      title: this.solution.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.solution.description
        },
        {
        hid: 'keywords',
        name: 'keywords',
        content: 'nsk solutions, industry solutions'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.solution.name
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.solution.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.solution.image
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
          content: this.solution.name
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.solution.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.solution.image
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
  async asyncData({ app, $content, params }){

    const client = app.apolloProvider.defaultClient;

    let {
      data: { videos }
      } = await client.query({
      query: FETCH_ALL_VIDEOS,
    })

    let solution = await $content('solutions').where({category: 'Industry Solutions', slug: params.slug }).fetch()
    solution = solution[0]

    videos = videos.filter(video => {
      return video.tags.some(tag => tag.slug === solution.slug)
    });

    return { solution, videos }
  },
  created(){
    this.setBreadcrumb(this.solution.name)
  }
}
</script>
