<template>
  <div class="bg-white">

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div class="mt-5">
                <p class="uppercase">{{user.app_metadata.role}}</p>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <!-- Disregard this space -->
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="max-w-3xl py-4 mx-auto space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <form>
                  <div class="space-y-6">
                    <div>
                      <UiAppFormField type="text" label="Last Name" :required="true" v-model="user.family_name"/>
                    </div>
                    <div>
                      <UiAppFormField type="text" label="First Name" :required="true" v-model="user.given_name"/>
                    </div>
                    <div>
                      <UiAppFormField type="text" label="Email" :required="true" :value="user.email" disabled/>
                    </div>        
                    <div>
                      <UiAppFormField type="password" label="New Password" :required="false" v-model="user.password"/>
                    </div>
                    <div>
                      <UiAppFormField type="password" label="Repeat Password" :required="false" v-model="user.password2"/>
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
                    <!-- CD (CT on 20210823): form for submit button using AppForm. -->
                    <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                    <form @submit.prevent="updateUser">
                      <div class="mt-3">
                        <UiAppFormSubmit className="primary-full" label="Save"/>
                      </div>
                    </form>
                </div>
              </div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200">
                <!-- <div class="flex items-center space-x-2">
                  <UiIconCalendar class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{user.created_at}}</time></span>
                </div> -->
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{user.updated_at}}</time></span>
                </div>
              </div>
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
import notificationMixin from "~/mixins/notification";

export default {
  mixins: [notificationMixin],
  data(){
    return {
      user: {
        app_metadata: null,
      },
    }
  },
  async fetch(){
    const user = this.$auth.user
    this.user = user
    this.user.app_metadata = this.$auth.$storage.getUniversal('appMetaData')
  },
  methods: {
    async updateUser(){
      try {
        if(this.user.password !== this.user.password2){
        return this.setNotification({
          show: true,
          title: "Error",
          content: "Passwords Must match"
        })}
        await this.$axios.$patch('/api/v1/auth/users/' + this.user.sub, this.user)
        this.setNotification({
          show: true,
          title: "Success",
          content: "User Saved."
        })
      } catch (error) {
        console.log(error.response.data)
        this.setNotification({
          show: true,
          title: "Error",
          content: error.response.data,
        })
      }
    },
  }
}
</script>

