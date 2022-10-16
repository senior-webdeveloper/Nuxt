<template>
  <div>
    <div>
      <main>
        <CompanyProfile />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'NSK Company Profile',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: "Learn about Nakanishi's America and Japan company profiles."
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, NSK America, NSK Japan, NSK company profiles'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'NSK Company Profile'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: "Learn about Nakanishi's America and Japan company profiles."
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/faq'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'NSK Company Profile'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: "Learn about Nakanishi's America and Japan company profiles."
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