<template>
  <div>
    <div>
      <main>
        <AdsList />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Advertisements',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Download our fliers.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, NSK fliers, NSK publication materials, NSK advertisements, NSK announcements'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Advertisements'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Download our fliers.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/ads'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Advertisements'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Download our fliers.'
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