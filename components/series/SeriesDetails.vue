<template>
  <div>

    <!-- Floating product name -->
    <div class="fixed inset-0 z-10 flex items-start justify-center px-4 py-6 pointer-events-none top-32 sm:p-6 sm:justify-end">
      <div class="w-full max-w-sm overflow-hidden rounded-lg shadow-lg pointer-events-auto bg-blueGray-100 ring-1 ring-black ring-opacity-5">
        <div class="p-4">
          <p>You are viewing {{ series.name }}</p>
        </div>
      </div>
    </div>
    
    <div class="bg-white">
      <div class="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="items-start lg:grid lg:grid-cols-2 lg:gap-x-8">
        
          <!-- Image gallery -->
          <div class="">
            <div class="w-full aspect-w-1 aspect-h-1">
              <!-- Tab panel, show/hide based on tab state. -->
              <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                <img :src="series.image" :alt="series.image" class="object-cover object-center w-full sm:rounded-lg"/>
              </div>
            </div>
            <!-- CD (CT on 20211222): Hid image selector until the image carousel is implemented -->
            <!-- CD (CT on 20211222): Hide image carousel if there is only 1 image. Show if there is more than 1 image. -->
            <!-- Image selector -->
            <!--<div class="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
              <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                <button id="tabs-1-tab-1" class="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-1-panel-1" role="tab" type="button">
                  <span class="sr-only">
                    Angled view
                  </span>
                  <span class="absolute inset-0 overflow-hidden rounded-md">
                    <img :src="series.image" :alt="series.image" class="object-cover object-center w-full h-full">
                  </span> -->
                  <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                  <!--<span class="absolute inset-0 rounded-md pointer-events-none ring-transparent ring-2 ring-offset-2" aria-hidden="true"></span>
                </button>-->
                <!--More images...--> 
              <!--</div>
            </div>-->

            <!-- Share buttons -->
            <!--<div class="pt-10 mt-10">
              <h3 class="text-sm font-medium text-gray-900">Share</h3>
              <ul role="list" class="flex items-center mt-4 space-x-6">
                <li>
                  <a href="#" class="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Share on Facebook</span>
                    <UiIconFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Share on Instagram</span>
                    <UiIconInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Share on Twitter</span>
                    <UiIconTwitter />
                  </a>
                </li>
              </ul>
            </div>-->

            <div class="mt-10">
              <div class="flex flex-wrap pt-4">
                <div class="inline mr-2">
                  <UiAppBadgeProducts class="mx-1 my-1" v-for="tag in series.tags" :key="tag" :tag="tag" className="blue"/>
                </div>
              </div>
            </div>        
          </div>

          <!-- Product info -->
          <div class="px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0">
            <div class="w-full py-10">
              <h1>{{series.name}}</h1>
              <h2>{{series.subTitle}}</h2>
            </div>

            <div class="mt-6">
              <h2 class="sr-only">Series Description</h2>
              <div class="space-y-6 text-base text-gray-700">
                <p>{{ series.description }}</p>
              </div>
            </div>

            <form class="mt-6">
              <div class="mt-10">
                <UiAppButton type="submit" className="primary">
                  Watch Product Video
                </UiAppButton>
              </div>
            </form>

            <div aria-labelledby="details-heading" class="mt-12">
              <h2 id="details-heading" class="sr-only">Additional details</h2>

              <div class="border-t divide-y divide-gray-200">
                <div>
                  <h4>
                    <!-- Expand/collapse question button -->
                    <button type="button" class="relative flex items-center justify-between w-full py-6 text-left group" aria-controls="disclosure-1" aria-expanded="false">
                      <!-- Open: "text-blueGray-600", Closed: "text-gray-900" -->
                      <span>
                        <h3>Features</h3> 
                      </span>
                      <span class="flex items-center ml-6">
                        <!--Open: "hidden", Closed: "block"-->
                        <UiIconPlus class="block w-6 h-6 text-gray-400 group-hover:text-gray-500" />
                        <!--Open: "block", Closed: "hidden"-->
                        <UiIconMinus class="hidden w-6 h-6 text-blueGray-400 group-hover:text-blueGray-500" />
                      </span>
                    </button>
                  </h4>
                  <div class="pb-6 prose prose-md" id="disclosure-1">
                    <div v-if="series.features">
                      <ul class="list">
                        <li v-for="feature in series.features" :key="feature">{{feature}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t divide-y divide-gray-200">
                <div>
                  <h4>
                    <!-- Expand/collapse question button -->
                    <button type="button" class="relative flex items-center justify-between w-full py-6 text-left group" aria-controls="disclosure-1" aria-expanded="false">
                      <!-- Open: "text-blueGray-600", Closed: "text-gray-900" -->
                      <span>
                        <h3>Downloads</h3> 
                      </span>
                      <span class="flex items-center ml-6">
                        <!--Open: "hidden", Closed: "block"-->
                        <UiIconPlus class="block w-6 h-6 text-gray-400 group-hover:text-gray-500" />
                        <!--Open: "block", Closed: "hidden"-->
                        <UiIconMinus class="hidden w-6 h-6 text-blueGray-400 group-hover:text-blueGray-500" />
                      </span>
                    </button>
                  </h4>
                  <div class="pb-6 prose prose-md" id="disclosure-1">
                    <form class="mt-6">
                      <div class="mt-10">
                        <UiAppButton type="submit" className="primary">
                          See PDF catalog for details
                        </UiAppButton>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>

          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {stringify} from 'qs'
export default {
  props: ["series"],
  methods: {
    redirect(tag) {
      const qs = stringify({'series-content': { refinementList: { tags: [tag] } }})
      this.$router.push(`/series?${qs}`)
    }
  }
};
</script>