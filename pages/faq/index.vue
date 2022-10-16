<template>
  <div>
    <div>
      <main>
        <Faq-2 />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Frequently Asked Questions',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: "Find answers to your questions about NSK's products, offerings, warranties, returns, and other questions related to airline kits, collets, and electric systems."
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, faq, questions about nsk products, question nsk product warranties, return process'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Frequently Asked Questions'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: "Find answers to your questions about NSK's products, offerings, warranties, returns, and other questions related to airline kits, collets, and electric systems."
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
          content: 'Frequently Asked Questions'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: "Find answers to your questions about NSK's products, offerings, warranties, returns, and other questions related to airline kits, collets, and electric systems."
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