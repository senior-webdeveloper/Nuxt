<template>
  <div>
    <div>
      <main>
        <Ads :ad="ad"/>
      </main>
    </div>
  </div>
</template>

<script>
import { FETCH_ONE_AD } from "~/graphql/dashboard/admin/ad";

export default {
  head() {
    return {
      title: this.ad.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.ad.title
        },
        {
        hid: 'keywords',
        name: 'keywords',
        content: this.ad.tags.map(tag => tag.title)
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.ad.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.ad.title
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.ad.image
        },
        //Need site name, maybe as env variable
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
          content: this.ad.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.ad.title
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.ad.image
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
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: ''
        },
      ]
    }
  },
  async asyncData({app, route}) {
    const {
      data: { ad }
    } = await app.apolloProvider.defaultClient.query({
      query: FETCH_ONE_AD,
      variables: { query: { slug: route.params.id } }
    });
    return { ad }
  },
}
</script>
