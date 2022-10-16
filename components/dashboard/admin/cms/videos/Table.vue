<template>
  <div>
    <!-- CD (CT on 20210612): Use AppNotification -->
    <!-- <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="hideNotification"
    /> -->
    <!-- CD (CT on 20210612): Use AppSlideOverPanel -->
    <!-- CD (CT on 20210612): Use NewsView for as slider content -->
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="resetSliderData"
      :title="''"
    >
      <!-- CD (CT on 20210612): Use NewsView for as slider content -->
      <DashboardAdminCmsVideosView
        @deleteVideo="deleteOneVideos()"
        @submit="submitVideos"
        :videos="videos.selected"
        :titles="titles"
        v-if="action === 'view' || action === 'update'"
      />
      <DashboardAdminCmsVideosAdd
        @submit="submitVideos"
        @deleteVideo="deleteOneVideos()"
        :action="action"
        :videos="videos.selected"
        :titles="titles"
        v-else
      />
    </UiAppSlideOverPanel>

    <!-- CD (CT on 20210614): Use AppTable -->
    <UiAppTable :headers="headings" title="Videos">

    <!-- CD (AN on 20210622): Add Video Button -->
      <template #toolbar>
        <UiAppButton
          className="primary"
          label="Add Video"
          @click="showAddVideos"
        />
      </template>

      <!-- CD (CT on 20210614): Body of the table  -->
      <tbody>
        <template v-if="$fetchState.pending">
          <tr>
            <td :colspan="headings.length">Loading ...</td>
          </tr>
        </template>
        <!-- CD (CT on 20210614): Render table row -->
        <template v-for="data in pagination.items">
          <tr class="trClass" :key="data.id">
            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              <!-- title field here -->
                {{ data.title }}
            </td>
            <!--<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap truncate ...">
                {{ data.description }}
            </td>-->
            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              <!-- Video Source
              IF uploaded (videoUpload has value, videoEmbedCode is blank), then show a label with "CDN". Use <UiAppBadge class=grey-border">
              IF embeded (videoUpload is blank, videoEmbedCode has value), then show a label called "3rd Party"  Use <UiAppBadge class=grey-border">
              -->
              <UiAppBadge
                :className="providerColor(data.provider)"
                :label="data.provider"
              />
            </td>
            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              <span class="px-1" v-for="tag in data.tags" :key="tag.id">{{tag.title}};</span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              <!-- tags field here -->
              <UiAppButton className="icon-tables" @click="showUpdateVideos(data)"
                ><UiIconView />
              </UiAppButton>
            </td>
            <!-- <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                <UiAppButton className="icon-tables">
                  <UiIconView />
                </UiAppButton>
            </td> -->
          </tr>
        <!-- CD (CT on 20210614): Render table row  END-->
          </template>
      </tbody>
      <!-- CD (CT on 20210614): This area for pagination -->
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
  INSERT_ONE_VIDEO,
  FETCH_ALL_VIDEOS,
  UPDATE_ONE_VIDEOS,
  DELETE_ONE_VIDEOS
} from "~/graphql/dashboard/admin/cms/videos";
import paginationMixin from '~/mixins/pagination'
import notificationMixin from "~/mixins/notification";
import sliderMixin from "~/mixins/slider";
const APP_URL = process.env.APP_URL

