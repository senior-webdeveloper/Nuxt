<template>
  <div>
    <div class="mb-12 text-center">
      <h1>
        Series
      </h1>
      <!--<p class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit numquam consequatur aliquam repellat soluta adipisci temporibus labore expedita quas.
      </p>-->
    </div>
    
    <div class="place-items-end md:hidden">
      <!--CD (CT on 15022022): Filter button located along with the grid/list view button in this component -->
      <UiAppModal2 :show="filters_modal" type="filters" title="" @confirm="filters_modal = false" @close="filters_modal = false">
        <SeriesFilter @filter="filter" :filters="component_filters" @resetFilters="resetFilters"/>
      </UiAppModal2>
    </div>

    <div class="flex overflow-hidden bg-white">
      <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div class="relative z-0 flex flex-1 overflow-hidden">

          <aside class="hidden w-52 md:order-first md:flex md:flex-col lg:w-96">
            <div class="px-6">
              <!--<h2 class="text-lg font-semibold text-gray-900">Filters</h2>-->
              <!--<p class="mt-1 text-sm text-gray-600">
                Sit amet consectetur, adipisicing elit
              </p>-->
              <!-- CD (CT on 20210723): Start Bar -->
              <!--<form class="flex mt-6 space-x-4" action="#">
                <div class="flex-1 min-w-0">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative rounded-sm shadow-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input type="search" name="search" id="search" class="block w-full pl-10 border-gray-300 rounded-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm" placeholder="Search">
                  </div>
                </div>
              </form>--> 
            </div>
            <SeriesFilter @filter="filter" :filters="component_filters" @resetFilters="resetFilters"/>
          </aside>

          <main class="relative z-0 flex-1 focus:outline-none xl:order-last">
            <article>
              <div class="bg-white">
                <!-- Filter (mobile) and Grid/List View -->
                <section aria-labelledby="filter-heading" class="relative z-10 grid items-center border-t border-blueGray-200">
                  <h2 id="filter-heading" class="sr-only">Filters and Grid/List View</h2>
                  <div class="col-start-1 row-start-1 py-4">
                    <div class="flex justify-between px-4 mx-auto md:justify-end max-w-7xl sm:px-6 lg:px-8">
                      <div class="md:hidden">
                        <!-- CD (CT on 20210723): Modal with filters opens when this button is clicked. Use /components/ui/AppModal2 for the modal-->                      
                        <UiAppButton className="primary" label="Filters" @click.prevent="filters_modal = true"/>
                      </div>
                      <div class="relative inline-block">
                        <!--<div class="flex">
                          <button type="button" class="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                            Sort
                            <svg class="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                          </button>
                        </div>-->
                        <div class="ml-6 sm:flex bg-blueGray-500 p-0.5 rounded-sm items-center">
                          <button type="button" class="p-1 rounded-sm text-blueGray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueGray-500 toggle-default" @click.prevent="list = true">
                            <UiIconViewList />
                            <span class="sr-only">Use list view</span>
                          </button>
                          <button type="button" class="ml-0.5 p-1 rounded-sm text-blueGray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueGray-500 toggle-default" @click.prevent="list = false">
                            <UiIconViewGrid />
                            <span class="sr-only">Use grid view</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <!-- Number of total results -->
              <div class="mt-5">
                <div class="w-full px-8 py-2 text-sm text-blueGray-500">
                  <div v-if="series_count">
                    <p>{{series_count}} Total results</p>
                  </div>
                </div>
              </div>

              <!--CD (CT on 20210723): When switching the view to list/grid, check out /components/products/RelatedProducts for reference. 
              -->

                <!-- CD (CT on 20210727): Additional notes for the details to be fetched for the cards. This is the same note on the AppCardPortraitProducts and AppCardLandscapeProducts components
  
                For the series task, please pull the following details for this series card:<template>
                  title - name
                  content - description
                  subtitle - alternateName
                  tags - tags (Fetch tags as well BUT DO NOT link to the tag-results page for now)
                  tags2 - isAccessoryOrSparePartFor (use appbadge for this one same as the tags. Do not link to anything)
                  image - image

                For the SERIES task, please pull the following details for this series card:<template>
                  title - name
                  content - description
                  subtitle - NO SUBTITLE, leave this blank
                  tags - tags (Fetch tags as well BUT DO NOT link to the tag-results page for now. Do not link to anything)
                  tags2 - category
                  image - image
                -->

              <!-- series list for grid view-->
              <div class="max-w-5xl px-4 pb-12 mx-auto mt-8 sm:px-6 lg:px-8" v-show="list == false">
                <div class="grid grid-cols-2 gap-4 mt-1 md:grid-cols-3">

                  <!-- CD (CT on 20210723): Use AppCardPortraitProducts here for the grid view -->
                  <UiAppCardPortraitProducts 
                     v-for="series in series" :key="series.sku"
                     :title="series.name"
                     :subtitle="series.shortTitle"
                     :image="series.image"
                     :imgAlt="series.name"
                     :content="series.description"
                     :link="'/series/' + series.slugForUrl"
                     :tags="series.tags"
                  />
                </div>
              </div>

              <!-- series list for list view-->
              <div class="max-w-5xl px-4 pb-12 mx-auto mt-8 sm:px-6 lg:px-8" v-show="list == true">
                <div class="grid grid-cols-1 gap-4 mt-1">

                  <!-- CD (CT on 20210723): Use AppCardLandscapeProducts here for the list view. -->
                  <UiAppCardLandscapeProducts
                     v-for="series in series" :key="series.sku"
                     :title="series.name"
                     :subtitle="series.shortTitle"
                     :image="series.image"
                     :imgAlt="series.name"
                     :content="series.description"
                     :link="'/series/' + series.slugForUrl"
                     :tags="series.tags"
                  />
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
const n_items = process.env.LAZY_LOADING_NUMBER_OF_ITEMS
import UiAppCardPortraitProducts from "../ui/AppCardPortraitProducts.vue"
import UiAppCardLandscapeProducts from "../ui/AppCardLandscapeProducts.vue"


