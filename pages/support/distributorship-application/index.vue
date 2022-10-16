<template>
  <div>
    <div>
      <main>
        <SupportFormDistributorshipApplication />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Application for Distributorship Form',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: "Apply for distributorship using this form and we'll guide you on the next steps."
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, apply for nsk distributorship, distributor application'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Application for Distributorship Form'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: "Apply for distributorship using this form and we'll guide you on the next steps."
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/support/distributorship-application'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Application for Distributorship Form'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: "Apply for distributorship using this form and we'll guide you on the next steps."
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
