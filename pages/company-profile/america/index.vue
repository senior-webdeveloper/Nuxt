<template>
  <div>
    <div>
      <main>
        <CompanyProfileAmerica /> 
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'NSK America Company Profile',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Learn about NSK America Corp'
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
          content: 'NSK America Company Profile'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Learn about NSK America Corp'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/company-profile/america'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'NSK America Company Profile'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Learn about NSK America Corp'
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