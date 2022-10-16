<template>
  <div>
    <div>
      <main>
        <SeriesList />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Series',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Find what you need from the different series we have like the Emax, HES, iSpeed, MA, MS, XPeed, ABT, HPS, E-Speed, Rotus, Presto, Sheenus, ESPERT and Sonic Cutter.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, series, nsk products, Emax, HES, iSpeed, MA, MS, XPeed, ABT, HPS, E-Speed, Rotus, Presto, Sheenus, Espert, Sonic Cutter, machining spindles, hand tools, electric spindles, pneumatic spindles, airline kits'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Series'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Find what you need from the different series we have like the Emax, HES, iSpeed, MA, MS, XPeed, ABT, HPS, E-Speed, Rotus, Presto, Sheenus, ESPERT and Sonic Cutter.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/series'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Series'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Find what you need from the different series we have like the Emax, HES, iSpeed, MA, MS, XPeed, ABT, HPS, E-Speed, Rotus, Presto, Sheenus, ESPERT and Sonic Cutter.'
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