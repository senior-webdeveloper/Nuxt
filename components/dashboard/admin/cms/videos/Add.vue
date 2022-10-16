<template>
  <div>
    <div class="max-w-3xl py-10 mx-auto sm:px-6 lg:px-0 lg:col-span-9">
      <div>
        <h1>Add new video</h1>
      </div>
      <form @submit.prevent="formSubmit">
        <div class="space-y-6">
          <!-- CD (AN on 20210622): For computed property to execute instantly  -->
          <div hidden>{{ videoEmbedId }}</div>
          <div>
            <UiAppFormField
              type="text"
              label="Title *"
              :required="true"
              v-model="form.title"
            />
            <p v-if="title_taken" class="text-xs text-red-500">
              Duplicate Error: There's another entry with the same title, please
              choose a different title then save your entry.
            </p>
          </div>
          <div>
            <UiAppFormTextArea
              label="Description"
              :required="false"
              v-model="form.description"
            />
          </div>
          <div>
            <p class="block mb-2 text-sm font-medium text-blueGray-700">Tags</p>
            <vue-tags-input
              class="mb-5"
              v-model="tags.tag"
              :tags="tags.tags"
              :autocomplete-items="filteredItems"
              :add-only-from-autocomplete="true"
              @tags-changed="(newTags) => (tags.tags = newTags)"
            />
          </div>
          <div>
            <p class="block mb-2 text-sm font-medium text-blueGray-700">Provider *</p>
            <UiAppFormSelect
              :options="providers"
              v-model="form.provider"
              required
              @input="form.provider = $event"
            />
          </div>
          <div v-show="form.provider == 'upload'">
            <p class="block mb-2 text-sm font-medium text-blueGray-700">Upload Video *</p>
            <input
              type="file"
              hidden
              ref="video"
              id="video-upload"
              @change="changeVideo"
            />
            <div class="flex items-center">
              <UiAppButton
                className="primary"
                label="Upload"
                @click="showVideoUploadDialog"
                accept="video/*"
              />
              <input
                type="file"
                hidden
                ref="video"
                id="video-upload"
                @change="changeVideo"
              />
              <p class="px-4">{{ form.videoUpload.name }}</p>
            </div>
          </div>
          <div v-show="form.provider == 'upload'">
            <p class="block mb-2 text-sm font-medium text-blueGray-700">
              Upload Thumbnail (optional)
            </p>
            <input
              type="file"
              hidden
              ref="thumbnailupload"
              id="thumbnail-upload"
              @change="changeUploadThumbnail"
            />
            <div class="flex items-center">
              <UiAppButton
                className="primary"
                label="Upload"
                @click="showThumbnailUploadDialog"
                accept="image/*"
              />
              <p class="px-4">
                {{ form.thumbnailUpload ? form.thumbnailUpload.name : form.thumbnail }}
              </p>
            </div>
          </div>
          <div v-show="form.provider == 'youtube'">
            <UiAppFormTextArea
              label="Video Embed Code *"
              :required="false"
              v-model="videoEmbedCode"
            />
          </div>
          <div v-show="form.provider == 'youtube'">
            <p class="block mb-2 text-sm font-medium text-blueGray-700">
              Upload Thumbnail (optional)
            </p>
            <input
              type="file"
              hidden
              ref="youtubethumbnail"
              id="youtube-thumbnail"
              @change="changeYoutubeThumbnail"
            />
            <div class="flex items-center">
              <UiAppButton
                className="primary"
                label="Upload"
                @click="showYoutubeThumbnailDialog"
                accept="image/*"
              />
              <p class="px-4">
                {{
                  form.thumbnailYoutube
                    ? form.thumbnailYoutube.name
                    : form.thumbnail
                }}
              </p>
              <svg v-if="form.thumbnailYoutube || form.thumbnail" @click="form.thumbnailYoutube = '', form.thumbnail = ''" style="width:24px;height:24px" viewBox="0 0 24 24" >
                <path fill="grey" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
              </svg>
            </div>
          </div>
          <div class="px-4 py-3 mt-10 text-right bg-gray-50 sm:px-6">
            <UiAppFormSubmit
              className="tertiary"
              label="Delete"
              @click.prevent="deleteConfirmation = true"
              v-if="action == 'update'"
            />
            <UiAppFormSubmit className="primary" label="Save" />
          </div>
        </div>
      </form>
      <UiAppModal
        :show="deleteConfirmation"
        :title="'Are you sure you want to delete this video?'"
        :content="'The video will be deleted permanently.'"
        @confirm="$emit('deleteVideo')"
        @close="deleteConfirmation = false"
      />
    </div>
  </div>
