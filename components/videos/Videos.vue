<template>
  <!-- Keep the fields blank if no value -->
  <div class="relative overflow-hidden bg-white">
    <script src="https://unpkg.com/hls.js/dist/hls.min.js"></script>
    <p v-if="$fetchState.pending">Loading Video ...</p>
    <template v-else>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <h1>
            <span class="block text-center">
              {{video.title}}
            </span>
          </h1>
        </div>
        <div class="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
          <div v-if="video.provider === 'upload'">
            <video controls height="300px" width="100%" id="cover-video"></video>
            <script>
                var hls = new Hls();
                hls.loadSource('{{video.streamHls}}');
                hls.attachMedia(document.getElementById("cover-video"));
            </script>
          </div>
          <div v-else>
            <iframe width="100%" height="300px" :src="video.videoEmbedId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p>{{video.description}}</p>
        </div>
        <div class="mt-5 text-center">
          <UiAppBadge class="mx-1 my-1" v-for="tag in video.tags" :key="tag.id" :className="'grey-border'" :label="tag.title" :tag="tag"/>
        </div>
      </div>
    </template>
  </div>

</template>

<script>
import { FETCH_ONE_VIDEOS } from "~/graphql/dashboard/admin/cms/videos";
import breadcrumbMixin from "~/mixins/breadcrumb";

export default {
  mixins: [breadcrumbMixin],
  data(){
    return {
        video: {},
        role: null
    }
  },
  async fetch(){
    const {
    data: { videos }
    } = await this.$apollo.query({
    query: FETCH_ONE_VIDEOS,
    variables: { query: { slug: this.$route.params.slug } }
    });
    this.video = videos[0]
    this.setBreadcrumb(this.video.title)
  }
}
</script>