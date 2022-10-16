<template>
  <div>
    <FindDistributorsMapModal :distributors="filtered_distributors" @openDistributorsPopup="openDistributorsPopup"/>
    <UiAppModal v-if="selected_distributor" :show="show_distributor_modal" :title="selected_distributor.company" @confirm="show_distributor_modal = false" @close="show_distributor_modal = false" type="blank">
      <div class="space-y-4 transition duration-300 ease-in-out delay-100 border shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-105 hover:border-blueGray-800">
        <div class="px-4 py-2">
          <div class="space-y-1 text-lg font-medium leading-5">
            <!-- CD (CT on 20210729): If the field has no value, don't show the field -->
            <nuxt-link class="cursor-default" :to="selected_distributor.url">
              <h3>{{selected_distributor.name}}</h3>
            </nuxt-link>
            <p>{{selected_distributor.category}}</p>
            <p>{{selected_distributor.categoryType}}</p>
            <p>{{selected_distributor.address.streetAddress + ","}} {{selected_distributor.address.addressLocality + ","}} {{selected_distributor.address.addressRegion + ","}} 
            {{selected_distributor.address.country + " " + selected_distributor.address.postalCode}}</p>
            <p>{{selected_distributor.company}}</p>
            <p><a :href="'tel:' + selected_distributor.telephone">{{selected_distributor.telephone}}</a></p>
            <p>{{selected_distributor.faxNumber}}</p>
            <p><a :href="'mailto:' + selected_distributor.email">{{selected_distributor.emails}}</a></p>
            <p><a :href="selected_distributor.url" target="_blank">{{selected_distributor.url}}</a></p>
          </div>
        </div>
      </div>
    </UiAppModal>
    <div class="place-items-end md:hidden">
      <UiAppButton className="primary" label="Filters" @click="filters_modal = true"/>
      <!-- CD (CT on 20210723): Modal opens when this button is clicked. Modal with filters show. 
      -->
      <UiAppModal :show="filters_modal" type="filters" title="" @confirm="filters_modal = false" @close="filters_modal = false">
        <FindDistributorsFilter :distributors="raw_distributors" @filter="filter" :filters="component_filters"/>
      </UiAppModal>
    </div>

    <div class="flex overflow-hidden bg-white">
      <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div class="relative z-0 flex flex-1 overflow-hidden">

          <aside class="hidden border-r border-gray-200 md:order-first md:flex md:flex-col w-96">
            <div class="px-6 pt-6 pb-4">
              <h2>Filters</h2>
              <!--<p class="mt-1 text-sm text-gray-600">
                Sit amet consectetur, adipisicing elit
              </p>-->
            </div>
            <FindDistributorsFilter :distributors="raw_distributors" @filter="filter" :filters="component_filters"/>
          </aside>

          <main class="relative z-0 flex-1 focus:outline-none xl:order-last">

            <article>

              <div class="mt-5">
                <div class="w-full p-2 bg-blueGray-100">
                  <div class="items-center">
                    <div>
                      <!-- CD (CT on 20210727): Don't mind this
                      Sort by [dropdown here] to be added later on in the project -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- Number of total results -->
              <div class="mt-5">
                <div class="w-full p-2">
                  <div>
                    <p>{{filtered_distributors.length}} Total locations</p>
                  </div>
                </div>
              </div>

              <!-- Products list for grid view-->
              <div class="max-w-5xl px-4 pb-12 mx-auto mt-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 gap-4 mt-1 sm:grid-cols-3 lg:grid-cols-4">

                  <div v-for="listing in paginated_distributors" :key="listing._id" @click="openDistributorsPopup(listing)">
                    <div class="space-y-4 transition duration-300 ease-in-out delay-100 border shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-105 hover:border-blueGray-800">
                      <div class="px-4 py-2">
                        <div class="space-y-1 text-lg font-medium leading-5">
                          <!-- CD (CT on 20210729): If the field has no value, don't show the field -->
                          <nuxt-link class="cursor-default" :to="listing.url">
                            <h3>{{listing.name}}</h3>
                          </nuxt-link>
                          <p>{{listing.category}}</p>
                          <p>{{listing.categoryType}}</p>
                          <p>{{listing.address.streetAddress + ","}} {{listing.address.addressLocality + ","}} {{listing.address.addressRegion + ","}} 
                          {{listing.address.country + " " + listing.address.postalCode}}</p>
                          <p>{{listing.company}}</p>
                          <p><a :href="'tel:' + listing.telephone">{{listing.telephone}}</a></p>
                          <p>{{listing.faxNumber}}</p>
                          <p><a :href="'mailto:' + listing.email">{{listing.emails}}</a></p>
                          <p><a :href="listing.url" target="_blank">{{listing.url}}</a></p>
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
const n_items = process.env.MAP_LAZY_LOADING_NUMBER_OF_ITEMS
import {
  FETCH_DISTRIBUTOR_SALES_REP_MAP,
  FETCH_PAGINATED_DISTRIBUTORS
} from "~/graphql/find-distributors";

export default {
  data(){
    return {
      raw_distributors: null,
      filtered_distributors: null,
      paginated_distributors: null,
      page: 2,
      filters_modal: false,
      component_filters: {
        selected_categories: [],
        selected_category_types: [],
        national_distributor: false,
      },
      show_distributor_modal: false,
      selected_distributor: null,
    }
  },
  async fetch() {
    // const {
    //   data: { paginatedDistributors }
    // } = await this.$apollo.query({ 
    //   query: FETCH_PAGINATED_DISTRIBUTORS,
    //   variables : {
    //     PaginatedDistributorsInput: {
    //       limit: n_items,
    //       offset: 0
    //     }
    //   }
    //   });
    // this.paginated_distributors = paginatedDistributors;
    const {
      data : { distributors_and_sales_representatives }
    } = await this.$apollo.query({ query: FETCH_DISTRIBUTOR_SALES_REP_MAP});
    this.raw_distributors = distributors_and_sales_representatives
    this.filtered_distributors = this.raw_distributors
    this.paginated_distributors = this.filtered_distributors.slice(0, n_items)
  },
  async mounted(){
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
    filter(filters){
      let filtered_distributors = []
      this.page = 1
      filtered_distributors = this.raw_distributors.filter(distributor => {
        const first_condition = filters.selected_categories.length ? filters.selected_categories.includes(distributor.category) : true
        const second_condition = filters.selected_category_types.length ? filters.selected_category_types.includes(distributor.categoryType) : true
        const third_condition = filters.national_distributor == distributor.isNationalDistributor
        return first_condition && second_condition && third_condition
      })
      this.filtered_distributors = filtered_distributors
      this.paginated_distributors = this.filtered_distributors.slice(0, n_items * this.page)
      this.page++
      this.component_filters = filters
    },
    openDistributorsPopup(distributor){
      this.selected_distributor = distributor
      this.show_distributor_modal = true
    }
  }
}
</script>

