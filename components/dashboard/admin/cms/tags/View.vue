<template>
<!-- CD (CT on 20210614) - This component functions both as the view and edit form -->
  <div>
    <!-- CD (CT on 20210614) - Use AppModal below to confirm deletion -->
    <UiAppModal
      :show="deleteConfirmation"
      :title="'Are you sure you want to delete this tag?'"
      :content="'The tag will be deleted permanently.'"
      @confirm="$emit('deleteTag')"
      @close="deleteConfirmation = false"
    />

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Tags</h1>
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <form class="divide-y divide-gray-200" @submit.prevent="formSubmit">
                <div class="py-5">
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:py-2">
                        <vue-tags-input
                        class="mb-5"
                        v-model="form.tag"
                        :tags="form.tags"
                        @tags-changed="newTags => (form.tags = newTags)"
                        v-if="action === 'add'"
                        />
                        <UiAppFormField type="text" label="Tag *" :required="true" v-model="form.tags[0].text" v-else/>
                    </div>
                  </dl>
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
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200">
                <div class="flex items-center space-x-2">
                  <UiIconUser2 class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Submitted by {{form.createdBy}}</span> 
                </div>
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{form.updatedBy}}</span> 
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Created on<time datetime="2020-12-02">{{form.createdAt | formatDate}}</time></span><!-- CD (CT on 20210614) - Connect this field -->
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Updated on<time datetime="2020-12-02">{{form.updatedAt | formatDate}}</time></span><!-- CD (CT on 20210614) - Connect this field -->
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
import notificationMixin from "~/mixins/notification";

export default {
  mixins: [notificationMixin],
  props: ["tag", "action", "tags"],
  created() {
    this.form.tags = this.tag ? [{text: this.tag.title}] : []
    this.form.createdAt = this.tag ? this.tag.createdAt : ""
    this.form.updatedAt = this.tag ? this.tag.updatedAt : ""
    this.form.createdBy = this.tag ? this.tag.createdBy : ""
    this.form.updatedBy = this.tag ? this.tag.updatedBy : ""
  },
  data: () => ({
    form: {
        tag: "",
        tags: [],
        createdAt: "",
        updatedAt: "",
    },
    deleteConfirmation: false,
  }),
  methods: {
    formSubmit() {
        if (this.action === 'add'){
            const arr1 = this.tags.map(x => x.title)
            const arr2 = this.form.tags.map(x => x.text)
            if(arr1.some(item => arr2.includes(item))){
              this.setNotification({
                show: true,
                title: "Error",
                content: "Some of the tags might already exist."
              });
            } else {
              this.$emit("submit", this.form.tags);
            }
        } else {
            this.$emit("update", this.form.tags[0].text);
        }
    }
  },
};
</script>