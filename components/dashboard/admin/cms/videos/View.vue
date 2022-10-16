<template>
<!-- CD (CT on 20210614) - This component functions both as the view and edit form -->
  <div>
    <!-- CD (CT on 20210614) - Use AppModal below to confirm deletion -->
    <UiAppModal
      :show="deleteConfirmation"
      :title="'Are you sure you want to delete this video?'"
      :content="'The video will be deleted permanently.'"
      @confirm="$emit('deleteVideo')"
      @close="deleteConfirmation = false"
    />
    <div hidden>{{videoEmbedId}}</div>

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>View/Edit Video Details</h1>
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <form class="divide-y divide-gray-200" @submit.prevent="formSubmit">
                <div class="space-y-6">
        
                    <div>
                      <UiAppFormField type="text" label="Title *" :required="true" v-model="form.title" />
                      <p v-if="title_taken" class="text-xs text-red-500">Duplicate Error: There's another entry with the same title, please choose a different title then save your entry.</p>
                    </div>
                    <div>
                      <UiAppFormTextArea label="Description" :required="false"  v-model="form.description" />
                    </div>
                    <div>
                      <p class="block mb-2 text-sm font-medium text-blueGray-700">Tags</p>
                      <vue-tags-input
                        class="mb-5"
                        v-model="tags.tag"
                        :tags="tags.tags"
                        :autocomplete-items="filteredItems"
                        :add-only-from-autocomplete="true"
                        @tags-changed="newTags => (tags.tags = newTags)"
                      />
                    </div>
                    <div>
                      <UiAppFormSelect :options="providers" v-model="form.provider" label="Provider *" required @input="form.provider = $event"/>
                    </div>
                    <div v-show="form.provider == 'upload'">
                      <p class="block mb-2 text-sm font-medium text-blueGray-700">Upload Video *</p>
                      <input type="file" hidden ref="video" @change="changeVideo">
                      <div class="flex items-center">
                        <UiAppButton className="primary" label="Upload" @click="showVideoUploadDialog" accept="video/*"/>
                        <a :href="form.streamPreview">Watch Video</a>
                      </div>
                    </div>
                    <div v-show="form.provider == 'upload'">
                      <p class="block mb-2 text-sm font-medium text-blueGray-700">Upload Thumbnail (optional)</p>
                      <input type="file" hidden ref="thumbnailupload" id="thumbnail-upload" @change="changeUploadThumbnail">
                      <div class="flex items-center">
                        <UiAppButton className="primary" label="Upload" @click="showThumbnailUploadDialog" accept="image/*"/>
                        <p class="px-4" v-if="form.thumbnailUpload">{{form.thumbnailUpload ? form.thumbnailUpload.name : ""}}</p>
                        <p class="px-4" v-else>{{form.thumbnail}}</p>
                      </div>
                    </div>
                    <div v-show="form.provider == 'youtube'">
                      <UiAppFormTextArea label="Video Embed Code *" :required="false"  v-model="videoEmbedCode" />
                    </div>
                    <div v-show="form.provider == 'youtube'">
                      <p class="block mb-2 text-sm font-medium text-blueGray-700">Upload Thumbnail *</p>
                      <input type="file" hidden ref="youtubethumbnail" id="youtube-thumbnail" @change="changeYoutubeThumbnail">
                      <div class="flex items-center">
                        <UiAppButton className="primary" label="Upload" @click="showYoutubeThumbnailDialog" accept="image/*"/>
                        <p class="px-4" v-if="form.thumbnailYoutube">{{form.thumbnailYoutube ? form.thumbnailYoutube.name : ""}}</p>
                        <p class="px-4" v-else>{{form.thumbnail}}</p>
                        <svg v-if="form.thumbnailYoutube || form.thumbnail" @click="form.thumbnailYoutube = '', form.thumbnail = ''" style="width:24px;height:24px" viewBox="0 0 24 24" >
                          <path fill="grey" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
                        </svg>
                      </div>
                    </div>
         
                </div>
              </form>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Submission Details</h2>
            <div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <div class="space-y-6">
                  <!-- CD (CT on 20210614): form for submit button using AppForm. -->
                  <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                  <form @submit.prevent="formSubmit">

                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save"/>
                    </div>
                  </form>
                </div>
              </div>
              <div class="py-6 mt-8 space-y-5">
                <div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Submitted by {{form.createdBy}}</span>
                  <!-- CD (CT on 20210614) - Disregard this field for now -->
                </div>
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{form.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{form.createdAt | formatDate}}</time></span><!-- CD (CT on 20210614) - Connect this field -->
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{form.updatedAt | formatDate}}</time></span><!-- CD (CT on 20210614) - Connect this field -->
                </div>
              </div>
            </div>
            <div class="mt-6">
              <UiAppButton
                className="secondary-full"
                @click.prevent="deleteConfirmation = true"
                label="DELETE"
              />
            </div>

          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { FETCH_ALL_TAGS } from "~/graphql/dashboard/admin/cms/tags";

