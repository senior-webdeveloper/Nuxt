<template>
  <div>

    <div class="max-w-3xl py-10 mx-auto space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <div>
        <h1>Add new event</h1>
      </div>
      <form>
        <div class="space-y-6">
        <div>
          <UiAppFormTextArea
            v-model="form.name"
            label="Name *"
            :required="true"
          />
          <p v-if="title_taken" class="text-xs text-red-500">Duplicate Error: There's another entry with the same title, please choose a different title then save your entry.</p>
        </div>
        <div>
          <!-- this should be Date and Time format -->
          <UiAppFormField
            v-model="form.startDate"
            type="datetime-local"
            label="Start Date *"
            :required="true"
          />
        </div>
        <div>
          <!-- this should be Date and Time format -->
          <UiAppFormField
            v-model="form.endDate"
            type="datetime-local"
            label="End Date *"
            :required="true"
          />
        </div>
        <div>
          <p class="block mb-2 text-sm font-medium text-blueGray-700">Description</p>
          <client-only>
            <UiAppEditor v-model="form.description" />
          </client-only>
        </div>
        <div>
          <UiAppFormTextArea
            v-model="form.location"
            label="Location"
            :required="false"
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
            @tags-changed="newTags => (tags.tags = newTags)"
          />
        </div>
        <div>
          <p class="block mb-2 text-sm font-medium text-blueGray-700">Upload Thumbnail *</p>
          <input
            type="file"
            hidden
            ref="file"
            @change="changeThumbnail"
            accept="image/*"
            :required="true"
          />
          <div class="flex items-center">
            <UiAppButton
              className="primary"
              label="Upload"
              @click="showUploadDialog"
            />
            <span class="ml-4" v-if="form.image">{{
              form.image.name || form.image
            }}</span>
          </div>
        </div>
        <div>
          <!-- Should be date and time format -->
          <UiAppFormField
            v-model="form.isActive.startDate"
            type="datetime-local"
            label="Published Start Date"
            :required="false"
          />
        </div>
        <div>
          <!-- Should be date and time format -->
          <UiAppFormField
            v-model="form.isActive.endDate"
            type="datetime-local"
            label="Published End Date"
            :required="false"
          />
        </div>

        <div class="px-4 py-3 mt-10 text-right bg-gray-50 sm:px-6">
          <UiAppFormSubmit className="primary" label="Save" @click.prevent="formSubmit"/>
        </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {FETCH_ALL_TAGS} from "~/graphql/dashboard/admin/cms/tags";

export default {
  props: ["event", "titles"],
  mounted() {
    this.form = this.event ? { ...this.event } : this.form;
    this.form.createdBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
    this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
  },
  async fetch() {
    const tags = await this.$apollo.query({ query: FETCH_ALL_TAGS });
    this.tags.all = tags.data.tags
    this.autocompleteItems = tags.data.tags.map(x => {return {text: x.title}});
  },
  data: () => ({
    statuses: [
      { value: "Unpublished", label: "Unpublished" },
      { value: "Published", label: "Published" }
    ],
    form: {
      name: "",
      endDate: "",
      startDate: "",
      image: null,
      isActive: {
        startDate: "",
        endDate: ""
      },
      location: "",
      description: "",
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
      const file = e.target.files.item(0);
      this.form.image = file;
    },
    showUploadDialog() {
      this.$refs.file.click();
    },
    formSubmit() {
      if(!this.title_taken){
        console.log("submitting")
        const slug = this.form.name
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
        this.tags.tags.forEach(tag => {
          let actual_tag = this.tags.all.find(element => element.title == tag.text)
          this.tags.ids.link.unshift(actual_tag._id)
        })
        if (this.event) {
          this.form.updatedAt = new Date();
          delete this.form._id;
          const [timestamp] = this.form.slug.split("-").slice(-1);
          this.$emit("submit:update", {
            ...this.form,
            tags: this.tags.ids,
            Type: "Event",
            slug
          });
        } else {
          this.$emit("submit:create", {
            ...this.form,
            tags: this.tags.ids,
            Type: "Event",
            slug
          });
        }
      }
    }
  },
  watch: {
    "form.name": function (val) {
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
