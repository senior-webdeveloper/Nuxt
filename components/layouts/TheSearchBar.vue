// CD (KO on 20210228): component used in only "/Layouts/TheHeader.vue"

<template>
  <div>
    <ais-instant-search :search-client="searchClient" index-name="products-content">
      <ais-index index-name="series-content" />
      <ais-index index-name="news-mongodb" />
      <ais-index index-name="faq-mongodb" />
      <ais-index index-name="videos-mongodb" />
      <ais-index index-name="events-mongodb" />
      <ais-index index-name="ads-mongodb" />
      <ais-index index-name="distributors_and_sales_representatives-mongodb" />
      <ais-autocomplete>
        <div slot-scope="{ currentRefinement, indices, refine }">
          <input
            ref="search"
            type="search"
            :value="currentRefinement"
            placeholder="Search for a product"
            @input="refine($event.currentTarget.value)"
          />

          <!-- CD (CT on 20210817): When you click any search results,
            it should open that specific page if it has child pages.
            for distributors, it should open the pop-up of the map. it might be implemented here already, pls check.
            for faq, open the accordion for that Q&A. if difficult, pls lead users to the tab where that Q&A is. if difficults still, redirect to /faq page.
            for videos, redirect to the /videos page for now.
          -->
          <div v-if="currentRefinement" class="overflow-y-auto min-h-0 max-h-[300px] mt-8">
            <template v-for="index in indices">
              <ul v-if="index.hits.length" :key="index.indexId">
                <li>

                  <!-- Products -->
                  <ul v-if="index.indexName == 'products-content'">
                    <li
                      class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
                      v-for="hit in index.hits"
                      :key="hit.objectID"
                      @click="redirect('/products/' + hit.slugForUrl)"
                    >
                      <div class="flex">
                        <img
                          v-if="hit.details.image"
                          :src="hit.details.image"
                          :alt="hit.name"
                          class="w-[80px] h-[80px]"
                        />
                        <div class="flex flex-col ml-3">
                          <ais-highlight
                            attribute="details.name"
                            :hit="hit"
                            class="font-bold"
                          />
                          <ais-highlight
                            attribute="sku"
                            :hit="hit"
                            class="text-xs"
                          />
                          <p class="text-sm font-medium">Product</p>
                          <!--<p v-if="hit.details.description" v-html="hit.details.description" class="text-sm italic text-gray-600"></p>-->

                          <!-- CD (CT on 20210818): I've commented out the code above. Instead of the description, put the snippet here -->
                          <div v-html="hit._snippetResult && hit._snippetResult.details && hit._snippetResult.details.description ? hit._snippetResult.details.description.value : ''" class="text-sm italic text-gray-600"></div>

                        </div>
                      </div>
                    </li>
                  </ul>

                  <!-- Series -->
                  <ul v-if="index.indexName == 'series-content'">
                    <li
                      class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
                      v-for="hit in index.hits"
                      :key="hit.objectID"
                      @click="redirect('/series/' + hit.slugForUrl)"
                    >
                      <div class="flex">
                        <img
                          v-if="hit.image"
                          :src="hit.image"
                          :alt="hit.name"
                          class="w-[80px] h-[80px]"
                        />
                        <div class="flex flex-col ml-3">
                          <ais-highlight
                            attribute="name"
                            :hit="hit"
                            class="font-bold"
                          />
                          <p class="text-sm font-medium">Series</p>
                          <!--<p v-if="hit.description" v-html="hit.description" class="text-sm italic text-gray-600"></p>-->
                          
                          <!-- CD (CT on 20210818): I've commented out the code above. Instead of the description, put the snippet here -->
                          <div v-html="hit._snippetResult &&  hit._snippetResult.description ? hit._snippetResult.description.value : ''" class="text-sm italic text-gray-600"></div>
                        
                        </div>
                      </div>
                      <!-- <hr class="py-2" /> -->
                    </li>
                  </ul>

                  <!-- News -->
                  <ul v-if="index.indexName == 'news-mongodb'">
                    <li
                      class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
                      v-for="hit in index.hits"
                      :key="hit.objectID"
                      @click="redirect('/news/' + hit.slug)"
                    >
                      <div class="flex">
                        <img
                          v-if="hit.image"
                          :src="hit.image"
                          :alt="hit.headline"
                          class="w-[80px] h-[80px]"
                        />
                        <div class="flex flex-col ml-3">
                          <ais-highlight
                            attribute="headline"
                            :hit="hit"
                            class="font-bold"
                          />
                          <p class="text-sm font-medium">News</p>
                          <!--<p v-if="hit.description" v-html="hit.description" class="text-sm italic text-gray-600"></p>-->
                          
                          <!-- CD (CT on 20210818): I've commented out the code above. Instead of the description, put the snippet here -->
                          <div v-html="hit._snippetResult && hit._snippetResult.articleBody ? hit._snippetResult.articleBody.value : ''" class="text-sm italic text-gray-600"></div>
                        
                        </div>
                      </div>
                      <!-- <hr class="py-2" /> -->
                    </li>
                  </ul>

                  <!-- Distributors and Sales Reps -->
                  <ul v-if="index.indexName == 'distributors_and_sales_representatives-mongodb'">
                    <li
                      v-for="hit in index.hits"
                      class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
                      :key="hit.objectID"
                      @click="goToMap(hit.category, hit.address.addressRegion)"
                    >
                      <div class="flex flex-col">
                        <ais-highlight
                          attribute="name"
                          :hit="hit"
                          class="font-bold"
                        />
                        <ais-highlight
                          attribute="category"
                          :hit="hit"
                          class="text-sm font-medium"
                        />
                        <p class="text-sm italic text-gray-600">
                          <span v-if="hit.address.streetAddress">
                            <ais-highlight
                              attribute="address.streetAddress"
                              :hit="hit"
                            />,
                          </span>
                          &nbsp;
                          <span v-if="hit.address.addressLocality">
                            <ais-highlight
                              attribute="address.addressLocality"
                              :hit="hit"
                            />,
                          </span>
                          &nbsp;
                          <span v-if="hit.address.addressRegion">
                            <ais-highlight
                              attribute="address.addressRegion"
                              :hit="hit"
                            />,
                          </span>
                          &nbsp;
                          <span v-if="hit.address.country">
                            <ais-highlight
                              attribute="address.country"
                              :hit="hit"
                            />
                          </span>
                          &nbsp;
                          <span v-if="hit.address.postalCode">
                            <ais-highlight
                              attribute="address.postalCode"
                              :hit="hit"
                            />,
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>

                  <!-- Faq -->
                  <ul v-if="index.indexName == 'faq-mongodb'">
                    <li
                      class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
                      v-for="hit in index.hits"
                      :key="hit.objectID"
                      @click="redirect('/faq?id=' + hit._id)"
                    >
                      <div class="flex">
                        <div class="flex flex-col">
                          <ais-highlight
                            attribute="question"
                            :hit="hit"
                            class="font-bold"
                          />
                          <p class="text-sm font-medium">FAQ</p>
                          <!--<p v-if="hit.description" v-html="hit.description" class="text-sm italic text-gray-600"></p>-->
                          
                          <!-- CD (CT on 20210818): I've commented out the code above. Instead of the description, put the snippet here -->
                          <div v-if="hit._highlightResult" v-html="hit._highlightResult.answer.value" class="text-sm italic text-gray-600"></div>
                        
                        </div>
                      </div>
                      <!-- <hr class="py-2" /> -->
                    </li>
                  </ul>

                  <!-- Events -->
                  <ul v-if="index.indexName == 'events-mongodb'">
                    <li
                      class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
                      v-for="hit in index.hits"
                      :key="hit.objectID"
                      @click="redirect('/events/' + hit.slug)"
                    >
                      <div class="flex">
                        <img
                          v-if="hit.image"
                          :src="hit.image"
                          :alt="hit.headline"
                          class="w-[80px] h-[80px]"
                        />
                        <div class="flex flex-col ml-3">
                          <ais-highlight
                            attribute="name"
                            :hit="hit"
                            class="font-bold"
                          />
                          <p class="text-sm font-medium">Events</p>
                          <!--<p v-if="hit.description" v-html="hit.description" class="text-sm italic text-gray-600"></p>-->
                          
                          <!-- CD (CT on 20210818): I've commented out the code above. Instead of the description, put the snippet here -->
                          <!-- <div v-html="hit._highlightResult.description.value" class="text-sm italic text-gray-600"></div> -->
                          <!-- v-html not working here -->
                        
                        </div>
                      </div>
                      <!-- <hr class="py-2" /> -->
                    </li>
                  </ul>
                  <!-- Ads -->
                  <ul v-if="index.indexName == 'ads-mongodb'">
                    <li
                      class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
                      v-for="hit in index.hits"
                      :key="hit.objectID"
                      @click="redirect('/ads/' + hit.slug)"
                    >
                      <div class="flex">
                        <img
                          v-if="hit.image"
                          :src="hit.image"
                          :alt="hit.headline"
                          class="w-[80px] h-[80px]"
                        />
                        <div class="flex flex-col ml-3">
                          <ais-highlight
                            attribute="title"
                            :hit="hit"
                            class="font-bold"
                          />
                          <p class="text-sm font-medium">Ads</p>
                          <!--<p v-if="hit.description" v-html="hit.description" class="text-sm italic text-gray-600"></p>-->
                          
                          <!-- CD (CT on 20210818): I've commented out the code above. Instead of the description, put the snippet here -->
                          <div v-html="hit._highlightResult.description.value" class="text-sm italic text-gray-600"></div>
                        
                        </div>
                      </div>
                      <!-- <hr class="py-2" /> -->
                    </li>
                  </ul>

                  <!-- Videos -->
                  <ul v-if="index.indexName == 'videos-mongodb'">
                    <li
                      class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
                      v-for="hit in index.hits"
                      :key="hit.objectID"
                      @click="redirect('/videos/' + hit.slug)"
                    >
                      <div class="flex">
                        <img
                          v-if="hit.youtubeThumbnail"
                          :src="hit.youtubeThumbnail"
                          :alt="hit.headline"
                          class="w-[80px] h-[80px]"
                        />
                        <img
                          v-else-if="hit.streamCustomThumbnail"
                          :src="hit.streamCustomThumbnail"
                          :alt="hit.headline"
                          class="w-[80px] h-[80px]"
                        />
                        <img
                          v-else-if="hit.streamThumbnail"
                          :src="hit.streamThumbnail"
                          :alt="hit.headline"
                          class="w-[80px] h-[80px]"
                        />
                        <div class="flex flex-col ml-3">
                          <ais-highlight
                            attribute="title"
                            :hit="hit"
                            class="font-bold"
                          />
                          <p class="text-sm font-medium">Videos</p>
                          <!--<p v-if="hit.description" v-html="hit.description" class="text-sm italic text-gray-600"></p>-->
                          
                          <!-- CD (CT on 20210818): I've commented out the code above. Instead of the description, put the snippet here -->
                          <div v-html="hit._highlightResult.description.value" class="text-sm italic text-gray-600"></div>
                        
                        </div>
                      </div>
                      <!-- <hr class="py-2" /> -->
                    </li>
                  </ul>
                </li>
              </ul>
            </template>
            <div v-if="indices.every(index => index.hits.length === 0)" class="text-base font-semibold text-blueGray-600">
              No Results Found
            </div>
          </div>
        </div>
      </ais-autocomplete>
    </ais-instant-search>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import { stringify } from 'qs'
export default {
  props: ["isOpen"],
  data() {
    return {
      searchClient: algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_API_KEY
      ),
      currentRefinement: ""
    };
  },
  mounted(){
    // console.log("refs", this.$refs)
  },
  watch: {
    isOpen: function (val) {
      if(val == true && this.$refs.search){
        this.$refs.search.focus()
      }
    }
  },
  methods: {
    redirect(url){
      window.location.href = url
    },
    goToMap(category, region) {
      const qs = stringify({'distributors_and_sales_representatives-mongodb': { query: region, facetFilters: {  category } }})
      this.redirect(`/find-distributors?${qs}`)
    },
  }
};
</script>