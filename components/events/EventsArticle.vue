<template>
  <!-- Keep the fields blank if no value -->

  <!--<div class="relative overflow-hidden bg-white">
    <p v-if="$fetchState.pending">Loading Event ...</p>
    <template v-else>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <h1>
            <span class="block text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              {{ event.name }}</span>
          </h1>
          <UiAppBadge class="mx-1 my-1" v-for="tag in event.tags" :key="tag.id" :className="'grey-border'" :label="tag.title"/>
          <p class="max-w-2xl mx-auto mt-3 text-xl text-center text-blueGray-500 sm:mt-4">
          {{event|subtitle}}
          </p>
          <p class="max-w-2xl mx-auto mt-3 text-xl text-center text-blueGray-500 sm:mt-4">
          {{event.location}}
          </p>
        </div>
        <div class="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
          <figure>
            <img class="w-full rounded-sm" :src="event.image | image" :alt="event.name">
          </figure>
          <div v-html="event.description"></div>
        </div>
      </div>
    </template>
  </div>-->

  <div class="relative overflow-hidden bg-white">
    <template>
    <div class="grid gap-5 mx-auto md:grid-cols-3 lg:max-w-none">
      
      <div class="relative col-span-1 px-4 md:col-span-2 sm:px-6 lg:px-8">        
        <div class="relative">
          <div class="mx-auto text-lg">
            <h1>
              <span class="block">
                {{ event.name }}</span>
            </h1>
            <div class="space-y-2">
              <div class="flex items-center space-x-4 text-blueGray-400">
                <UiIconCalendar class="flex-shrink-0 w-6 h-6" />
                <p>{{event|subtitle}}</p>
              </div>
              <div class="flex items-center space-x-4 text-blueGray-400">
                <UiIconLocationPin />
                <p>{{event.location}}</p>
              </div>
            </div>
          </div>
          <div class="mx-auto mt-10 prose text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
            <div v-html="event.description"></div>
          </div>
          <div class="mt-5 text-center">
            <UiAppBadge class="mx-1 my-1" v-for="tag in event.tags" :key="tag.id" :tag="tag" :className="'grey-border'" :label="tag.title"/>
          </div>
        </div>
      </div>
      <div class="col-span-1 px-4 sm:px-6 lg:px-0">
        <!--<div>
          <p>Share event</p>
          <p>Icons here</p>
        </div>-->
        <figure>
          <img class="w-full rounded-sm shadow-lg sm:mt-5 lg:mt-8" :src="event.image | image" :alt="event.name">
        </figure>
      </div>
      
    </div>
    </template>
  </div>

</template>

<script>
import { FETCH_ONE_EVENT } from "~/graphql/dashboard/admin/event";
import breadcrumbMixin from "~/mixins/breadcrumb";

export default {
  mixins: [breadcrumbMixin],
  props: ["event"],
    created(){
      this.setBreadcrumb(this.event.name)
    },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
    image(image) {
      return image.includes("http") ? image : `https://${image}`;
    },
    subtitle(event) {
      const startDate = new Date(event.startDate).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'})
      const endDate = new Date(event.endDate).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'})
      return `${startDate} - ${endDate}`
    }
  }
};
</script>
