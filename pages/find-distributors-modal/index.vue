<template>
  <div>
    <div>
      <main>
        <!-- <FindDistributorsHeading />
        <FindDistributorsMap />
        <FindDistributorsSearch /> -->
        <FindDistributorsListingsGridModal />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Find Distributors',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: ''
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: ''
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: ''
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: ''
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: ''
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: 'NSK America'
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: ''
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: ''
      },
      {
          hid: `twitter:image`,
          name: 'twitter:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `twitter:site`,
          name: 'twitter:site',
          content: 'NSK America'
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