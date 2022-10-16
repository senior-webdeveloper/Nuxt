<template>
  <div>
    <div>
      <main>
        <Support />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'NSK Support',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Contact our team today at NSK. We appreciate your time and strive to answer your questions quickly and accurately.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, nsk products, contact support, contact customer service'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'NSK Support'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Contact our team today at NSK. We appreciate your time and strive to answer your questions quickly and accurately.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/support'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'NSK Support'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Contact our team today at NSK. We appreciate your time and strive to answer your questions quickly and accurately.'
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