<template>
  <div>
    <div>
      <main>
        <CompanyProfileJapan /> 
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'NSK Japan Company Profile',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Learn about NSK Japan.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, NSK Japan'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'NSK Japan Company Profile'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Learn about NSK Japan.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/company-profile/japan'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'NSK Japan Company Profile'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Learn about NSK Japan.'
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