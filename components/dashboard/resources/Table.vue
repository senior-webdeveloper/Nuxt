<template>
  <div>
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="resetSliderData"
      :title="slider.title"
    >
      <!-- CD (CT on 20210612): Use ResourceView for as slider content -->
      <DashboardResourcesView :resources="resources.selected" />
    </UiAppSlideOverPanel>
    <UiAppModal2
      v-if="showFilterModal"
      type="white"
      :show="showFilterModal"
      @close="showFilterModal = false"
      @confirm="filter(); showFilterModal = false"
      @resetFilters="resetFilters"
      title="Filter Resources"
    >
      <div class="relative py-2">
        <div class="py-1 text-sm bg-gray-50">
          <h3>Category</h3>
        </div>
        <!-- CD (CT on 20210628): Make the options here dynamic -->
        <div class="items-center">
          <fieldset class="py-3">
            <legend class="sr-only">Category</legend>
            <ul class="relative z-0 space-y-2">
              <li v-for="category in filters.categories" :key="category">
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input :name="category" v-model="filters.selected_categories" :value="category" type="checkbox" class="checkbox">
                  </div>
                  <div class="text-sm">
                    <label class="block ml-3 text-sm font-medium text-blueGray-700">{{category}}</label>
                  </div>
                </div>
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
    </UiAppModal2>
    <!-- CD (CT on 20210628): Use AppTable -->
    <!-- Table not using AppTable component --> 
    <div class="mt-20">
      <div class="flex items-center justify-between">
        <p class="sr-only"> Table</p>
        <div>
          <UiAppButton
            className="secondary"
            label="Filter"
            @click="showFilterModal = true"
          
          />
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <div class="-my-2 sm:-mx-6 lg:-mx-8">
          <div class="inline-block w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-auto shadow sm:rounded-md">
              <table class="relative w-full border divide-y divide-blueGray-200">
                <thead>
                  <tr class="trClass">
                    <th scope="col" class="sticky top-0 px-6 py-3 text-xs font-medium tracking-wider text-left uppercase whitespace-nowrap bg-blueGray-200 text-blueGray-500">
                      <div class="flex items-center"  @click="sortTitle">
                      Title
                      <span>
                      <UiIconSortDescending class="w-6 h-6 ml-3" v-if="sortMethod !== 'title asc'"/>
                      <UiIconSortAscending class="w-6 h-6 ml-3" v-else/>
                      </span>
                      </div>
                    </th>
                    <th scope="col" class="sticky top-0 px-6 py-3 text-xs font-medium tracking-wider text-left uppercase whitespace-nowrap bg-blueGray-200 text-blueGray-500">
                      <div class="flex items-center"  @click="sortCategory">
                      Category
                      <span>
                      <UiIconSortDescending class="w-6 h-6 ml-3" v-if="sortMethod !== 'category asc'"/>
                      <UiIconSortAscending class="w-6 h-6 ml-3" v-else/>
                      </span>
                      </div>
                    </th>
                    <th scope="col" class="sticky top-0 px-6 py-3 text-xs font-medium tracking-wider text-left uppercase whitespace-nowrap bg-blueGray-200 text-blueGray-500">
                      <div class="items-center">
                      Description
                      </div>
                    </th>
                    <th scope="col" class="sticky top-0 px-6 py-3 text-xs font-medium tracking-wider text-left uppercase whitespace-nowrap bg-blueGray-200 text-blueGray-500">
                      <div class="items-center">
                      Actions
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="$fetchState.pending">
                    <tr>
                      <td :colspan="headings.length" class="text-center">Loading ...</td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr class="trClass" v-for="item in pagination.items" :key="item._id">
                      <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
                        {{ item.title }}
                      </td>
                      <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
                        {{ item.category }}
                      </td>
                      <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
                        {{ item.description }}
                      </td>
                      <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
                        <UiAppButton className="icon-tables" @click="download(item)">
                          <UiIconCloudDownload />
                        </UiAppButton>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <div>
              <UiAppPagination
                @change:page="setPaginationPage"
                @change:size="setPaginationSize"
                :pages="pagination.pages"
                :from="pagination.from"
                :to="pagination.to"
                :items="pagination.items.length"
                :size="pagination.size"
                :total="paginationItems.length"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  	<!-- End of table -->
  </div>
