<template>
  <div>
    <div>
      <main>
        <SupportFormRepairReturn />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Repair/Return Form',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: "Need to repair or return a tool? Send us details about your product and we'll advise on the next steps."
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, NSK products repair, NSK products return'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Repair/Return Form'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: "Need to repair or return a tool? Send us details about your product and we'll advise on the next steps."
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/support/repair-return-form'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Repair/Return Form'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: "Need to repair or return a tool? Send us details about your product and we'll advise on the next steps."
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
