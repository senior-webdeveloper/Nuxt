<template>
  <div>
    <nuxt-link :to="to" :event="type.line ? 'click' : ''" :class="type.line ? '' : 'pointer-default'">
      <div class="sm:py-8">
        <div class="relative space-y-4 overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-xl md:h-56 sm:grid sm:grid-cols-3 sm:items-start sm:gap-0 sm:space-y-0 hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101">
          <!-- Image -->
          <!--<div class="relative aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">-->
          <div class="relative">
            <img class="object-cover w-full h-56" :src="image" :alt="imgAlt" />
            <div class="absolute top-0 left-0 p-2">
              <div class="p-2 text-center bg-gray-900 rounded-sm shadow-lg">
                <p class="text-3xl text-white">{{day}}</p>
                <p class="text-white text-md">{{month}}</p>
              </div>
            </div>
          </div>
          
          <!--<div class="relative sm:p-0 sm:col-span-2">
            <div class="absolute top-0 right-0 p-2">
              <div v-if="past" class="whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">PAST</div>
            </div>
            <div class="px-4 space-y-4 md:mt-6">
              <div class="space-y-3">
                <nuxt-link :to="to" :event="type.line ? 'click' : ''" :class="type.line ? '' : 'cursor-default'">
                  <h3>{{ title }}</h3>
                </nuxt-link>
                <div class="space-y-2">
                  <div class="flex items-center space-x-4 text-blueGray-400">
                    <UiIconCalendar class="flex-shrink-0 w-6 h-6" />
                    <p>{{ subtitle }}</p>
                  </div>
                  <div class="flex items-center space-x-4 text-blueGray-400">
                    <UiIconLocationPin class="flex-shrink-0 w-6 h-6" />
                    <p>{{ subtitle2 }}</p>
                  </div>
                </div>
              </div>
              <div class="leading-normal">
                <p class="text-blueGray-500 truncate ...">
                  <!--{{ content }}-->
                <!--</p>
              </div>
              
            </div>
            <div class="absolute top-0 left-0 p-2">
              <div class="p-2 text-center bg-gray-900 rounded-sm shadow-lg">
                <p class="text-3xl text-white">{{day}}</p>
                <p class="text-white text-md">{{month}}</p>
              </div>
            </div> 
          </div>-->
          <div class="relative sm:p-0 md:col-span-2">
            <div>
              <div class="p-2"> 
                <div v-if="past" class="whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">PAST</div>
              </div>
            </div>
            <div class="px-4 space-y-4 lg:mt-6">
              <div class="space-y-3">
                <h3>{{ title }}</h3>
                <div class="space-y-2">
                  <div class="flex items-center space-x-4 text-blueGray-400">
                    <UiIconCalendar class="flex-shrink-0 w-6 h-6" />
                    <p>{{ subtitle }}</p>
                  </div>
                  <div class="flex items-center space-x-4 text-blueGray-400">
                    <UiIconLocationPin class="flex-shrink-0 w-6 h-6" />
                    <p>{{ subtitle2 }}</p>
                  </div>
                </div>
              </div>
              <div class="leading-normal">
                <p class="text-blueGray-500 truncate ...">
                  <!--{{ content }}-->
                </p>
              </div>
            </div>
            
          </div>
          <div class="absolute bottom-0 right-0 p-4">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["type", "title", "image", "imgAlt", "content", "subtitle", "subtitle2", "to", "past", "date"],
  computed: {
    day: function (){
      const date = new Date(this.date)
      return date.getDate()
    },
    month: function (){
      const date = new Date(this.date)
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return monthNames[date.getMonth()]
    }
  },
};
</script>
