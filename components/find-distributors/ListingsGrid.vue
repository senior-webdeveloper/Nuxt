<template>
  <div>
    <FindDistributorsMap :distributors="filtered_distributors" :selected_distributor="selected_distributor" :search_location="search_location" :filters="filters"/>
    <div class="flex flex-row items-center py-5 space-x-4 place-items-end lg:hidden">
      <div>
        <UiAppButton className="primary" label="Filters" @click="filters_modal = true"/>
        <!-- CD (CT on 20210723): Modal opens when this button is clicked. Modal with filters show. -->
        <UiAppModal2 :show="filters_modal" @resetFilters="resetFilters" type="filters" title="" @confirm="filters_modal = false" @close="filters_modal = false">
          <FindDistributorsFilter v-if="raw_distributors.length" :distributors="raw_distributors" @filter="setFilters" :filters="filters" @resetFilters="resetFilters"/>
        </UiAppModal2>
      </div>
      <div class="hidden lg:flex">
        <UiAppButton :class="`text-gray-700`" label="Clear Filters" type="filters" @filter="setFilters" :filters="filters" @resetFilters="resetFilters" @click="$emit('resetFilters')" />
      </div>
    </div>
    <FindDistributorsSearch  @search="setSearchLocation" @resetFilters="resetSearchFilters" :clear_search="search_location"/>
    
    <div class="flex overflow-hidden bg-white">
      <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div class="relative z-0 flex flex-1 overflow-hidden">

          <aside class="hidden w-72 lg:order-first lg:flex lg:flex-col">
            <FindDistributorsFilter v-if="raw_distributors.length" :distributors="raw_distributors" @filter="setFilters" :filters="filters" @resetFilters="resetFilters"/>
          </aside>
          <main class="relative z-0 flex-1 focus:outline-none xl:order-last">
            <article>             
              <div class="mt-5">
                <div class="w-full p-2">
                  <div class="items-center">
                    <div>
                      <!-- CD (CT on 20210727): Don't mind this 
                      Sort by [dropdown here] to be added later on in the project -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 text-center">
                <h2>NSK Distributors &amp; Sales Representatives</h2>
              </div>

              <!-- Number of total results -->
              <div class="mt-5 sm:mt-8">
                <div class="w-full px-6 py-2 text-sm sm:px-10 text-blueGray-500">
                  <div>
                    <p class="text-blueGray-500" v-if="filtered_distributors">{{filtered_distributors.length}} Locations</p>
                  </div>
                </div>
              </div>

              <!-- Cards list for grid view-->
              <div class="max-w-5xl px-4 pb-12 mx-auto mt-8 sm:px-6 lg:px-8">
                <div class="grid gap-4 mt-1 sm:grid-cols-2 md:grid-cols-3">

                  <div v-for="listing in paginated_distributors" :key="listing._id">
                    <div class="p-2">
                      <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border border-gray-200 rounded-sm h-60 sm:h-72 bg-blueGray-100 transform-gpu group ptransform-gpu hover:scale-101">
                        <div class="col-span-2">
                          <div>
                          </div>
                          <div class="flex flex-col flex-1 p-4 space-y-2">
                            <div class="mt-4">
                              <span aria-hidden="true"></span>
                              <h3 VTooltip="view on map">{{listing.name}}</h3>
                            </div>
                            <div class="mt-1 text-sm text-blueGray-500">
                              <div class="flex justify-between">
                                <div class="text-xs">
                                  <p>{{listing.categoryType}}</p>
                                </div>
                                <div class="absolute top-0 right-0 p-2 text-xs">
                                  <div class="flex flex-row space-x-1">
                                    <div>
                                      <UiAppBadge :className="'blue'" label='Top Speed' v-if="listing.isTopSpeed"/> 
                                    </div>
                                    <div>
                                      <UiAppBadge :className="'yellow'" v-if="listing.isNationalDistributor && listing.isNationalDistributor == true || listing.isNationalDistributor == 'True'" label='National Distributor'/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div class="flex flex-col justify-end flex-1 mt-2">
                                <ul class="text-sm font-medium text-blueGray-800">
                                  <li>{{listing.company}}</li>
                                  <li class="hidden md:block">{{listing.address.streetAddress}}</li>
                                  <li class="hidden md:block">{{listing.address.addressLocality + ","}} {{listing.address.addressRegion + " " + listing.address.postalCode}}</li>
                                  
                                  <li class="md:hidden">{{listing.address.streetAddress + ","}}
                                  {{listing.address.addressLocality + ","}} {{listing.address.addressRegion + " " + listing.address.postalCode}}</li>
                                  <li>{{listing.address.country}}</li>
                                  <div class="flex flex-col justify-end flex-1 mt-2 mb-4 text-nsk-primary">
                                    <li><a class="cursor-pointer text-nsk-primary" :href="'tel:' + listing.telephone">{{listing.telephone}}</a></li>
                                    <!--<li> {{listing.faxNumber}} </li> -->
                                    <!--<li class="truncate ..."><a class="cursor-pointer text-nsk-primary" :href="'mailto:' + listing.email">{{listing.email}}</a></li>
                                    <li class="truncate ..."><a :href="listing.url" target="_blank">{{listing.url}}</a></li>-->  
                                  </div>
                                  <div class="flex flex-row flex-1 mt-2 mb-4 space-x-6 text-nsk-primary">
                                    <div v-if="listing.email">
                                      <li><a class="cursor-pointer" :href="'mailto:' + listing.email"><UiIconMail class="w-5 h-5" /></a></li>
                                    </div>
                                    <div v-if="listing.url">
                                      <li><a :href="listing.url" target="_blank"><UiIconLink class="w-5 h-5" /></a></li>
                                    </div>
                                    <div @click="openDistributorsPopup(listing)">
                                      <li><UiIconMap class="w-5 h-5"/></li>
                                    </div>   
                                  </div>
                                  <div class="absolute bottom-0 right-0 flex p-2 pr-4 text-xs text-blueGray-500" v-if="listing.d && search_location">
                                    <div class="flex">
                                      <UiIconRuler class="w-4 h-4 mr-2" />
                                      <p>{{Math.round(listing.d)}} Miles</p>
                                    </div>
                                  </div>
                                </ul>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
