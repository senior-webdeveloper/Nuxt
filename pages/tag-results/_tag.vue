<template>
  <div>
    <div>
      <main>
        <TagResults />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Search our products',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Looking for something? Search through our database'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Search our products'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Looking for something? Search through our database'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Search our products'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Looking for something? Search through our database'
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
