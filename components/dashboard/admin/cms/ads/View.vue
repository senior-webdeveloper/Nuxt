<template>
  <div>
    <!-- Use AppModal below to confirm deletion -->
    <UiAppModal
      :show="deleteConfirmation"
      :title="'Are you sure you want to delete this ad?'"
      :content="'The ad will be deleted permanently.'"
      @confirm="$emit('deleteAd')"
      @close="deleteConfirmation = false"
    />

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>View/Edit Ad Details</h1>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <!-- No badge here but do not delete this part for now -->
                <!--<UiAppBadge
                  :className="statusColor( )"
                  :label=" "
                />-->
              </div>
            </div>

            <div>
              <!-- Main Details-->
                  <div class="max-w-3xl py-5 mx-auto space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                    <form @submit.prevent="formSubmit">
                    <div class="space-y-6">
                      <div>
                        <UiAppFormTextArea
                          v-model="form.title"
                          label="Title *"
                          :required="true"
                        />
                        <p v-if="title_taken" class="text-xs text-red-500">Duplicate Error: There's another entry with the same title, please choose a different title then save your entry.</p>
                      </div>
                      <div>
                        <UiAppFormTextArea
                          v-model="form.description"
                          label="Description"
                          :required="true"
                        />
                      </div>
                      <div>
                        <p class="block mb-2 text-sm font-medium text-blueGray-700">Upload Thumbnail *</p>
                        <input type="file" hidden ref="file" @change="changeImage" accept="image/*">
                        <div class="flex items-center">
                          <UiAppButton className="primary" label="Upload" @click="showUploadDialog" />
                          <span class="ml-4" v-if="form.image">{{form.image.name||form.image}}</span>
                        </div>
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
                      <!--<div>
                        <UiAppFormTextArea
                          v-model="form.url"
                          label="URL *"
                          :required="false"
                        />
                      </div>-->
                      <!-- Should be date and time format -->
                      <!--<div>
                        <UiAppFormField
                          v-model="form.isActive.startDate"
                          type="datetime-local"
                          label="Start Date"
                          :required="false"
                        />
                      </div>-->
                      <!-- Should be date and time format -->
                      <!--<div>
                        <UiAppFormField
                          v-model="form.isActive.endDate"
                          type="datetime-local"
                          label="End Date"
                          :required="false"
                        />
                      </div>-->

                      <div class="px-4 py-3 mt-10 text-right bg-gray-50 sm:px-6">
                        <UiAppFormSubmit className="primary" label="Save" />
                      </div>
                    </div>
                    </form>
                  </div>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Submission Details</h2>
            <div class="space-y-5">
              <div>
                  <!-- CD (CT on 20210614): form for submit button using AppForm. -->
                  <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                  <form @submit.prevent="formSubmit">
                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save" @click="formSubmit"/>
                    </div>
                  </form>
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
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{form.createdAt | formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{form.updatedAt | formatDate}}</time></span>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <!-- CD (CT on 20210412): Delete button-->
              <UiAppButton
                className="secondary-full"
                @click="deleteConfirmation = true"
                label="DELETE"
              />
            </div>
            <!--<div class="mt-6">-->
            <!-- CD (CT on 20210413): Cancel button-->
            <!--<UiAppButton className="tertiary" @click="$store.dispatch('dashboard/technical-questions/hideSlider')" label="Cancel" />
            </div>-->
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import {FETCH_ALL_TAGS} from "~/graphql/dashboard/admin/cms/tags";

export default {
  props: ["ads", "isEdit", "titles"],
  mounted() {
    this.form = this.ads ? { ...this.ads } : this.form;
    this.tags.tags = this.ads ? this.ads.tags.map(tag => {return {text: tag.title}}) : []
  },
  async fetch() {
    const tags = await this.$apollo.query({ query: FETCH_ALL_TAGS });
    this.tags.all = tags.data.tags
    this.autocompleteItems = tags.data.tags.map(x => {return {text: x.title}});
  },
  data: () => ({
    deleteConfirmation: false,
    title_taken: false,
    form: {
      title: "",
      description: "",
      image: null,
      //url: "",
      //isActive: {
        //startDate: "",
        //endDate: ""
      //},
      createdAt: new Date(),
      updatedAt: new Date()
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
  }),
  filters: {
    image(image) {
      return image.includes("http") ? image : `https://${image}`;
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  },
    methods: {
    changeImage(e) {
      const file = e.target.files.item(0);
      this.form.image = file;
    },
    showUploadDialog() {
      this.$refs.file.click();
    },
    formSubmit() {
      if(!this.title_taken){
        const slug = this.form.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
        /* CD (AN on 20210715): Map tags from vue input tags to the correct format*/
        this.tags.tags.forEach(tag => {
          let actual_tag = this.tags.all.find(element => element.title == tag.text)
          this.tags.ids.link.unshift(actual_tag._id)
        })
        if (this.ads) {
          const [timestamp] = this.ads.slug.split('-').splice(-1)
          this.form.updatedAt = new Date();
          this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
          delete this.form._id;
          this.$emit("submit:update", {
            ...this.form,
            tags: this.tags.ids,
            slug
          });
        } else {
          this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
          this.$emit("submit:create", {
            ...this.form,
            tags: this.tags.ids,
            slug
          });
        }
      }
    }
  },
  watch: {
    "form.title": function (val) {
      if (this.titles.filter(title => title === val.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')).length && val !== this.ads.title){
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
