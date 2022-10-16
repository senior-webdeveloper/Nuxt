<template>
  <div>
    <main
      class="relative flex-1 overflow-y-auto focus:outline-none"
      tabindex="-1"
    >
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>View/Edit Resource Details</h1>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <!-- Use status field for this. Use UiAppBadge. Badge = green if Active, red if Inactive -->
                <!-- <UiAppBadge
                  :className="statusColor()"
                  :label="resources.status"
                /> -->
              </div>
            </div>
            <DashboardAdminCmsResourcesAdd
              v-if="isEdit"
              :isEdit="isEdit"
              :resource="resources"
              :titles="titles"
              @submit:update="$emit('submit:update', $event)"
              ref="update"
            />
            <div v-else>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="space-y-6">
                  <div>
                    <p><span class="font-bold">Title: </span>&nbsp;{{ resources.title }}</p>
                  </div>
                  <div>
                    <p><span class="font-bold">Category: </span>&nbsp;{{ resources.category }}</p>
                  </div>
                  <div>
                    <p><span class="font-bold">Description: </span>&nbsp;{{ resources.description }}</p>
                  </div>
                  <div class="mt-2">
                    <UiAppButton className="primary" label="Download" @click="download" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Submission Details</h2>
            <div>
              <div class="mt-6" v-if="isEdit">
              <!-- CD (CT on 20210412): Delete button-->
              <UiAppButton
                className="primary-full"
                @click="saveUpdate"
                label="SAVE"
              />
            </div>
              <div class="py-6 mt-8 space-y-5">
                <div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Submitted by {{resources.createdBy}}</span>
                  <!-- CD (CT on 20210614) - Disregard this field for now -->
                </div>
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{resources.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{resources.createdAt | formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{resources.updatedAt | formatDate}}</time></span>
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
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: ["resources", "isEdit", "titles"],
  methods: {
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      return status === "Inactive" ? "red" : "green";
    },
    download() {
      const link = document.createElement("a");
      link.download = this.resources.fileUpload;
      link.href = this.resources.fileURL;
      link.click();
    },
    saveUpdate() {
      this.$refs.update.formSubmit()
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  }
};
</script>