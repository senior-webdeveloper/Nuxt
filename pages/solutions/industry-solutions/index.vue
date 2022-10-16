<template>
  <div>
    <div>
      <main>
        <SolutionsIndustrySolutions />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Industry Solutions',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Explore applications where NSK products are used.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, work materials, solutions, applications'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Industry Solutions'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Explore applications where NSK products are used.'
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
          content: 'Industry Solutions'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Explore applications where NSK products are used.'
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