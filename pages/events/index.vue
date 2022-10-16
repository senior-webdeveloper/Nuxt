<template>
  <div>
    <div>
      <main>
        <EventsList />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Events',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Attend upcoming events in your area where that NSK participates and connect with our team to learn about how we can help you.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, NSK events'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Events'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Attend upcoming events in your area where that NSK participates and connect with our team to learn about how we can help you.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/events'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Events'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Attend upcoming events in your area where that NSK participates and connect with our team to learn about how we can help you.'
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