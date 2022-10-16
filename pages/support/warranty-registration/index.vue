<template>
  <div>
    <div>
      <main>
        <SupportFormWarrantyRegistration />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Warranty Registration Form',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Register your NSK products and get listed for warranty.'
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
          content: 'Warranty Registration Form'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Register your NSK products and get listed for warranty.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/support/warranty-registration'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Warranty Registration Form'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Register your NSK products and get listed for warranty.'
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