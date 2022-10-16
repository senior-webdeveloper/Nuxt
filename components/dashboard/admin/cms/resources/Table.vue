<template>
  <div>
    <UiAppModal
      v-if="resources.selected"
      :show="modal"
      @close="closeModal"
      @confirm="deleteOneResource"
      :title="`Are you sure to delete ${resources.selected.title || 'N/A'}`"
      content="This action is irreversable"
    />
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
                    <input v-model="filters.selected_categories" :value="category" type="checkbox" class="checkbox">
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
      <div class="relative py-2">
        <div class="py-1 text-sm bg-gray-50">
          <h3>Status</h3>
        </div>
        <!-- CD (CT on 20210628): Make the options here dynamic -->
        <div class="items-center">
          <fieldset class="py-3">
            <legend class="sr-only">Status</legend>
            <div class="relative z-0 space-y-2">
              <div class="relative flex items-center">
                <input
                  type="checkbox"
                  id="isTopSpeed"
                  name="isTopSPeed"
                  class="checkbox"
                  v-model="filters.selected_statuses"
                  value="Active"
                />
                <label for="isTopSpeed" class="block ml-3 text-sm font-medium text-blueGray-700">Active</label>
              </div>
              <div class="relative flex items-center">
                <input
                  type="checkbox"
                  id="isTopSpeed"
                  name="isTopSPeed"
                  class="checkbox"
                  v-model="filters.selected_statuses"
                  value="Inactive"
                />
                <label for="isTopSpeed" class="block ml-3 text-sm font-medium text-blueGray-700">Inactive</label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </UiAppModal2>
    <!-- CD (CT on 20210628): Use AppSlideOverPanel for viewing/editing content-->
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="resetSliderData"
      :title="slider.title"
    >
      <!-- CD (CT on 20210612): Use ResourceView for as slider content -->
      <DashboardAdminCmsResourcesView
        v-if="actionIs('view', 'update')"
        :resources="resources.selected"
        :is-edit="actionIs('update')"
        @submit:delete="deleteResource(resources.selected)"
        @submit:update="submitResource"
        :titles="titles"
      />
      <DashboardAdminCmsResourcesAdd
        v-if="actionIs('add')"
        @submit:create="submitResource"
        @submit:update="submitResource"
        :resource="resources.selected"
        :titles="titles"
      />
    </UiAppSlideOverPanel>

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
        <div>
          <UiAppButton
            className="primary"
            label="Add Resource"
            @click="showAddResource"
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
                      <div class="flex items-center" @click="sortStatus">
                      Status
                      <span>
                      <UiIconSortDescending class="w-6 h-6 ml-3" v-if="sortMethod !== 'status asc'"/>
                      <UiIconSortAscending class="w-6 h-6 ml-3" v-else/>
                      </span>
                      </div>
                    </th>
                    <th scope="col" class="sticky top-0 px-6 py-3 text-xs font-medium tracking-wider text-left uppercase whitespace-nowrap bg-blueGray-200 text-blueGray-500">
                      <div class="flex items-center" @click="sortTitle">
                      Title
                      <span>
                      <UiIconSortDescending class="w-6 h-6 ml-3" v-if="sortMethod !== 'title asc'"/>
                      <UiIconSortAscending class="w-6 h-6 ml-3" v-else/>
                      </span>
                      </div>
                    </th>
                    <th scope="col" class="sticky top-0 px-6 py-3 text-xs font-medium tracking-wider text-left uppercase whitespace-nowrap bg-blueGray-200 text-blueGray-500">
                      <div class="flex items-center" @click="sortCategory">
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
                        <UiAppBadge
                          :className="statusColor(item.status)"
                          :label="item.status"
                        />
                      </td>
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
                        <UiAppButton className="icon-tables" @click="showUpdateResource(item)">
                          <UiIconView />
                        </UiAppButton>
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
import {
  INSERT_ONE_RESOURCE,
  FETCH_ALL_RESOURCES,
  UPDATE_ONE_RESOURCE,
  DELETE_ONE_RESOURCE
} from "~/graphql/dashboard/admin/resources";
import paginationMixin from "~/mixins/pagination";
import notificationMixin from "~/mixins/notification";
import sliderMixin from "~/mixins/slider";
export default {
  mixins: [paginationMixin, notificationMixin, sliderMixin],
  async fetch() {
    const {
      data: { resources }
    } = await this.$apollo.query({ query: FETCH_ALL_RESOURCES });
    this.resources.all = resources;
    this.resources.filtered = resources;
    this.titles = resources.map(resource => resource.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
    const categories = resources.map(x => x.category)
    this.filters.categories = categories.filter((c, index) => c && categories.indexOf(c) === index)
  },
  data() {
    return {
      titles: [],
      action: "",
      headings: ["Title", "Category", "Description", "Actions"],
      resources: {
        all: [],
        filtered: [],
        selected: null
      },
      modal: false,
      showFilterModal: false,
      filters: {
        categories: [],
        selected_categories: [],
        statuses: ["Active", "Inactive"],
        selected_statuses: []
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
    actionIs(...actions) {
      return actions.includes(this.action);
    },
    async deleteOneResource() {
      await this.$apollo.mutate({
        mutation: DELETE_ONE_RESOURCE,
        variables: {
          query: { _id: this.resources.selected._id }
        }
      });

      const index = this.resources.all.indexOf(this.resources.selected);
      this.resources.all.splice(index, 1);
      this.modal = false;
      this.resources.selected = null;
      this.action = "";
      this.setNotification({
        show: true,
        title: "Success",
        content: "Deleted"
      });
    },
    closeModal() {
      this.modal = false;
      this.resources.selected = null;
      this.action = "";
    },
    resetSliderData() {
      this.resetSlider();
      this.resources.selected = null;
      this.action = "";
    },
    showAddResource() {
      this.setSlider({
        show: true,
        title: ""
      });
      this.action = "add";
    },
    showUpdateResource(resources) {
      this.resources.selected = resources;
      this.setSlider({
        show: true,
        title: ""
      });
      this.action = "update";
    },
    async submitResource(data) {
      console.log('submitting', this.action)
      if (this.action === "add") {
        const { location, filename } = await this.uploadThumbnail(
          data.fileUpload
        );
        await this.addResource({
          ...data,
          fileUpload: filename,
          fileURL: location
        });
      } else {
        let fileUpload = data.fileUpload
        let fileURL = data.fileURL
        if (
          this.action === "update" &&
          this.resources.selected.fileUpload !== data.fileUpload
        ) {
          const uploaded = await this.uploadThumbnail(
            data.fileUpload
          );

          fileUpload = uploaded.filename
          fileURL = uploaded.location
        }

        await this.updateResource({
          ...data,
          fileUpload,
          fileURL
        });
      }

      this.resetSliderData();
    },
    async addResource(data) {
      const {
        data: { insertedResource }
      } = await this.$apollo.mutate({
        mutation: INSERT_ONE_RESOURCE,
        variables: { data }
      });
      // CD (JE on 20210615): push the new data to first index of the array
      this.resources.all.unshift({ ...data, _id: insertedResource._id });
      this.setNotification({
        show: true,
        title: "Success",
        content: "Saved"
      });
      this.filter()
    },
    async updateResource(data) {
      console.log('updating')
      data.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      await this.$apollo.mutate({
        mutation: UPDATE_ONE_RESOURCE,
        variables: { query: { _id: this.resources.selected._id }, set: data }
      });
      const index = this.resources.all.indexOf(this.resources.selected);
      const { _id } = this.resources.selected;
      // update list
      this.$set(this.resources.all, index, { ...data, _id });
      this.setNotification({
        show: true,
        title: "Update Successful",
        content: ""
      });
    },
    viewResource(resources) {
      this.resources.selected = resources;
      this.setSlider({
        show: true,
        title: "View Resource"
      });
      this.action = "view";
    },
    async deleteResource(resources) {
      this.resetSliderData();
      this.resources.selected = resources;
      this.modal = true;
    },
    async uploadThumbnail(file) {
      const fd = new FormData();
      fd.append("file", file);
      const {
        data: { Location, Key }
      } = await this.$axios.post("/api/v1/dashboard/cms/resources/upload", fd);
      return { filename: Key, location: Location };
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      return status === "Inactive" ? "red" : "green";
    },
    download(resource) {
      const link = document.createElement('a')
      link.download = resource.fileUpload
      link.href= resource.fileURL
      link.click()
    },
    filter(){
      this.resources.filtered = this.resources.all.filter(resource =>  {
        return (this.filters.selected_categories.length ? this.filters.selected_categories.includes(resource.category) : true) && (this.filters.selected_statuses.length ? this.filters.selected_statuses.includes(resource.status) : true)
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
      this.filters.selected_statuses = []
      this.filters.selected_categories = []
      this.filter()
    }
  }
};
</script>