export default {
  props: ["videos", "action", "titles"],
  async fetch() {
    const tags = await this.$apollo.query({ query: FETCH_ALL_TAGS });
    this.tags.all = tags.data.tags
    this.autocompleteItems = tags.data.tags.map(x => {return {text: x.title}});
  },
  mounted() {
    this.form = this.videos ? {...this.videos} : this.form
    this.tags.tags = this.videos ? this.videos.tags.map(tag => {return {text: tag.title}}) : []
    if(this.form.videoEmbedId){
      this.videoEmbedCode = `<iframe width="642" height="361" src="${this.form.videoEmbedId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
  },
  data: () => ({
    form: {
      title: "",
      description: "",
      videoUpload: "",
      thumbnailUpload: "",
      thumbnailYoutube: "",
      provider: "",
      videoEmbedId: "",
      streamHls: "",
      streamDash: "",
      streamPreview: "",
      streamThumbnail: "",
      tags: "",
      createdAt: "",
      updatedAt: new Date().toLocaleString(),
    },
    tags: {
      tags: [],
      tag: "",
      all: [],
      ids: {
        link: [],
      },
    },
    autocompleteItems: [],
    deleteConfirmation: false,
    videoEmbedCode: "",
    providers: [
      {
        value: "upload",
        label: "Upload"
      }, 
      {
        label: "Youtube Embed Code",
        value: "youtube",
      },
    ],
    title_taken: false,
  }),
  methods: {
    changeVideo(e) {
      const file= e.target.files.item(0)
      this.form.videoUpload = file
    },
    changeUploadThumbnail(e) {
      const file= e.target.files.item(0)
      this.form.thumbnailUpload = file
      this.form.thumbnail = file.name
    },
    changeYoutubeThumbnail(e) {
      const file= e.target.files.item(0)
      this.form.thumbnailYoutube = file
      this.form.thumbnail = file.name
    },
    showVideoUploadDialog() {
      this.$refs.video.click()
    },
    showThumbnailUploadDialog() {
      this.$refs.thumbnailupload.click()
    },
    showYoutubeThumbnailDialog() {
      this.$refs.youtubethumbnail.click()
    },
    formSubmit() {
      if(!this.title_taken){
        //CD (AN on 20210622): Validation
        if(this.form.provider == 'youtube' &&  !this.videoEmbedCode && this.action == "add"){
            this.$store.commit('notification/set', {
                show: true,
                title: "Error",
                content: "Field 'Video Embed Code' is required."
            })
        } else if(this.form.provider == 'youtube' &&  !this.form.videoEmbedId && this.action == "add"){
              this.$store.commit('notification/set', {
                show: true,
                title: "Error",
                content: "Invalid format for 'Video Embed Code'."
            })
        } else if(this.form.provider == 'upload' &&  !this.form.videoUpload && !this.form.streamThumbnail){
              this.$store.commit('notification/set', {
                show: true,
                title: "Error",
                content: "Video file is required."
            })
        } else {
            //CD (AN on 20210622): Submit
            if (this.videos) {
              delete this.form._id
            }
            /* CD (AN on 20210715): Map tags from vue input tags to the correct format*/
            this.tags.tags.forEach(tag => {
              let actual_tag = this.tags.all.find(element => element.title == tag.text)
              this.tags.ids.link.unshift(actual_tag._id)
            })
            this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
            this.$emit("submit", { ...this.form, tags: this.tags.ids, "Type": "Video"});
        }
      }
    }
  },
  computed: {
    //CD (AN on 20210622): Compute Video URL From Youtube Embed Code
    videoEmbedId: function() {
      if(this.videoEmbedCode){
        var template = document.createElement('template');
        const html = this.videoEmbedCode.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        if(template.content.firstElementChild && template.content.firstElementChild.attributes["src"]){
          return this.form.videoEmbedId = template.content.firstElementChild.attributes["src"].value;
        } else {
          this.$store.commit('notification/set', {
              show: true,
              title: "Error",
              content: "Invalid format for 'Video Embed Code'."
          })
          return null
        }
      }
    }
  },
  watch: {
    "form.title": function (val) {
      if (this.titles.filter(title => title === val.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')).length && val !== this.videos.title){
        this.title_taken = true
      } else {
        this.title_taken = false
      }
    }
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tags.tag.toLowerCase()) !== -1;
      });
    },
  },
};
</script>
