<template>
  <div>
    <div class="flex-1 min-h-0 overflow-y-auto" aria-label="Find Distributors Filter">

      <div class="bg-white">
        <!-- Filters -->
        <section aria-labelledby="filter-heading" class="relative z-10 grid items-center sm:mt-28">
          <h2 id="filter-heading" class="sr-only">Filters</h2>
          <div class="relative col-start-1 row-start-1 py-4">
            <div class="flex mx-auto space-x-6 divide-x divide-gray-200 max-w-7xl lg:px-8">
              <div class="text-base font-semibold text-blueGray-700 group">
                Filters
              </div>
              <div class="pl-6 text-base text-blueGray-500">
                <button type="button" @click="$emit('resetFilters')">Clear all</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="mt-5">
        <!-- CD (CT on 20210729): Please make the Top Speed as a Checkbox such that DEFAULT is unchecked (not top speed). If user checks, then it is a top speed -->
        <div class="relative py-3 border-b border-gray-200">
          <div class="items-center px-3">
            <fieldset class="py-3">
              <legend class="sr-only">National Distributor</legend>
              <ul class="relative z-0 space-y-4 ">
                <li>
                  <div class="relative flex items-start">
                    <div class="flex items-center h-5">
                      <input name="National Distributor" v-model="national_distributor" @change="check" type="checkbox" class="checkbox">
                    </div>
                    <div class="ml-3 text-sm text-blueGray-600">
                      <label><h3 class="text-base font-medium text-gray-900" for="category">National Distributor</h3></label>
                    </div>
                  </div>
                </li>
              </ul>
            </fieldset>
          </div>
        </div>

        <div class="relative py-3 border-b border-gray-200">
          <div class="items-center px-3">
            <fieldset class="py-3">
              <legend class="sr-only">Top Speed</legend>
              <ul class="relative z-0 space-y-4 ">
                <li>
                  <div class="relative flex items-start">
                    <div class="flex items-center h-5">
                      <input name="Top Speed" v-model="top_speed" @change="check" type="checkbox" class="checkbox">
                    </div>
                    <div class="ml-3 text-sm text-blueGray-600">
                      <label><h3 class="text-base font-medium text-gray-900" for="category">Top Speed</h3></label>
                    </div>
                  </div>
                </li>
              </ul>
            </fieldset>
          </div>
        </div>
        
        <div class="relative py-3 border-b border-gray-200">
          <UiAppAccordionFilters>
            <template v-slot:header>
              <div class="p-1">
                <h3 class="text-base font-medium text-gray-900">Category</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Category</legend>
                  <ul class="relative z-0 space-y-4 ">
                    <li v-for="category in category_types" :key="category">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="category" v-model="selected_category_types" :value="category" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm text-blueGray-600">
                          <label for="category">{{category}}</label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </fieldset>
              </div>
            </template>
          </UiAppAccordionFilters>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["distributors", "filters"],
  data(){
    return{
      categories: [],
      category_types: [],
      selected_categories: [],
      selected_category_types: [],
      national_distributor: false,
      top_speed: false,
    }
  },
  mounted(){
      const categories = this.distributors.map(x => x.category)
      const unique_categories = categories.filter((c, index) => c && categories.indexOf(c) === index)
      const category_types = this.distributors.map(x => x.categoryType)
      const unique_category_types = category_types.filter((c, index) => c && category_types.indexOf(c) === index)

      this.categories = unique_categories
      this.category_types = unique_category_types
      this.selected_categories = this.filters.selected_categories
      this.selected_category_types = this.filters.selected_category_types
      this.national_distributor = this.filters.national_distributor
      this.top_speed = this.filters.top_speed
  },
  watch: {
    filters: function(newVal, oldVal){
      this.selected_categories = newVal.selected_categories
      this.selected_category_types = newVal.selected_category_types
      this.national_distributor = newVal.national_distributor
      this.top_speed = newVal.top_speed
    }
  },
  methods: {
    check(){
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        this.$emit('filter', {
          selected_categories : this.selected_categories,
          selected_category_types: this.selected_category_types,
          national_distributor: this.national_distributor,
          top_speed: this.top_speed
        })
      }, 200)    
    },
  }
}
</script>


