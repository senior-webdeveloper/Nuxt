<template>
  <div>
    <div>
      <main>
        <NewsList />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'News about NSK Products and the company',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: "Read the latest on NSK, products developments and NSK's role in different industries."
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, NSK news, NSK updates, NSK announcements, NSK press release'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'News about NSK Products and the company'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: "Read the latest on NSK, products developments and NSK's role in different industries."
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/news'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'News about NSK Products and the company'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: "Read the latest on NSK, products developments and NSK's role in different industries."
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
