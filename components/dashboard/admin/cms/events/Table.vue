<template>
  <div>
    <UiAppModal
      v-if="modal"
      :show="modal"
      @close="closeModal"
      @confirm="deleteOneEvent"
      :title="`Are you sure to delete ${events.selected.name || ''} ?`"
      content="This action is irreversable"
    />

    <!-- CD (CT on 20210612): Use AppSlideOverPanel -->
    <!-- CD (CT on 20210612): Use EventView for as slider content -->
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="resetSliderData"
      :title="''"
    >
      <DashboardAdminCmsEventsView
      v-if="actionIs('view', 'update')" 
      :action="action" 
      :event="events.selected" 
      @deleteEvent="deleteOneEvent"
      @submit:update="updateEvent"
      @submit:create="addEvent"
      :titles="titles"
      />
      <DashboardAdminCmsEventsAdd
        v-if="actionIs('add')"
        :event="events.selected"
        @submit:create="addEvent"
        @submit:update="updateEvent"
        :titles="titles"
      />
    </UiAppSlideOverPanel>
    <!-- CD (CT on 20210612): Use AppTable -->
    <UiAppTable :headers="headings" title="Events">
      <template #toolbar>
        <UiAppButton
          className="primary"
          label="Add Event"
          @click="showAddEvent"
        />
      </template>
      <!-- CD (CT on 20210612): Body of the table  -->
      <tbody>
        <template>
          <tr v-if="$fetchState.pending">
            <td :colspan="headings.length" class="text-center">Loading ... </td>
          </tr>
        </template>
        <!-- CD (CT on 20210612): Start table row -->
        <template v-for="event in pagination.items">
          <tr class="trClass" :key="event._id">
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ event.name }}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ event.startDate | formatDate }}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ event.endDate | formatDate }}
            </td>
            <!--<td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ event.description }}
            </td>-->
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ event.location }}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              <!-- CD (CT on 20210617): Updated icons and order -->
              <!-- @click here is inconsistent with codes on forms. Should be ShowSliderView instead of viewEvent(data) -->
              <UiAppButton className="icon-tables" @click="viewEvent(event)"
                ><UiIconView />
              </UiAppButton>
            </td>
          </tr>
        </template>
        <!-- CD (CT on 20210612): END table row-->
      </tbody>
      <template #pagination>
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
      </template>
    </UiAppTable>
  </div>
</template>

<script>
import {
  INSERT_ONE_EVENT,
  FETCH_ALL_EVENT,
  UPDATE_ONE_EVENT,
  DELETE_ONE_EVENT
} from "~/graphql/dashboard/admin/event";
import algoliasearch from "algoliasearch";
import paginationMixin from "~/mixins/pagination";
import notificationMixin from "~/mixins/notification";
import sliderMixin from "~/mixins/slider";
export default {
  async fetch() {
    const {
      data: { events }
    } = await this.$apollo.query({ query: FETCH_ALL_EVENT });
    this.events.all = events;
    this.titles = events.map(event => event.name.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
  },
  mixins: [paginationMixin, notificationMixin, sliderMixin],
  async mounted(){
    this.algolia.client = await algoliasearch(
          process.env.ALGOLIA_APP_ID,
          process.env.ALGOLIA_API_KEY
        )
  },
  data() {
    return {
      algolia: {
        client: algoliasearch(
          process.env.ALGOLIA_APP_ID,
          process.env.ALGOLIA_API_KEY
        )
      },
      modal: false,
      events: {
        all: [],
        selected: null
      },
      action: "",
      modal: false,
      titles: [],
      /* CD (CT on 20210616): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Name",
        "Start Date",
        "End Date",
        /*"Description",*/
        "Location",
        "Actions"
      ]
    };
  },
  methods: {
    actionIs(...action) {
      return action.includes(this.action);
    },
    async deleteOneEvent() {
      await this.$apollo.mutate({
        mutation: DELETE_ONE_EVENT,
        variables: {
          query: { _id: this.events.selected._id }
        }
      });
      await this.algolia.client
      .initIndex("events-mongodb")
      .deleteObjects([this.events.selected._id])
      const index = this.events.all.indexOf(this.events.selected);
      this.events.all.splice(index, 1);
      this.titles = this.events.all.map(item =>  item.name.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.modal = false;
      this.events.selected = null;
      this.action = "";
      this.setNotification({
        show: true,
        title: "Success",
        content: "Deleted"
      });
      this.resetSliderData();
    },
    closeModal() {
      this.modal = false;
      this.events.selected = null;
      this.action = "";
    },
    resetSliderData() {
      this.resetSlider();
      this.action = "";
      this.events.selected = null;
    },
    showAddEvent() {
      this.setSlider({
        show: true,
        title: "Add Event"
      });
      this.action = "add";
    },
    showUpdateEvent(event) {
      this.events.selected = event;
      this.setSlider({
        show: true,
        title: "Update Event"
      });
      this.action = "update";
    },
    async addEvent(data) {
      console.log("adding event")
      const image = await this.uploadThumbnail(data.image);
        const {
          data: { insertedEvent }
        } = await this.$apollo.mutate({
          mutation: INSERT_ONE_EVENT,
          variables: { data: { ...data, image } }
        });
        await this.algolia.client
        .initIndex("events-mongodb")
        .saveObject(
          { ...data, image, objectID: insertedEvent ._id },
          { autoGenerateObjectIDIfNotExist: true }
        );
      // CD (JE on 20210615): push the new data to first index of the array
      this.events.all.unshift({ ...data, _id: insertedEvent._id, image });
      this.titles = this.events.all.map(item =>  item.name.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.setNotification({
        show: true,
        title: "Success",
        content: "Saved"
      });
      this.$fetch()
      this.resetSliderData();
    },
    async updateEvent(data) {
      const image =
        data.image !== this.events.selected.image
          ? await this.uploadThumbnail(data.image)
          : data.image;
      const {
        data: { updatedEvent }
      } = await this.$apollo.mutate({
        mutation: UPDATE_ONE_EVENT,
        variables: {
          query: { _id: this.events.selected._id },
          set: { ...data, image }
        }
      });
        await this.algolia.client
        .initIndex("events-mongodb")
        .saveObject(
          { ...data, image, objectID: this.events.selected._id },
          { autoGenerateObjectIDIfNotExist: true }
        );
      const index = this.events.all.indexOf(this.events.selected);
      // update list
      this.events.all.splice(index, 1, { ...data, ...updatedEvent });
      this.titles = this.events.all.map(item =>  item.name.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.setNotification({
        show: true,
        title: "Update Successful",
        content: ""
      });
      this.$fetch()
      this.resetSliderData();
    },
    viewEvent(event) {
      this.events.selected = event;
      this.action = "view";
      this.setSlider({
        show: true,
        title: "View Event"
      });
    },
    async deleteEvent(event) {
      this.resetSliderData();
      this.events.selected = event;
      this.modal = true;
    },
    async uploadThumbnail(image) {
      const fd = new FormData();
      fd.append("thumbnail", image);
      const {
        data: { Location }
      } = await this.$axios.post("/api/v1/dashboard/cms/events/upload", fd);
      return Location;
    }
  },
  computed: {
    paginationItems() {
      return this.events.all;
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString()
    }
  }
};
</script>
