<template>
  <div>
    <div>
      <main>
        <FindDistributorsHeading />
        <FindDistributorsListingsGrid />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Distributors and Sales Representatives',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Search for the nearest distributors and sales representatives near you.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, nsk distributors, nsk sales representatives, nsk locations'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Distributors and Sales Representatives'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Search for the nearest distributors and sales representatives near you.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/find-distributors'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Distributors and Sales Representatives'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Search for the nearest distributors and sales representatives near you.'
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