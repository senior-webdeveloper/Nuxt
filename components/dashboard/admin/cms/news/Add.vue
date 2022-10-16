<template>
  <div>
    <div class="max-w-3xl py-10 mx-auto sm:px-6 lg:px-0 lg:col-span-9">
      <div>
        <h1>Add new news</h1>
      </div>
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
          <UiAppFormTextArea label="Preview *" :required="true" v-model="form.preview" />
        </div>-->
        <div>
          <p class="block mb-2 text-sm font-medium text-blueGray-700">Content *</p>
          <client-only>
            <UiAppEditor v-model='form.articleBody' />
          </client-only>
        </div>
        <!--<div>
          <UiAppFormField type="text" label="URL" :required="false" v-model="form.url" />
        </div>-->
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
          <UiAppFormSelect
            :options="statuses"
            v-model="form.status"
            label="Status"
            required />
        </div>
        <div>
          <p class="block mb-2 text-sm font-medium text-blueGray-700">Upload Thumbnail *</p>
          <input type="file" hidden ref="file" @change="changeThumbnail" accept="image/*" :required="true">
          <div class="flex items-center">
            <UiAppButton className="primary" label="Upload" @click="showUploadDialog" />
            <span class="ml-4">{{form.image.name}}</span>
          </div>
        </div>

        <div class="px-4 py-3 mt-10 text-right bg-gray-50 sm:px-6">
          <UiAppFormSubmit className="primary" label="Save" />
        </div>
        </div>
      </form>
    </div>
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
    this.form.createdBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
    this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
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
    changeThumbnail(e) {
      const file= e.target.files.item(0)
      this.form.image = file
    },
    showUploadDialog() {
      this.$refs.file.click()
    },
    formSubmit() {
      if(!this.title_taken){
        this.tags.tags.forEach(tag => {
          let actual_tag = this.tags.all.find(element => element.title == tag.text)
          this.tags.ids.link.unshift(actual_tag._id)
        })
        if (this.isEdit) {
          this.form.updatedAt = new Date();
          delete this.form._id
        }
        this.$emit(this.isEdit ? "submit:update" : "submit:create", { ...this.form, tags: this.tags.ids, "Type": "NewsArticle" });
      }
    }
  },
  watch: {
    "form.headline": function (val) {
      if(this.titles.filter(title => title === val.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')).length){
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
