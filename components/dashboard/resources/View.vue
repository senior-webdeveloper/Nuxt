<template>
  <div>
    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Resources</h1>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <!-- Use status field for this. Use UiAppBadge. Badge = green if Active, red if Inactive -->
                <UiAppBadge
                  :className="statusColor(resources.status)"
                  :label="resources.status"
                />
              </div>
            </div>
            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="py-5">
                  <div>
                    <p>
                      <span class="font-bold">Title: </span>&nbsp;{{ resources.title }}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span class="font-bold">Category: </span>&nbsp;{{ resources.category }}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span class="font-bold">Description: </span>&nbsp;{{ resources.description }}
                    </p>
                  </div>
                  <div class="mt-2">
                    <UiAppButton
                      className="primary"
                      label="Download"
                      @click="download"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Submission Details</h2>
            <div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200">
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Submitted by [name of sales rep]</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{resources.createdAt | formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{resources.updatedAt | formatDate}}</time></span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: ["resources"],
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
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  }
};
</script>
