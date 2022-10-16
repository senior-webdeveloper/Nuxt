<template>
  <!-- CD (CT on 20211021): If there is no video, then hide this whole section -->
  <div>

    <!-- Stream HLS player -->
    <script src="https://unpkg.com/hls.js/dist/hls.min.js"></script>
    <div class="flex flex-col-reverse max-w-5xl py-16 mx-auto">
        <!-- CD (CT on 20211021): Video selector using glide.js. Data will come from the videos collection in mongodb. Fetch the video thumbnails to show here. Only those tagged with the page's name will appear here. -->
        <div class="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
            <vue-glide :per-view="5" type="slider" :bound="true" class="block bg-grey">
              
              <vue-glide-slide v-for="video, i in videos" :key="i" >
                <button @click="setCurrentVideo(video)" id="tabs-1-tab-1" class="relative flex items-center justify-center h-24 m-2 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-1-panel-1" role="tab" type="button">
                    <img :src="video.youtubeThumbnail || video.streamThumbnail || video.streamCustomThumbnail" :alt="video.title" class="object-cover object-center w-full h-full">
                </button>
                <h3 class="m-2">{{video.title}}</h3>
              </vue-glide-slide>

              <template slot="control" v-if="videos.length > 5">
                <button data-glide-dir="<" v-text="'<'"></button>
                <button data-glide-dir=">" v-text="'>'"></button>
              </template>

            </vue-glide>
        </div>

        <!-- Main video section --> 
        <div class="w-full">
          <div class="aspect-w-16 aspect-h-9">
            <client-only>
              <div v-if="current_video.provider === 'youtube'" :key="current_video._id" class="justify-center" id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                <iframe width="100%" height="100%" :src="current_video.videoEmbedId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div v-if="current_video.provider === 'upload'" :key="current_video._id" class="video-container">
                <video controls class="video" width="100%" height="100%" id="cover-video" :poster="current_video.uploadThumbnail"></video>
                <script>
                    var hls = new Hls();
                    hls.loadSource('{{current_video.streamHls}}');
                    hls.attachMedia(document.getElementById("cover-video"));
                </script>
              </div>
            </client-only>
          </div>
        </div>
        <h2>{{current_video.title}}</h2>
      </div>

  </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import "vue-glide-js/dist/vue-glide.css";

export default {
  props: ["videos"],
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      current_video: null,
    }
  },
  created(){
    this.current_video = this.videos[0]
  },
  methods: {
    setCurrentVideo(video){
      this.current_video = video
    }
  }
}
</script>

<style>
.glide__bullet {
    height: 16px;
    width: 16px;
    background-color: lightgrey;
    border-radius: 100%;
    cursor: pointer;
    margin-right: 8px;
}
.glide__bullet--active {
  background: linear-gradient(270deg, lightgrey, darkgrey);
  background-size: 400% 400%;
  -webkit-animation: movegradient 1.5s ease infinite;
  -moz-animation: movegradient 1.5s ease infinite;
  animation: movegradient 1.5s ease infinite;
}
.glide__bullets{
    text-align: center;
    margin-top: 20px;
}
div[data-glide-el=controls] {
  position: absolute;
  left: 0;
  right: 0;
  top: 35px;
}
button[data-glide-dir="<"], button[data-glide-dir=">"] {
  position: absolute;
  border: 0;
  outline: 0;
  padding: 10px;
  border-radius: 3px;
  background-color: #eee;
  opacity: .6;
  color: #000;
  cursor: pointer;
}

button[data-glide-dir=">"] {
  right: 5px;
}

button[data-glide-dir="<"] {
  left: 5px;
}
</style>
