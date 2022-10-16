<template>
  <div>
    <div>
      <main>
        <ProductsList />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Products',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Find what you need from our range of products such as electric and pneumatic hand grinders, ultrasonic polishers and cutters, spindles, airline kits and air turbines.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, series, nsk products, machining spindles, hand tools, electric spindles, pneumatic spindles, airline kits'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Products'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Find what you need from our range of products such as electric and pneumatic hand grinders, ultrasonic polishers and cutters, spindles, airline kits and air turbines.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/products'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Products'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Find what you need from our range of products such as electric and pneumatic hand grinders, ultrasonic polishers and cutters, spindles, airline kits and air turbines.'
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