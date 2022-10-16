<template>
  <div>
    <div>
      <main>
        <SupportContactUsFormContactUs /> 
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Contact Us',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Send us a message or drop us a call. Our team is ready to assist your concerns.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, contact nsk, customer support nsk'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Contact Us'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Send us a message or drop us a call. Our team is ready to assist your concerns.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/contact-us'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Contact Us'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Send us a message or drop us a call. Our team is ready to assist your concerns.'
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