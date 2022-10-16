<template>
  <div>
    <div>
      <main>
        <VideosList />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Product and Application Videos',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Watch NSK machine and hand tools in action. See the different product applications.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, spindles video, nsk hand tools video'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Product and Application Videos'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Watch NSK machine and hand tools in action. See the different product applications.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/videos'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Product and Application Videos'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Watch NSK machine and hand tools in action. See the different product applications.'
      },
      {
          hid: `twitter:image`,
          name: 'twitter:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `twitter:site`,
          name: 'twitter:site',
          content: ''
      },
      {
          hid: `twitter:card`,
          name: 'twitter:card',
          content: 'summary_large_image'
      },
      {
          hid: `twitter:creator`,
          name: 'twitter:creator',
          content: ''
      },
      ]
    }
  },
}
</script>