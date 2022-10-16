<template>
  <div class="bg-white">
    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <!-- Disregard this space for now -->
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <!-- Use status field for this. Use UiAppBadge. Badge = green if Active, red if Inactive -->
                <!--<UiAppBadge
                  :className="statusColor( )"
                  :label=" "
                />-->
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="space-y-6">
                  <div>
                    <p class="block mb-2 text-sm font-medium text-blueGray-700">Text *</p>
                    <client-only>
                      <UiAppEditor v-model='banner.text' />
                    </client-only>
                  </div>
                  <div>
                    <UiAppFormField
                        type="text"
                        label="Url *"
                        :required="true"
                        v-model="banner.url"
                      />      
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-blueGray-700">Text color *</label>
                    <input
                      type="color"
                      :required="true"
                      v-model="banner.textColor"
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-blueGray-700">Banner color *</label>
                    <input
                      type="color"
                      :required="true"
                      v-model="banner.bannerColor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Submission Details</h2>
            <div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <div class="space-y-6">
                  <h3>Status</h3> <!-- Status will determine if showing on the site or not -->
                    <div>
                      <UiAppFormSelect
                        :options="options"
                        v-model="banner.status"
                        label="Status"
                        :required="true"
                      />
                    </div>
                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save" @click="update"/>
                    </div>
                </div>
              </div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200">
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{banner.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{banner.updatedAt}}</time></span>
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
import { FETCH_ONE_BANNER, UPDATE_ONE_BANNER } from "~/graphql/dashboard/admin/cms/banner";
import notificationMixin from "~/mixins/notification";

export default {
  mixins: [notificationMixin],
  data() {
    return {
      banner: {},
      options: [
        {
          value: "active",
          label: "Active"
        },
        {
          value: "inactive",
          label: "Inactive"
        }
      ]
    }
  },
  async fetch(){
    const banner = await this.$apollo.query({ 
      query: FETCH_ONE_BANNER,
      variables: { query: { id: 1 } }
     });
    this.banner = banner.data.banners[0]
  },
  methods: {
    async update() {
      await this.$apollo.mutate({
        mutation: UPDATE_ONE_BANNER,
        variables: { query: { _id: this.banner._id }, set: {
          ...this.banner,
          updatedAt: new Date().toLocaleString(),
          updatedBy: this.$auth.user.given_name + ' ' + this.$auth.user.family_name
          }}
      });
      this.setNotification({
        show: true,
        title: "Update Successful",
        content: ""
      });
    }
  },
}
</script>