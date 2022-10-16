<template>
  <div>
    <script src="https://unpkg.com/hls.js/dist/hls.min.js"></script>
    <VideosYoutubePlayerModal
      v-if="youtubePlayer"
      :show="youtubePlayer"
      :video="selectedVideo"
      @close="youtubePlayer = false"
    />
    <VideosVideoPlayerModal
      v-if="uploadPlayer"
      :show="uploadPlayer"
      :video="selectedVideo"
      @close="uploadPlayer = false"
    />
    <div class="text-center">
      <h1>
        Videos
      </h1>
      <!--<p class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
        libero labore natus atque, ducimus sed.
      </p>-->
    </div>
    <div class="grid gap-5 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
      <UiAppCardPortraitVideos
        v-for="video in videos"
        :key="video._id"
        :type="{ whole: false, line: true }"
        :title="video.title"
        :tags="video.tags"
        :to="'/videos/' + video.slug"
        :image="video.provider == 'youtube' ? video.youtubeThumbnail : video.streamCustomThumbnail ? video.streamCustomThumbnail : video.streamThumbnail"
        imgAlt="Hand Tools"
        :content="video.description"
        :play="true"
        @open="playVideo(video)"
      >
        <template v-slot:footer>
            <div class="flex justify-end p-2">
              <UiAppButton className="icon" >
                <UiIconArrowPointingToRight />
              </UiAppButton>
            </div>
          </template>
      </UiAppCardPortraitVideos>      
    </div>
  </div>
</template>


<script>
import {
  FETCH_ALL_VIDEOS,
} from "~/graphql/dashboard/admin/cms/videos";

export default {

  data(){
    return{
      videos: [],
      youtubePlayer: false,
      uploadPlayer: false,
      videoId: "",
      selectedVideo: {},
    }
  },

  async mounted() {
    const {
      data: { videos }
    } = await this.$apollo.query({ query: FETCH_ALL_VIDEOS });
    this.videos = videos;
  },

  methods: {
    playVideo(video){
      console.log("playvideo")
      if(video.provider == 'upload'){
        this.uploadPlayer = true
        this.selectedVideo = video
      } else {
        this.selectedVideo = video
        this.youtubePlayer = true
      }
    }
  }
}
</script>

<style>
.m-auto{
  margin: auto;
}
</style>
