<template>
  <div>
    <main>
      <HomeHero />
      <HomeCtaStrip />
      <LazyHomeSeries />
      <LazyHomeCostSavingsAnalysis />
      <LazyHomeFeaturedProduct />
      <LazyHomeFeaturedProductGrid />
      <!--<LazyHomeFeaturedBlock />-->
      <!--<LazyHomeParagraph />-->
      <LazyHomeNewsPreview />
      <LazyHomeEventsPreview/>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'homepage',
  head () {
    return {
      title: 'NSK America Corporation - High Precision Electric and Pneumatic High Speed Spindles and Hand Tools',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'NSK America Corporation is a division of Nakanishi, Inc. From hand tools to machine tool spindles, NSK products are all engineered for speed and precision.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, high precision spindles, machining spindles, hand tools, industrial tools, dental spindles, medical spindles'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'High Precision Spindles and Hand Tools'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'NSK America Corporation is a division of Nakanishi, Inc. From hand tools to machine tool spindles, NSK products are all engineered for speed and precision.'
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
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'High Precision Spindles and Hand Tools'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'NSK America Corporation is a division of Nakanishi, Inc. From hand tools to machine tool spindles, NSK products are all engineered for speed and precision.'
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