</template>

<script>
import { FETCH_ALL_RESOURCES } from "~/graphql/dashboard/admin/resources";
import paginationMixin from "~/mixins/pagination";
import sliderMixin from "~/mixins/slider";
export default {
  mixins: [paginationMixin, sliderMixin],
  async fetch() {
    const {
      data: { resources }
    } = await this.$apollo.query({ query: FETCH_ALL_RESOURCES, variables: {
      query: { status: 'Active' }
    } });
    this.resources.all = resources;
    this.resources.filtered = resources;
    const categories = resources.map(x => x.category)
    this.filters.categories = categories.filter((c, index) => c && categories.indexOf(c) === index)
  },
  data() {
    return {
      headings: ["Title", "Category", "Description", "Status", "Actions"],
      resources: {
        all: [],
        filtered: [],
        selected: null,
      },
      showFilterModal: false,
      filters: {
        categories: [],
        selected_categories: [],
        statuses: ["Active", "Inactive"],
        selected_statuses: [],
      },
      sortMethod: null,
    };
  },
  computed: {
    paginationItems() {
      return this.resources.filtered;
    }
  },
  methods: {
    resetSliderData() {
      this.resetSlider();
      this.resources.selected = null;
    },
    viewResource(resources) {
      this.resources.selected = resources;
      this.setSlider({
        show: true,
        title: "View Resource"
      });
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      return status === "Inactive" ? "red" : "green";
    },
    download(resource) {
      const link = document.createElement("a");
      link.download = resource.fileUpload;
      link.href = resource.fileURL;
      link.click();
    },
    filter(){
      console.log("filter")
      this.resources.filtered = this.resources.all.filter(resource =>  {
        return this.filters.selected_categories.length ? this.filters.selected_categories.includes(resource.category) : true
      })
    },    
    sortStatus(){
      if(this.sortMethod !== "status asc"){
        this.sortMethod = "status asc"
        this.resources.filtered = this.resources.filtered.sort((a, b) => {
          var nameA=a.status.toLowerCase(), nameB=b.status.toLowerCase();
          if (nameA < nameB) //sort string ascending
            return -1;
          if (nameA > nameB)
            return 1;
          return 0; //default return value (no sorting)
        })
      } else {
        this.sortMethod = "status desc"
        this.resources.filtered = this.resources.filtered.sort((a, b) => {
          var nameA=a.status.toLowerCase(), nameB=b.status.toLowerCase();
          if (nameA < nameB) //sort string ascending
            return 1;
          if (nameA > nameB)
            return -1;
          return 0; //default return value (no sorting)
        })
      }
    },
    sortTitle(){
      if(this.sortMethod !== "title asc"){
        this.sortMethod = "title asc"
        this.resources.filtered = this.resources.filtered.sort((a, b) => {
          var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase();
          if (nameA < nameB) //sort string ascending
            return -1;
          if (nameA > nameB)
            return 1;
          return 0; //default return value (no sorting)
        })
      } else {
        this.sortMethod = "title desc"
        this.resources.filtered = this.resources.filtered.sort((a, b) => {
          var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase();
          if (nameA < nameB) //sort string ascending
            return 1;
          if (nameA > nameB)
            return -1;
          return 0; //default return value (no sorting)
        })
      }
    },
    sortCategory(){
      if(this.sortMethod !== "category asc"){
        this.sortMethod = "category asc"
        this.resources.filtered = this.resources.filtered.sort((a, b) => {
          var nameA=a.category.toLowerCase(), nameB=b.category.toLowerCase();
          if (nameA < nameB) //sort string ascending
            return -1;
          if (nameA > nameB)
            return 1;
          return 0; //default return value (no sorting)
        })
      } else {
        this.sortMethod = "category desc"
        this.resources.filtered = this.resources.filtered.sort((a, b) => {
          var nameA=a.category.toLowerCase(), nameB=b.category.toLowerCase();
          if (nameA < nameB) //sort string ascending
            return 1;
          if (nameA > nameB)
            return -1;
          return 0; //default return value (no sorting)
        })
      }
    },
    resetFilters(){
      this.filters.selected_categories = []
    }
  }
};
</script>