export default {
  components: {UiAppCardPortraitProducts, UiAppCardLandscapeProducts},
  data(){
    return {
      filters_modal: false,
      series: null,
      series_count: null,
      list: false,
      limit: 0,
      filters: {},
      component_filters: {
        selected_categories: [],
        selected_hand_tool_categories: [],
        selected_machining_spindles_categories: [],
      },
    }
  },
  async created(){
    this.limit = n_items
    const series = await this.$content('series').limit(this.limit).where(this.filters).fetch()
    const series_count_items = await this.$content('series').where(this.filters).fetch()
    this.series_count = series_count_items.length
    this.series = series
  },
  async mounted(){
    window.addEventListener('scroll', () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight - 690;
      if (bottomOfWindow) {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(async () => {
        if(this.limit + n_items > series_count){
          this.limit = series_count.length
        } else {
          this.limit = this.limit + n_items
        }
        this.loadSeries()
      }, 500)
      }
    })
  },
  methods: {
    filter(filters){
      this.limit = n_items
      this.filters = {}
      this.component_filters = filters
      if(filters.selected_categories.length) this.filters.category = {$in: filters.selected_categories};
      if(filters.selected_hand_tool_categories.length) this.filters.handToolCategory = {$in: filters.selected_hand_tool_categories};
      if(filters.selected_machining_spindles_categories.length) this.filters.machiningSpindlesCategory = {$containsAny: filters.selected_machining_spindles_categories};
      this.loadSeries()
    },
    resetFilters(){
      this.filters = {};
      this.component_filters = {
        selected_categories: [],
        selected_hand_tool_categories: [],
        selected_machining_spindles_categories: [],
      };
      this.loadSeries();
    },
    async loadSeries(){
      const series = await this.$content('series').limit(this.limit).where(this.filters).fetch()
      this.series_count = await this.$content('series').where(this.filters).fetch()
      this.series_count = this.series_count.length
      this.series = series
    }
  },

}
</script>
