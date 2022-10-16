<template>
  <!-- CD (CT on 20210614) - This component functions both as the view and edit form -->
  <div>
    <!-- CD (CT on 20210614) - Use AppModal below to confirm deletion -->
    <UiAppModal
      :show="deleteConfirmation"
      :title="'Are you sure you want to delete this event?'"
      :content="'The event will be deleted permanently.'"
      @confirm="$emit('deleteEvent')"
      @close="deleteConfirmation = false"
    />
    <div hidden>{{ videoEmbedId }}</div>

    <main
      class="relative flex-1 overflow-y-auto focus:outline-none"
      tabindex="-1"
    >
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class=" md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
              <h1>View/Edit Event Details</h1>
            </div>
            </div>


            <div class="max-w-3xl py-5 mx-auto space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
              <form @submit.prevent="formSubmit">
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
                    <p class="block mb-2 text-sm font-medium text-blueGray-700">
                      Description
                    </p>
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
                    <p class="block mb-2 text-sm font-medium text-blueGray-700">
                      Tags
                    </p>
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
                    <p class="block mb-2 text-sm font-medium text-blueGray-700">
                      Upload Thumbnail *
                    </p>
                    <input
                      type="file"
                      hidden
                      required
                      ref="file"
                      @change="changeThumbnail"
                      accept="image/*"
                    />
                    <div class="flex items-center">
                      <UiAppButton
                        className="primary"
                        label="Upload"
                        @click="showUploadDialog"
                      />
                      <span class="ml-4" v-if="form.image">{{ form.image.name || form.image }}</span>
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

                <div class="mt-3">
                  <UiAppFormSubmit
                    className="primary-full"
                    label="Save"
                    @click="formSubmit"
                  />
                </div>
              </div>
              <div class="py-6 mt-8 space-y-5">
                <div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Submitted by {{form.createdBy}}</span> 
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
  props: ["event", "action", "titles"],
  async fetch() {
    const tags = await this.$apollo.query({ query: FETCH_ALL_TAGS });
    this.tags.all = tags.data.tags;
    this.autocompleteItems = tags.data.tags.map((x) => {
      return { text: x.title };
    });
  },
  mounted() {
    this.form = this.event ? { ...this.event } : this.form;
    this.tags.tags = this.event
      ? this.event.tags.map((tag) => {
          return { text: tag.title };
        })
      : [];
  },
  data: () => ({
    deleteConfirmation: false,
    statuses: [
      { value: "Unpublished", label: "Unpublished" },
      { value: "Published", label: "Published" },
    ],
    form: {
      name: "",
      endDate: "",
      startDate: "",
      image: null,
      isActive: {
        startDate: "",
        endDate: "",
      },
      location: "",
      description: "",
      createdAt: new Date(),
      updatedAt: new Date(),
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
        this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
        const slug = this.form.name
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
          /* CD (AN on 20210715): Map tags from vue input tags to the correct format*/
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
            slug,
          });
        } else {
          this.$emit("submit:create", {
            ...this.form,
            tags: this.tags.ids,
            Type: "Event",
            slug,
          });
        }
      }
    },
  },
  filters: {
    image(image) {
      return image.includes("http") ? image : `https://${image}`;
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
  },
  watch: {
    "form.name": function (val) {
      if (this.titles.filter(title => title === val.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')).length && val !== this.event.name) {
        this.title_taken = true;
      } else {
        this.title_taken = false;
      }
    },
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
