<template>
  <div>
    <!-- Use AppModal below to confirm deletion -->
    <!--<UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="deleteTechnicalQuestion"
      title="Are you sure you want to delete this item?"
      content="Items deleted cannot be recovered."
    />-->

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>View/Edit News Details</h1>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <UiAppBadge
                    :className="statusColor(news.status)"
                    :label="news.status"
                  />
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="max-w-3xl py-4 mx-auto space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <form @submit.prevent="formSubmit">
                  <div class="space-y-6">
                  <div>
                    <UiAppFormTextArea label="Headline *" :required="true" v-model="form.headline" />
                    <p v-if="title_taken" class="text-xs text-red-500">Duplicate Error: There's another entry with the same title, please choose a different title then save your entry.</p>
                  </div>
                  <div>
                    <UiAppFormField
                      v-model="form.datePublished"
                      type="date"
                      label="Date Published *"
                      :required="true"
                    />
                  </div>
                  <div>
                    <UiAppFormField type="text" label="Author" :required="false"  v-model="form.author" />
                  </div>
                  <!--<div>
                    <UiAppFormTextArea label="Preview *" :required="false" v-model="form.preview" />
                  </div>-->
                  <div>
                    <p class="block mb-2 text-sm font-medium text-blueGray-700">Content *</p>
                    <client-only>
                      <UiAppEditor v-model='form.articleBody' />
                    </client-only>
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
                    <UiAppFormField type="text" label="URL" :required="false" v-model="form.url" />
                  </div>-->
                  <div>
                    <UiAppFormSelect
                      :options="statuses"
                      v-model="form.status"
                      label="Status"
                      required />
                  </div>
                  <div>
                    <p class="block mb-2 text-sm font-medium text-blueGray-700">Upload Thumbnail *</p>
                    <input type="file" hidden ref="file" @change="changeThumbnail" accept="image/*">
                    <div class="flex items-center">
                      <UiAppButton className="primary" label="Upload" @click="showUploadDialog" />
                      <span class="ml-4" v-if="form.image">{{form.image.name||form.image}}</span>
                    </div>
                  </div>

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
            <div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <div class="space-y-6">
                    <!-- CD (CT on 20210614): form for submit button using AppForm. -->
                    <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                    <form @submit.prevent="formSubmit">

                      <div class="mt-3">
                        <UiAppFormSubmit className="primary-full" label="Save" @click="formSubmit"/>
                      </div>
                    </form>
                </div>
                <!--<div class="space-y-6">
                  <h2>Status</h2>
                </div>-->
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
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{news.createdAt | formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{news.updatedAt | formatDate}}</time></span>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <!-- CD (CT on 20210412): Delete button-->
              <UiAppButton
                className="secondary-full"
                @click="$emit('submit:delete')"
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
  props: ["news", "isEdit", "titles"],
  async fetch() {
    const tags = await this.$apollo.query({ query: FETCH_ALL_TAGS });
    this.tags.all = tags.data.tags
    this.autocompleteItems = tags.data.tags.map(x => {return {text: x.title}});
  },
  mounted() {
    this.form = this.isEdit ? {...this.news} : this.form
    this.tags.tags = this.news && this.news.tags && Array.isArray(this.news.tags) ? this.news.tags.map(tag => {return {text: tag.title}}) : []
  },
  data: () => ({
    statuses: [
      { value: "Unpublished", label: "Unpublished" },
      { value: "Published", label: "Published" }
    ],
    form: {
      headline: "",
      datePublished: "",
      author: "",
      //preview: "",
      articleBody: "",
      image: "",
      //url: "",
      status: "Unpublished",
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
    title_taken: false,
  }),
  methods: {
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      return status === "Unpublished" ? "red" : "green";
    },
    changeThumbnail(e) {
      const file= e.target.files.item(0)
      this.form.image = file
    },
    showUploadDialog() {
      this.$refs.file.click()
    },
    formSubmit() {
      if (!this.title_taken){
        const slug = this.form.headline.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        /* CD (AN on 20210715): Map tags from vue input tags to the correct format*/
        this.tags.tags.forEach(tag => {
          let actual_tag = this.tags.all.find(element => element.title == tag.text)
          this.tags.ids.link.unshift(actual_tag._id)
        })
        if (this.isEdit) {
          this.form.updatedAt = new Date();
          this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
          // delete this.form._id
        }
        this.$emit(this.isEdit ? "submit:update" : "submit:create", { ...this.form, tags: this.tags.ids, "Type": "NewsArticle" });
      }
    }
  },
  filters: {
    image(image) {
      return image.includes("http") ? image : `https://${image}`;
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  },
  watch: {
    "form.headline": function (val) {
      if (this.titles.filter(title => title === val.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')).length && val !== this.news.headline){
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
