<template>
  <div>
    <div>
      <main>
        <SupportFormTechnicalQuestions /> 
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: '',
  head () {
    return {
      title: 'Technical Support Questions Form',
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: 'Let us know about your technical support questions by filling in this form.'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        content: 'NSK, NSK America, technnical questions about nsk products'
      },
      {
          hid: `og:type`,
          name: 'og:type',
          content: 'website'
      },
      {
          hid: `og:title`,
          name: 'og:title',
          content: 'Technical Support Questions Form'
      },
      {
          hid: `og:description`,
          name: 'og:description',
          content: 'Let us know about your technical support questions by filling in this form.'
      },
      {
          hid: `og:image`,
          name: 'og:image',
          content: '/components/ui/LogoNskA.vue'
      },
      {
          hid: `og:url`,
          name: 'og:url',
          content: 'http://www.nskamericacorp.com/support/technical-questions'
      },
      {
          hid: `og:site_name`,
          name: 'og:site_name',
          content: ''
      },
      {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Technical Support Questions Form'
      },
      {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Let us know about your technical support questions by filling in this form.'
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