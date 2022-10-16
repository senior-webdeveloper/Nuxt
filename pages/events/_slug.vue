<template>
  <div>
    <div>
      <main>
        <EventsArticle :event="event"/>
      </main>
    </div>
  </div>
</template>

<script>
import { FETCH_ONE_EVENT } from "~/graphql/dashboard/admin/event";

export default {
  head() {
    return {
      title: this.event.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.event.name
        },
        {
        hid: 'keywords',
        name: 'keywords',
        content: this.event.tags.map(tag => tag.title)
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.event.name
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.event.name
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.event.image
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
          content: this.event.name
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.event.name
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.event.image
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
      data: { event }
    } = await app.apolloProvider.defaultClient.query({
      query: FETCH_ONE_EVENT,
      variables: { query: { slug: route.params.slug } }
    });
    return { event }
  },
}
</script>