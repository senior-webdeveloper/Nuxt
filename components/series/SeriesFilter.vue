<template>
  <div>
    <div class="flex-1 min-h-0 overflow-y-auto" aria-label="Series Filter">
      
      <div class="bg-white">
        <!-- Filters -->
        <section aria-labelledby="filter-heading" class="relative z-10 grid items-center md:border-t border-blueGray-200">
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
    
      <!--<div class="grid justify-items-center">
        <UiAppButton className="tertiary" class="my-2" label="Clear Filters" @click="$emit('resetFilters')"/>
      </div>-->

      <div class="mt-5">

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
                    <li v-for="category in categories" :key="category">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="category" v-model="filters.selected_categories" :value="category" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm text-blueGray-600">
                          <label for="comments">{{category}}</label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </fieldset>
              </div>
            </template>
          </UiAppAccordionFilters>
        </div>

        <div class="relative py-3 border-b border-gray-200">
          <UiAppAccordionFilters>
            <template v-slot:header>
              <div class="p-1">
                <h3 class="text-base font-medium text-gray-900">Hand Tools</h3>
              </div>
            </template>
            <template v-slot:content>  
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Hand Tools</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="category in hand_tool_categories" :key="category">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="category" v-model="filters.selected_hand_tool_categories" :value="category" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm text-blueGray-600">
                          <label for="comments">{{category}}</label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </fieldset>
              </div>
            </template>
          </UiAppAccordionFilters>
        </div>

        <div class="relative py-3 border-b border-gray-200">
          <UiAppAccordionFilters>
            <template v-slot:header>
              <div class="p-1">
                <h3 class="text-base font-medium text-gray-900">Machine Type</h3>
              </div>
            </template>
            <template v-slot:content> 
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Machine Type</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="category in machining_spindles_categories" :key="category">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="category" v-model="filters.selected_machining_spindles_categories" :value="category" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm text-blueGray-600">
                          <label for="comments">{{category}}</label>
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
  props: ['filters'],
  data(){
    return{
      categories: [],
      hand_tool_categories: [],
      machining_spindles_categories: [],
    }
  },
  async created(){
    // Get unique filter fields
    const series = await this.$content('series').only(['category', 'handToolCategory', 'machiningSpindlesCategory']).fetch()
    const categories = series.map(x => x.category)
    const unique_categories = categories.filter((c, index) => c && categories.indexOf(c) === index)
    const hand_tool_categories = series.map(x => x.handToolCategory)
    const unique_hand_tool_categories = hand_tool_categories.filter((c, index) => c && hand_tool_categories.indexOf(c) === index)
    
    this.categories = unique_categories
    this.hand_tool_categories = unique_hand_tool_categories

    // Array Fields

    let machining_spindles_categories = []
    series.forEach(item => {
      machining_spindles_categories = machining_spindles_categories.concat(item.machiningSpindlesCategory)
    })

    const unique_machining_spindles_categories = machining_spindles_categories.filter((c, index) => machining_spindles_categories.indexOf(c) === index && c)
    this.machining_spindles_categories = unique_machining_spindles_categories

  },
  methods: {
    check(){
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        this.$emit('filter', this.filters)
      }, 200)    
    },
  }
}
</script>
