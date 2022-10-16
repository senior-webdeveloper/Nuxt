<template>
  <div>
    
    <!-- Floating product name -->
    <div class="fixed inset-0 z-10 flex items-start justify-center px-4 py-6 pointer-events-none top-32 sm:p-6 sm:justify-end">
      <div class="w-full max-w-sm overflow-hidden rounded-lg shadow-lg pointer-events-auto bg-blueGray-100 ring-1 ring-black ring-opacity-5">
        <div class="p-4">
          <p>You are viewing {{ product.details.name }}</p>
        </div>
      </div>
    </div>

    <VideosYoutubePlayerModal
      v-if="youtubePlayer"
      :show="youtubePlayer"
      :video="selectedVideo"
      @close="youtubePlayer = false"
    />
    <VideosVideoPlayerModal
      v-if="uploadPlayer"
      :show="uploadPlayer"
      :video="selectedVideo"
      @close="uploadPlayer = false"
    />
    <div class="bg-white">
      <div class="max-w-2xl px-4 py-10 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="items-start lg:grid lg:grid-cols-2 lg:gap-x-8">
        
          <!-- Image gallery -->
          <div class="">
            <div class="w-full aspect-w-1 aspect-h-1">
              <!-- Tab panel, show/hide based on tab state. -->
              <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                <img :src="product.details.image" :alt="product.details.name" class="object-cover object-center w-full sm:rounded-lg"/>
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
                    <img :src="product.details.image" :alt="product.details.name" class="object-cover object-center w-full h-full">
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

            <div class="mt-10" v-if="product.tags.length">
              <div class="flex flex-wrap pt-4">
                <div class="inline mr-2">
                  <UiAppBadgeProducts class="mx-1 my-1" v-for="tag in product.tags" :key="tag" :tag="tag" className="blue"/>
                </div>
              </div>
            </div>        
          </div>

          <!-- Product info -->
          <div class="px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0">
            <div class="w-full py-10">
              <h1>{{product.details.name}}</h1>
              <p class="text-sm text-blueGray-500">{{product.sku}}</p>
              <p class="text-base text-blueGray-600">{{product.details.alternateName}}</p>
            </div>

            <div class="mt-6">
              <h2 class="sr-only">Product information</h2>
            </div>

            <div class="">
              <p class="mt-4 text-base font-semibold text-gray-900"> Compatible with these series </p>
              <div class="mt-4 text-base text-center text-blueGray-600">
                <UiAppBadgeIcon
                  v-for="(part, index) in product.isAccessoryOrSparePartFor"
                  :key="`series-${index}`"
                  :label="part"
                />
              </div>
            </div>

            <div class="mt-6">
              <h2 class="sr-only">Description</h2>
              <div class="space-y-6 text-base text-gray-700">
                <p>{{product.details.description}}</p>
              </div>
            </div>

            <div class="mt-10">
              <div v-if="product.video">
                <UiAppButton className="primary" @click="openPlayer(product.video)">
                  Watch Product Video
                </UiAppButton>
              </div>
            </div>

            <div aria-labelledby="details-heading" class="mt-12">
              <h2 id="details-heading" class="sr-only">Additional details</h2>

              <div class="border-t divide-y divide-gray-200">
                 <div v-if="hasFeatures">
                  <UiAppAccordion v-if="product.details.features && product.details.features.length">
                    <template v-slot:header>
                      <span>
                        <h3 class="text-base font-semibold text-gray-900">Features</h3> 
                      </span>
                    </template>
                    <template v-slot:content>
                      <div class="pb-6 prose prose-md" id="disclosure-1">
                        <div v-if="product.details.features">
                          <ul class="list">
                            <li v-for="feature in product.details.features" :key="feature">{{feature}}</li>
                          </ul>
                        </div>
                      </div>
                    </template>
                  </UiAppAccordion>
                </div>
              </div>
              <div class="border-t divide-y divide-gray-200">
                <div>
                  <UiAppAccordion v-if="(product.downloads && product.downloads.length) || product.catalogPage">
                    <template v-slot:header>
                      <span>
                        <h3 class="text-base font-semibold text-gray-900">Downloads</h3> 
                      </span>
                    </template>
                    <template v-slot:content>
                      <div class="py-4">
                        <a :href="product.catalogPage" target="_blank" v-if="product.catalogPage">
                          <UiAppButton className="primary">See PDF catalog for details</UiAppButton>
                        </a>
                        <ul class="py-6 space-y-6 list-none">
                          <li class="" v-for="(download, index) in product.downloads" :key="index">
                            <a :href="download.link" target="_blank" class="flex flex-row items-center hover:text-blueGray-700 text-nsk-primary">
                              <UiIconCloudDownload class="w-6 h-6 mr-3"/>{{download.label}}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </template>
                  </UiAppAccordion>
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
import { stringify } from 'qs'
export default {
  head() {
    return {
      script: [
        {
          src:
            'https://unpkg.com/hls.js/dist/hls.min.js'
        }
      ],
    }
  },
  props: ["product"],
  data(){
    return {
      selectedVideo: null,
      youtubePlayer: false,
      uploadPlayer: false,

    }
  },
  methods: {
    redirect(tag) {
      const qs = stringify({'products-content': { refinementList: { tags: [tag] } }})
      this.$router.push(`/products?${qs}`)
    },
    openPlayer(video){
      this.selectedVideo = video
      if(video.provider === "youtube"){
        this.youtubePlayer = true
      } else {
        this.uploadPlayer = true
      }
    }
  },
  computed: {
    hasIsAccessoryOrSparePartFor() {
      return this.product.isAccessoryOrSparePartFor !== "[]" && this.product.isAccessoryOrSparePartFor.length && this.product.isAccessoryOrSparePartFor.some(i => i);
    },
    hasFeatures() {
      return this.product.details.features !== "[]" && this.product.details.features.length && this.product.details.features.some(i => i);
    }
  },
};
</script>