export default {
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
      /* CD (CT on 2021): Header of the table */

      modal: false,
      videos: {
        all: [],
        selected: null
      },
      titles: [],
      action: "",

      headings: [
        "Title",
        /*"Description",*/
        "Video Source",
        "Tags",
        "Actions"
      ]
    };
  },

  async fetch() {
    const {
      data: { videos }
    } = await this.$apollo.query({ query: FETCH_ALL_VIDEOS });
    this.videos.all = videos;
    this.titles = videos.map(video => video.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
  },

  methods: {
    async deleteOneVideos() {
      console.log(this.videos)
      await this.$apollo.mutate({
        mutation: DELETE_ONE_VIDEOS,
        variables: {
          query: { _id: this.videos.selected._id }
        }
      });
      await this.algolia.client
      .initIndex("videos-mongodb")
      .deleteObjects([this.videos.selected._id])
      const index = this.videos.all.indexOf(this.videos.selected);
      this.videos.all.splice(index, 1);
      this.titles = this.videos.all.map(item =>  item.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.modal = false;
      this.videos.selected = null;
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
      this.videos.selected = null;
      this.action = "";
    },
    resetSliderData() {
      this.resetSlider();
      this.action = "";
      this.videos.selected = null;
    },
    showAddVideos() {
      this.setSlider({
        show: true,
        title: "Videos"
      });
      this.action = "add";
    },
    showUpdateVideos(video) {
      this.videos.selected = video;
      this.setSlider({
        show: true,
        title: ""
      });
      this.action = "update";
    },
    async submitVideos(data) {

      if(data.provider == 'upload' && data.videoUpload){
        this.$store.commit('notification/set', {
            show: true,
            title: "Sit tight",
            content: "Your video is uploading, this might take a while."
        })
      }
      const streamData = data.videoUpload ? await this.uploadVideo(data.videoUpload) : {}
      const streamCustomThumbnail = data.thumbnailUpload ? await this.uploadThumbnail(data.thumbnailUpload) : ""
      const youtubeThumbnail = data.thumbnailYoutube ? await this.uploadThumbnail(data.thumbnailYoutube) 
                                : data.provider === 'youtube' ? `https://img.youtube.com/vi/${data.videoEmbedId.split('/')[4]}/0.jpg` : ""

      const curatedData = {
        ...streamData,
        youtubeThumbnail: youtubeThumbnail ? youtubeThumbnail : data.youtubeThumbnail,
        title: data.title,
        uploadName: data.uploadName,
        slug: data.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''),
        description: data.description,
        provider: data.provider,
        videoEmbedId: data.videoEmbedId,
        tags: data.tags,
        thumbnail: data.thumbnail,
        createdAt: data.createdAt,
        updatedAt: new Date().toLocaleString(),
        createdBy: data.createdBy,
        updatedBy: data.updatedBy,
        }

        if(data.thumbnailUpload){
          curatedData.streamCustomThumbnail = streamCustomThumbnail
        }

      if (this.action === "add") {
        await this.addVideo(curatedData);
      } else {
        await this.updateVideo(curatedData);
      }

      this.$store.commit('notification/set', {
          show: true,
          title: "Success",
          content: "Your video has been saved."
      })
    },
    async addVideo(data) {
      const {
        data: { insertOneVideo }
      } = await this.$apollo.mutate({
        mutation: INSERT_ONE_VIDEO,
        variables: { data }
      });
      
      await this.algolia.client
      .initIndex("videos-mongodb")
      .saveObject(
        { ...data, objectID: insertOneVideo._id },
        { autoGenerateObjectIDIfNotExist: true }
      );
      
      // CD (JE on 20210615): push the new data to first index of the array
      this.videos.all.unshift({ ...data, _id: insertOneVideo._id, tags: insertOneVideo.tags  });
      this.titles = this.videos.all.map(item =>  item.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.resetSliderData();
    },
    async updateVideo(data) {
      
        const {
        data: { updatedVideos }
        } = await this.$apollo.mutate({
        mutation: UPDATE_ONE_VIDEOS,
        variables: { query: { _id: this.videos.selected._id }, set: data }
      });
      await this.algolia.client
      .initIndex("videos-mongodb")
      .saveObject(
        { ...data, objectID: this.videos.selected._id },
        { autoGenerateObjectIDIfNotExist: true }
      );
      const index = this.videos.all.indexOf(this.videos.selected);
      // update list
      this.videos.all.splice(index, 1, updatedVideos);
      this.titles = this.videos.all.map(item =>  item.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''))
      this.setNotification({
        show: true,
        title: "Update Successful",
        content: ""
      });
      this.resetSliderData();
    },
    viewVideos(videos) {
      this.videos.selected = videos;
      this.setSlider({
        show: true,
        title: "View Videos"
      });
      this.action = "view";
    },
    uploadVideo(video) {
    return new Promise((resolve, reject) => {
        const fd = new FormData();
        fd.append("video", video);
          console.log("streaming data")
          this.$axios.post("api/v1/dashboard/cms/videos/upload-video", fd)
          .then(response => {
            console.log("streamed data", response.data)
            resolve(response.data);
          })
          .catch(error => {
            this.setNotification({
              show: true,
              title: "Error",
              content: "There was an error uploading the video"
            });
            console.log("error uploading the video")
            reject(error)
          })
    })
    },
    async uploadThumbnail(image) {
      console.log("uploading thumbnail")
      const fd = new FormData();
      fd.append("thumbnail", image);
      const {
        data: { Location }
      } = await this.$axios.post("api/v1/dashboard/cms/videos/upload-thumbnail", fd);
      return Location;
    },
    providerColor(provider) {
      /* CD (EV on 20210329): Update color of provider column (Using AppBadge)*/
      return provider === "youtube" ? "red" : "green";
    }
  },
  computed: {
    paginationItems() {
      return this.videos.all;
    }
  }
  }

</script>
