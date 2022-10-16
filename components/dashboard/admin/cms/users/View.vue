<template>
  <div>
    <UiAppModal
      :show="deleteConfirmation"
      :title="'Are you sure you want to delete this user?'"
      :content="'The user will be deleted permanently.'"
      @confirm="$emit('deleteUser')"
      @close="deleteConfirmation = false"
    />
    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>View/Edit User Details</h1>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <!-- Disregard this space -->
              </div>
            </div>
            <div>
              <!-- Main Details-->
              <div class="max-w-3xl py-4 mx-auto space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <form @submit.prevent="formSubmit">
                  <div class="space-y-6">
                    <div>
                      <UiAppFormField type="text" label="Last Name" :required="false" v-model="user.family_name"/>
                    </div>
                    <div>
                      <UiAppFormField type="text" label="First Name" :required="false" v-model="user.given_name"/>
                    </div>
                    <div>
                      <UiAppFormField
                        type="email"
                        required
                        disabled
                        label="Email"
                        v-model="user.email"
                      />
                    </div>
                    <div>
                      <UiAppFormSelect
                        label="Role"
                        @input="handleRoleInput"
                        :value="user.app_metadata ? user.app_metadata.role : ''"
                        :options="roles"
                        :required="true"
                      />
                    </div>
                    <div>
                      <!-- Button here that sends to the above email a reset password link -->
                      <UiAppButton className="primary" label="Reset Password Link" @click="$emit('resetPassword', user)"/>
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
                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save" @click="$emit('updateUser', user)"/>
                    </div>
                </div>
              </div>
              <div class="py-6 mt-8 space-y-5">
                <div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Submitted by {{user.app_metadata ? user.app_metadata.createdBy : 'Auth0'}}</span>
                </div>
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{user.app_metadata.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{dateCreated}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{dateUpdated}}</time></span>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <!-- CD (CT on 20210823): Delete button-->
              <UiAppButton
                className="secondary-full"
                @click="deleteUser"
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
  props: ["user"],
  data(){
    return {
      roles: [
        {
          label: "Admin",
          value: "admin"
        },
        {
          label: "Distributor",
          value: "distributor"
        },
      ],
      deleteConfirmation: false,
    }
  },
  mounted(){
    this.user.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
    if(this.$auth.$storage.getUniversal('appMetaData') && this.$auth.$storage.getUniversal('appMetaData').role === 'owner'){
      this.roles.push({
          label: "Owner",
          value: "owner"
      })
    }

  },
  methods:{
    deleteUser(){
      this.deleteConfirmation = true
    },
    handleRoleInput(value){
      if(!this.user.app_metadata) this.user.app_metadata = {};
      this.user.app_metadata.role = value;
    }
  },
  computed: {
    dateCreated(){
      const date = new Date(this.user.created_at)
      return date.toLocaleString()
    },
    dateUpdated(){
      const date = new Date(this.user.updated_at)
      return date.toLocaleString()
    }
  }
}
</script>