const n_items = process.env.MAP_LAZY_LOADING_NUMBER_OF_ITEMS || 20

import {
  FETCH_DISTRIBUTOR_SALES_REP_MAP,
} from "~/graphql/find-distributors";

export default {
  data(){
    return {
      raw_distributors: [],
      filtered_distributors: [],
      paginated_distributors: [],
      page: 2,
      filters_modal: false,
      filters: {
        selected_categories: [],
        selected_category_types: [],
        national_distributor: false,
      },
      show_distributor_modal: false,
      selected_distributor: null,
      search_location: null,
    }
  },
    async fetch(){
    const {
      data : { distributors_and_sales_representatives }
    } = await this.$apollo.query({ query: FETCH_DISTRIBUTOR_SALES_REP_MAP});
    this.raw_distributors = distributors_and_sales_representatives
    // this.filtered_distributors = this.raw_distributors
    // this.paginated_distributors = this.filtered_distributors.slice(0, n_items)
    this.FilterSearchSort()
  },
   async mounted(){
  //Load more distributors on scroll
       window.addEventListener('scroll', () => {
       let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight - 690;
       if (bottomOfWindow) {
       clearTimeout(this.debounce)
       this.debounce = setTimeout(async () => {
         this.paginated_distributors = this.filtered_distributors.slice(0, n_items * this.page)
         this.page++
       }, 500)
       }
     })
   },
  methods: {
    FilterSearchSort(){
      this.page = 1
      this.filtered_distributors = this.raw_distributors.filter(distributor => {
        return this.filter(distributor) && this.search(distributor)
      })
      this.sort()
      this.paginated_distributors = this.filtered_distributors.slice(0, n_items * this.page)
      this.page++
    },
    filter(distributor){
        const first_condition = this.filters.selected_categories.length ? this.filters.selected_categories.includes(distributor.category) : true
        const second_condition = this. filters.selected_category_types.length ? this.filters.selected_category_types.includes(distributor.categoryType) : true
        const third_condition = this.filters.national_distributor === true ? distributor.isNationalDistributor == true || distributor.isNationalDistributor == "True" : true
        const fourth_condition = this.filters.top_speed === true ? distributor.isTopSpeed == true : true
        return first_condition && second_condition && third_condition && fourth_condition
    },
    search(distributor){
        if(this.search_location){
          const R = process.env.MAP_SEARCH_DISTANCE_UNITS == 'miles' ? 3959 : 6371; // Radius of the earth in miles
          const dLat = this.deg2rad(distributor._geoloc.lat - this.search_location[1]);  // this.deg2rad below
          const dLon = this.deg2rad(distributor._geoloc.lng - this.search_location[0]); 
          const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(this.deg2rad(distributor._geoloc.lat)) * Math.cos(this.deg2rad(this.search_location[1])) * Math.sin(dLon/2) * Math.sin(dLon/2)
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          var d = R * c; // Distance in miles
          distributor.d = d
          return d < process.env.MAPBOX_SEARCH_RADIUS
        } else {
          return true
        }

    },
    sort(){
      this.filtered_distributors.sort((a, b) => {
        if(a.isTopSpeed && !b.isTopSpeed){
          return -1
        } else if (!a.isTopSpeed && b.isTopSpeed){
          return 1
        } else {
          return a.d - b.d
        }
      })
    },
    setFilters(filters){
      this.filters = filters
      this.FilterSearchSort()
    },
    setSearchLocation(coordinates){
      this.search_location = coordinates
      this.FilterSearchSort()
    },
    resetFilters(){
      this.filters = {
        selected_categories: [],
        selected_category_types: [],
        national_distributor: false,
      }
      this.search_location = null
      this.FilterSearchSort()
    },
    resetSearchFilters(){
      this.search_location = null
      this.FilterSearchSort()
    },
    openDistributorsPopup(distributor){
      this.selected_distributor = distributor
      window.scrollTo({
        top: 100,
        left: 0,
        behavior: 'smooth',
      })
    },
    deg2rad(deg) {
      return deg * (Math.PI/180)
    },
  }
}
</script>

