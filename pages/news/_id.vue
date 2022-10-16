<template>
  <div>
    <div>
      <main>
        <NewsArticle :news="news"/>
      </main>
    </div>
  </div>
</template>

<script>
import { FETCH_ONE_NEWS } from "~/graphql/dashboard/admin/news";

export default {
  head() {
    return {
      title: this.news.headline,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `NSK News ${this.news.datePublished} - ${this.news.articleBody.replace(/<[^>]*>/g, '').replace("&amp;", "&").replace("&quot;", '"').replace("&#039;", "'").replace("&nbsp;", " ")}`
        },
        {
        hid: 'keywords',
        name: 'keywords',
        content: this.news.tags.map(tag => tag.title)
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.news.headline
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `NSK News ${this.news.datePublished} - ${this.news.articleBody.replace(/<[^>]*>/g, '').replace("&amp;", "&").replace("&quot;", '"').replace("&#039;", "'").replace("&nbsp;", " ")}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.news.image
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
          content: this.news.headline
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `NSK News ${this.news.datePublished} - ${this.news.articleBody.replace(/<[^>]*>/g, '').replace("&amp;", "&").replace("&quot;", '"').replace("&#039;", "'").replace("&nbsp;", " ")}`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.news.image
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
      data: { news }
    } = await app.apolloProvider.defaultClient.query({
      query: FETCH_ONE_NEWS,
      variables: { query: { slug: route.params.id } }
    });
    return { news }
  },
}
</script>
