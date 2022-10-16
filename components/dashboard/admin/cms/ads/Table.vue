<template>
  <div>
    <UiAppModal
      v-if="modal"
      :show="modal"
      @close="closeModal"
      @confirm="deleteOneAd"
      :title="`Are you sure to delete ${ads.selected.title || ''} ?`"
      content="This action is irreversable"
    />
    <!-- CD (CT on 20210612): Use AppSlideOverPanel -->
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="resetSliderData"
      :title="''"
    >
      <DashboardAdminCmsAdsView 
      v-if="action !== 'add'" 
      @deleteAd="deleteOneAd" 
      @submit:update="updateAd" 
      :ads="ads.selected"
      :titles="titles"/>

      <DashboardAdminCmsAdsAdd 
      @submit:create="addAd"
      :titles="titles"
      v-else />
    </UiAppSlideOverPanel>
    <!-- CD (EV on 20210302): Use AppTable -->
    <UiAppTable :headers="headings" title="Advertisements">
      <template #toolbar>
        <UiAppButton
          className="primary"
          label="Add Advertisement"
          @click="showAddAd"
        />
      </template>
      <!-- CD (EV on 20210302): Body of the table  -->
      <tbody>
        <template>
          <tr v-if="$fetchState.pending">
            <td :colspan="headings.length" class="text-center">Loading ... </td>
          </tr>
        </template>
        <!-- CD (EV on 20210302): Render table row -->
        <tr
          class="trClass"
          v-for="(ad) in pagination.items"
          :key="ad._id"
        >
          <td class="tdClass">
            {{ad.title}}
          </td>
          <td class="tdClass">
            {{ad.description}}
          </td>
          <!--<td class="tdClass">
            <p v-if="ad.isActive">{{ad.isActive.startDate|formatDate}}</p> 
          </td>
          <td class="tdClass">
          <p v-if="ad.isActive">{{ad.isActive.endDate|formatDate}}</p>
          </td>-->
          <td class="tdClass">
            <!-- CD (CT on 20210617): Updated icons and order -->
            <!-- @click here is inconsistent with codes on forms. Should be ShowSliderView instead of viewNews(data) -->

              <UiAppButton className="icon-tables" @click="showViewAd(ad)"
                ><UiIconView />
              </UiAppButton>
              <!--<UiAppButton
                className="icon-tables"
                @click="showUpdateAd(ad)"
                ><UiIconEdit />
              </UiAppButton>-->
          </td>
        </tr>
        <!-- CD (EV on 20210302): Render table row  END-->
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
import algoliasearch from "algoliasearch";
import {
  INSERT_ONE_AD,
  FETCH_ALL_AD,
  UPDATE_ONE_AD,
  DELETE_ONE_AD
} from "~/graphql/dashboard/admin/ad";
import paginationMixin from "~/mixins/pagination";
import notificationMixin from "~/mixins/notification";
import sliderMixin from "~/mixins/slider";
export default {
  async fetch() {
    const {
      data: { ads }
    } = await this.$apollo.query({ query: FETCH_ALL_AD });
    this.ads.all = ads;
    this.titles = ads.map(ad =>  ad.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
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
      titles: null,
      modal: false,
      ads: {
        all: [],
        selected: null
      },
      action: "",
      modal: false,
      /* CD (CT on 20210616): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Name",
        "Description",
        //"Start Date",
        //"End Date",
        "Actions"
      ]
    };
  },
  methods: {
    actionIs(...action) {
      return action.includes(this.action);
    },
    async deleteOneAd() {
      await this.$apollo.mutate({
        mutation: DELETE_ONE_AD,
        variables: {
          query: { _id: this.ads.selected._id }
        }
      });
      await this.algolia.client
      .initIndex("ads-mongodb")
      .deleteObjects([this.ads.selected._id])
      const index = this.ads.all.indexOf(this.ads.selected);
      this.ads.all.splice(index, 1);
      this.titles = this.ads.all.map(ad =>  ad.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.modal = false;
      this.ads.selected = null;
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
      this.ads.selected = null;
      this.action = "";
    },
    resetSliderData() {
      this.resetSlider();
      this.action = "";
      this.ads.selected = null;
    },
    showAddAd() {
      this.setSlider({
        show: true,
        title: "Add Advertisements"
      });
      this.action = "add";
    },
    showUpdateAd(ad) {
      this.ads.selected = ad
      this.setSlider({
        show: true,
        title: "Edit Advertisment"
      });
      this.action = "update";
    },
    showViewAd(ad) {
      this.ads.selected = ad;
      this.action = "view";
      this.setSlider({
        show: true,
        title: "View Ad"
      });
    },
    async addAd(data) {
      const image = await this.uploadThumbnail(data.image);
      const {
        data: { insertedAd }
      } = await this.$apollo.mutate({
        mutation: INSERT_ONE_AD,
        variables: { data: { ...data, image } }
      });

      await this.algolia.client
      .initIndex("ads-mongodb")
      .saveObject(
        { ...data, image, objectID: insertedAd._id },
        { autoGenerateObjectIDIfNotExist: true }
      );
      // CD (JE on 20210615): push the new data to first index of the array
      this.ads.all.unshift({ ...data, _id: insertedAd._id, image });
      this.titles = this.ads.all.map(ad =>  ad.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.setNotification({
        show: true,
        title: "Success",
        content: "Saved"
      });
      this.$fetch()
      this.resetSliderData();
    },
    async updateAd(data) {
      const image =
        data.image !== this.ads.selected.image
          ? await this.uploadThumbnail(data.image)
          : data.image;
      const {
        data: { updatedAd }
      } = await this.$apollo.mutate({
        mutation: UPDATE_ONE_AD,
        variables: {
          query: { _id: this.ads.selected._id },
          set: { ...data, image }
        }
      });
      await this.algolia.client
      .initIndex("ads-mongodb")
      .saveObject(
        { ...data, image, objectID: this.ads.selected._id },
        { autoGenerateObjectIDIfNotExist: true }
      );
      const index = this.ads.all.indexOf(this.ads.selected);
      // update list
      this.ads.all.splice(index, 1, { ...data, ...updatedAd });
      this.titles = this.ads.all.map(ad =>  ad.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.setNotification({
        show: true,
        title: "Update Successful",
        content: ""
      });
      this.$fetch()
      this.resetSliderData();
    },

    async deleteAd(event) {
      this.resetSliderData();
      this.ads.selected = event;
      this.modal = true;
    },
    async uploadThumbnail(image) {
      const fd = new FormData();
      fd.append("thumbnail", image);
      const {
        data: { Location }
      } = await this.$axios.post("/api/v1/dashboard/cms/ads/upload", fd);
      return Location;
    }
  },
  computed: {
    paginationItems() {
      return this.ads.all;
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString()
    }
  }
};
</script>
