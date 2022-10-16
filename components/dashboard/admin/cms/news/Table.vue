<template>
  <div>
    <UiAppModal
      v-if="news.selected"
      :show="modal"
      @close="closeModal"
      @confirm="deleteOneNews"
      :title="`Are you sure to delete ${news.selected.headline || 'N/A'}`"
      content="This action is irreversable"
    />
    <!-- CD (CT on 20210612): Use AppSlideOverPanel -->
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="resetSliderData"
      :title="''"
    >
      <!-- CD (CT on 20210612): Use NewsView for as slider content -->
      <DashboardAdminCmsNewsView
        v-if="actionIs('view', 'update')"
        :news="news.selected"
        :titles="titles"
        :is-edit="true"
        @submit:delete="deleteNews(news.selected)"
        @submit:update="submitNews"
      />
      <DashboardAdminCmsNewsAdd
        v-if="actionIs('add')"
        :titles="titles"
        @submit:create="submitNews"
      />
    </UiAppSlideOverPanel>
    <!-- CD (CT on 20210612): Use AppTable -->
    <UiAppTable :headers="headings" title="News">
      <template #toolbar>
        <UiAppButton
          className="primary"
          label="Add News"
          @click="showAddNews"
        />
      </template>
      <!-- CD (CT on 20210612): Body of the table  -->
      <tbody>
        <template v-if="$fetchState.pending">
          <tr>
            <td :colspan="headings.length">Loading ...</td>
          </tr>
        </template>
        <!-- CD (CT on 20210612): Start table row -->
        <template v-for="data in pagination.items">
          <tr class="trClass" :key="`news-${data._id}`">
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              <!-- CD (CT on 20210612): Use AppBadge for the status-->
              <UiAppBadge
                :className="statusColor(data.status)"
                :label="data.status"
              />
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ data.datePublished }}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ data.headline }}
            </td>
            <!--
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ data.author }}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ data.preview }}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{ data.url }}
            </td>
            -->
            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              <!-- CD (CT on 20210609): Updated icons and order -->
              <!-- @click here is inconsistent with codes on forms. Should be ShowSliderView instead of viewNews(data) -->
              <UiAppButton className="icon-tables" @click="viewNews(data)"
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
import algoliasearch from "algoliasearch";
import {
  INSERT_ONE_NEWS,
  FETCH_ALL_NEWS,
  UPDATE_ONE_NEWS,
  DELETE_ONE_NEWS
} from "~/graphql/dashboard/admin/news";
import paginationMixin from "~/mixins/pagination";
import notificationMixin from "~/mixins/notification";
import sliderMixin from "~/mixins/slider";
export default {
  async fetch() {
    const {
      data: { news }
    } = await this.$apollo.query({ query: FETCH_ALL_NEWS });
    this.news.all = news;
    this.titles = news.map(news2 => news2.headline.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
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
        client: null
      },
      titles: [],
      modal: false,
      news: {
        all: [],
        selected: null
      },
      action: "",
      modal: false,
      /* CD (CT on 20210616): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Status",
        "Published Date",
        "Headline",
        /* "Author", */
        /* "Preview", */
        /* "URL", */
        "Actions"
      ]
    };
  },
  methods: {
    actionIs(...actions) {
      return actions.includes(this.action);
    },
    async deleteOneNews() {
      await this.$apollo.mutate({
        mutation: DELETE_ONE_NEWS,
        variables: {
          query: { _id: this.news.selected._id }
        }
      });
      await this.algolia.client
      .initIndex("news-mongodb")
      .deleteObjects([this.news.selected._id])
      const index = this.news.all.indexOf(this.news.selected);
      this.news.all.splice(index, 1);
      this.titles = this.news.all.map(item =>  item.headline.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.modal = false;
      this.news.selected = null;
      this.action = "";
      this.setNotification({
        show: true,
        title: "Success",
        content: "Deleted"
      });
    },
    closeModal() {
      this.modal = false;
      this.news.selected = null;
      this.action = "";
    },
    resetSliderData() {
      this.resetSlider();
      this.news.selected = null;
      this.action = "";
    },
    showAddNews() {
      this.setSlider({
        show: true,
        title: "Add News"
      });
      this.action = "add";
    },
    showUpdateNews(news) {
      this.news.selected = news;
      this.setSlider({
        show: true,
        title: "Update News"
      });
      this.action = "update";
    },
    async submitNews(data) {
      let image = data.image;
      const slug =
        data.headline
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
      if (this.action === "add") {
        image = await this.uploadThumbnail(data.image);
      } else if (this.action === "view" && this.news.selected.image != data.image) {
        console.log("new image")
        image = await this.uploadThumbnail(data.image);
      }
      if (this.action === "add") {
        await this.addNews({ ...data, image, slug });
      } else {
        console.log("updating news")
        await this.updateNews({ ...data, image, slug });
      }
    },
    async addNews(data) {
      const {
        data: { insertOneNews }
      } = await this.$apollo.mutate({
        mutation: INSERT_ONE_NEWS,
        variables: { data }
      });

      await this.algolia.client
      .initIndex("news-mongodb")
      .saveObject(
        { ...data, objectID: insertOneNews._id },
        { autoGenerateObjectIDIfNotExist: true }
      );

      // CD (JE on 20210615): push the new data to first index of the array
      this.news.all.unshift({ ...data, _id: insertOneNews._id });
      this.titles = this.news.all.map(item =>  item.headline.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.setNotification({
        show: true,
        title: "Success",
        content: "Saved"
      });
      this.$fetch()
      setTimeout(() => {
          this.resetSliderData();
      }, 1000);
    },
    async updateNews(data) {
      const {
        data: { updatedNews }
      } = await this.$apollo.mutate({
        mutation: UPDATE_ONE_NEWS,
        variables: { query: { _id: this.news.selected._id }, set: data }
      });
      await this.algolia.client
      .initIndex("news-mongodb")
      .saveObject(
        { ...data, objectID: this.news.selected._id },
        { autoGenerateObjectIDIfNotExist: true }
      );
      const index = this.news.all.indexOf(this.news.selected);
      const { _id } = this.news.selected;
      // update list
      this.$set(this.news.all, index, { ...data, ...updatedNews })
      this.titles = this.news.all.map(item =>  item.headline.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.setNotification({
        show: true,
        title: "Update Successful",
        content: ""
      });
      this.$fetch()
      setTimeout(() => {
          this.resetSliderData();
      }, 1000);
    },
    viewNews(news) {
      this.news.selected = news;
      this.setSlider({
        show: true,
        title: "View News"
      });
      this.action = "view";
    },
    async deleteNews(news) {
      this.resetSliderData();
      this.news.selected = news;
      this.modal = true;
    },
    async uploadThumbnail(image) {
      const fd = new FormData();
      fd.append("thumbnail", image);
      const {
        data: { Location }
      } = await this.$axios.post("/api/v1/dashboard/cms/news/upload", fd);
      return Location;
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      return status === "Unpublished" ? "red" : "green";
    }
  },
  computed: {
    paginationItems() {
      return this.news.all;
    }
  }
};
</script>
