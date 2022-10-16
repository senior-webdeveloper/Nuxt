<template>
  <div>
    <div class="flex-1 min-h-0 overflow-y-auto text-align-center" aria-label="Products Filter">
      
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
                <h3 class="text-base font-medium text-gray-900">Tool Type</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Tool Type</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="category in major_categories" :key="category">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="category" v-model="filters.selected_major_categories" :value="category" @change="check" type="checkbox" class="checkbox">
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
                <h3 class="text-base font-medium text-gray-900">Product Category</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Product Category</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="category in minor_categories" :key="category">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="category" v-model="filters.selected_minor_categories" :value="category" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="product-categories">{{category}}</label>
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
                <h3 class="text-base font-medium text-gray-900">Series</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Series</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="series in series" :key="series">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="series" v-model="filters.selected_series" :value="series" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="series">{{series}}</label>
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
                <h3 class="text-base font-medium text-gray-900">Drive Type</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Drive Type</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="type in drive_types" :key="type">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="type" v-model="filters.selected_drive_types" :value="type" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="product-type">{{type}}</label>
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
                <h3 class="text-base font-medium text-gray-900">Status</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Status</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="status in statuses" :key="status">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="status" v-model="filters.selected_statuses" :value="status" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="status">{{status}}</label>
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
                <h3 class="text-base font-medium text-gray-900">Diameter – Metric</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Diameter – Metric</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="metric in diameter_metrics" :key="metric">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="metric" v-model="filters.selected_diameter_metrics" :value="metric" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="diameter-metrics">{{metric}}</label>
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
                <h3 class="text-base font-medium text-gray-900">Diameter – Inch</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Diameter – Inch</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="inches in diameter_inches" :key="inches">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="inches" v-model="filters.selected_diameter_inches" :value="inches" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="diameter-inches">{{inches}}</label>
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
                <h3 class="text-base font-medium text-gray-900">Collet Type</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Collet Type</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="type in collet_types" :key="type">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="type" v-model="filters.selected_collet_types" :value="type" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="collet-type">{{type}}</label>
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
                <h3 class="text-base font-medium text-gray-900">Applications</h3>
              </div>
            </template>
            <template v-slot:content>   
              <div class="items-center px-3">
                <fieldset class="py-3">
                  <legend class="sr-only">Applications</legend>
                  <ul class="relative z-0 space-y-4">
                    <li v-for="type in applications" :key="type">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="type" v-model="filters.selected_applications" :value="type" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="comments">{{type}}</label>
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
                    <li v-for="type in machine_types" :key="type">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input :name="type" v-model="filters.selected_machine_types" :value="type" @change="check" type="checkbox" class="checkbox">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="machine-type">{{type}}</label>
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
      major_categories: [],
      minor_categories: [],
      series: [],
      drive_types: [],
      statuses: [],
      diameter_metrics: [],
      diameter_inches: [],
      collet_types: [],
      applications: [],
      machine_types: [],
    }
  },
  async created(){
    // Get unique filter fields
    const products = await this.$content('products').only().fetch()

    //String fields
    const major_categories = products.map(x => x.toolType)
    const unique_major_categories = major_categories.filter((c, index) => {return major_categories.indexOf(c) === index && c})
    const minor_categories = products.map(x => x.productCategory)
    const unique_minor_categorues = minor_categories.filter((c, index) =>  { return minor_categories.indexOf(c) === index && c})
    const statuses = products.map(x => x.productStatus)
    const unique_statuses = statuses.filter((c, index) => {return statuses.indexOf(c) === index && c})
    const diameter_metrics = products.map(x => x.productDiameterMetric)
    const unique_diameter_metrics = diameter_metrics.filter((c, index) => {return diameter_metrics.indexOf(c) === index && c})
    const diameter_inches = products.map(x => x.productDiameterInch)
    const unique_diameter_inches = diameter_inches.filter((c, index) => {return diameter_inches.indexOf(c) === index && c})
    const collet_types = products.map(x => x.colletType)
    const unique_collet_types = collet_types.filter((c, index) => {return collet_types.indexOf(c) === index && c})

    //Array fields
    let series = []
    let drive_types = []
    let applications = []
    let machine_types = []

    products.forEach(product => {
      series = series.concat(product.isAccessoryOrSparePartFor)
      drive_types = drive_types.concat(product.productType)
      applications = applications.concat(product.application)
      machine_types = machine_types.concat(product.machineType)
    })
    
    const unique_series = series.filter((c, index) => series.indexOf(c) === index && c)
    const unique_drive_types = drive_types.filter((c, index) => drive_types.indexOf(c) === index && c)
    const unique_applications = applications.filter((c, index) => applications.indexOf(c) === index && c)
    const unique_machine_types = machine_types.filter((c, index) => machine_types.indexOf(c) === index && c)
    
    //Populate
    this.major_categories = unique_major_categories
    this.minor_categories = unique_minor_categorues
    this.series = unique_series
    this.drive_types = unique_drive_types
    this.statuses = unique_statuses
    this.diameter_metrics = unique_diameter_metrics
    this.diameter_inches = unique_diameter_inches
    this.collet_types = unique_collet_types
    this.applications = unique_applications
    this.machine_types = unique_machine_types
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
