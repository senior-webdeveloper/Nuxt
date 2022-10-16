<template>
  <div>
    <h1 class="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
      Frequently asked questions
    </h1>
    <div>
      <UiAppTabs v-model="selected" :tabs="options">
        <div v-for="(faq, index) in faqs" :key="index">
          <div v-if="faq.tags.some(tag => tag.title === options[selected])">
            <UiAppAccordion :showDefault="$route.query.id && $route.query.id === faq._id" :class="{'faq-highlight' : $route.query.id && $route.query.id === faq._id}" class="px-4 pb-2">
              <template v-slot:header>
                <span class="font-medium text-gray-900" :id="faq._id">
                  {{ faq.question }}
                </span>
              </template>
              <template v-slot:content>
                <p class="text-base text-gray-500">
                  {{ faq.answer }}
                </p>
              </template>
            </UiAppAccordion>
          </div>
        </div>
      </UiAppTabs>
    </div>
  </div>
</template>

<script>
import { FETCH_FAQS } from "./../../graphql/faq/index";
export default {
  data() {
    return {
      faqs: [],
      options: [],
      selected: 0,
      tags: [],
    };
  },
  created() {
    /* CD (EV on 20210508): Declare query variable*/
    const query = FETCH_FAQS;
    /* CD (EV on 20210508): Fetch faqs*/
    this.$apollo.query({ query }).then(({ data }) => {
      /* CD (EV on 20210329): Update faqs []*/
      this.faqs = data.faqs;
      this.faqs.map(faq => {
        faq.tags.map(tag => {
          if (!this.options.includes(tag.title)) this.options.push(tag.title);
        });
      });
    });
  }, 
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {  
        if(this.$route.query.id){
          const selected_faq = this.faqs.find(faq => faq._id == this.$route.query.id)
          if(selected_faq && selected_faq.tags[0]){
            this.selected = this.options.indexOf(selected_faq.tags[0].title)
          }
        }
      }, 2000);
    })
  }
};
</script>