</template>

<script>
import { FETCH_ALL_TAGS } from "~/graphql/dashboard/admin/cms/tags";

export default {
  props: ["videos", "action", "titles"],
  async fetch() {
    const tags = await this.$apollo.query({ query: FETCH_ALL_TAGS });
    this.tags.all = tags.data.tags;
    this.autocompleteItems = tags.data.tags.map((x) => {
      return { text: x.title };
    });
  },
  mounted() {
    this.form = this.videos ? {...this.videos} : this.form
    this.form.createdBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
    this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
  },
  data: () => ({
    form: {
      title: "",
      description: "",
      videoUpload: "",
      thumbnailUpload: "",
      thumbnailYoutube: "",
      provider: "",
      thumbnail: "",
      videoEmbedId: "",
      streamHls: "",
      streamDash: "",
      streamPreview: "",
      streamThumbnail: "",
      createdAt: new Date().toLocaleString(),
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
        label: "Upload",
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
      const file = e.target.files.item(0);
      this.form.videoUpload = file;
      this.form.uploadName = file.name
    },
    changeUploadThumbnail(e) {
      const file = e.target.files.item(0);
      this.form.thumbnailUpload = file;
    },
    changeYoutubeThumbnail(e) {
      const file = e.target.files.item(0);
      this.form.thumbnailYoutube = file;
    },
    showVideoUploadDialog() {
      this.$refs.video.click();
    },
    showThumbnailUploadDialog() {
      this.$refs.thumbnailupload.click();
    },
    showYoutubeThumbnailDialog() {
      this.$refs.youtubethumbnail.click();
    },
    formSubmit() {
      if (!this.title_taken) {
        //CD (AN on 20210622): Validation
        if (
          this.form.provider == "youtube" &&
          !this.videoEmbedCode &&
          this.action == "add"
        ) {
          this.$store.commit("notification/set", {
            show: true,
            title: "Error",
            content: "Field 'Video Embed Code' is required.",
          });
        } else if (
          this.form.provider == "youtube" &&
          !this.form.videoEmbedId &&
          this.action == "add"
        ) {
          this.$store.commit("notification/set", {
            show: true,
            title: "Error",
            content: "Invalid format for 'Video Embed Code'.",
          });
        } else if (
          this.form.provider == "upload" &&
          !this.form.videoUpload &&
          !this.form.streamThumbnail
        ) {
          this.$store.commit("notification/set", {
            show: true,
            title: "Error",
            content: "Video file is required.",
          });
        } else {
          //CD (AN on 20210622): Submit
          if (this.videos) {
            delete this.form._id;
          }
          // Get tag id's
          this.tags.tags.forEach((tag) => {
            let actual_tag = this.tags.all.find(
              (element) => element.title == tag.text
            );
            this.tags.ids.link.unshift(actual_tag._id);
          });
          //Get thumbnail filename
          if (this.form.provider == "youtube" && this.form.thumbnailYoutube) {
            this.form.thumbnail = this.form.thumbnailYoutube.name;
          } else if (
            this.form.provider == "upload" &&
            this.form.thumbnailUpload
          ) {
            this.form.thumbnail = this.form.thumbnailUpload.name;
          }
          this.$emit("submit", {
            ...this.form,
            tags: this.tags.ids,
            Type: "Video",
          });
        }
      }
    },
  },
  computed: {
    //CD (AN on 20210622): Compute Video URL From Youtube Embed Code
    videoEmbedId: function () {
      if (this.videoEmbedCode) {
        var template = document.createElement("template");
        const html = this.videoEmbedCode.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        if (
          template.content.firstElementChild &&
          template.content.firstElementChild.attributes["src"]
        ) {
          return (this.form.videoEmbedId =
            template.content.firstElementChild.attributes["src"].value);
        } else {
          this.$store.commit("notification/set", {
            show: true,
            title: "Error",
            content: "Invalid format for 'Video Embed Code'.",
          });
          return null;
        }
      }
    },
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tags.tag.toLowerCase()) !== -1;
      });
    },
  },
  watch: {
    "form.title": function (val) {
      if (this.titles.filter((title) => title === val.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')).length) {
        this.title_taken = true;
      } else {
        this.title_taken = false;
      }
    },
  }
};
</script>