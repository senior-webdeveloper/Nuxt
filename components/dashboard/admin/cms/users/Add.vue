<template>
  <div>
    <div class="max-w-3xl py-10 mx-auto sm:px-6 lg:px-0 lg:col-span-9">
      <div>
        <h1>Add new user</h1>
      </div>
      <form @submit.prevent="$emit('createUser', user)">
        <div class="space-y-6">
          <div>
            <UiAppFormField
              type="text"
              required
              label="Last Name"
              v-model="user.family_name"
            />
          </div>
          <div>
            <UiAppFormField
              type="text"
              required
              label="First Name"
              v-model="user.given_name"
            />
          </div>
          <div>
            <UiAppFormField
              type="email"
              required
              label="Email"
              v-model="user.email"
            />
          </div>
          <div>
            <UiAppFormSelect
              label="Role"
              :options="roles"
              v-model="user.role"
              class="mt-5"
            />
          </div>
          <!-- CD (CT on 20210907): After saving the new user, it will send to the above email address an Invite to the user to set up his password --> 
          <div class="px-4 py-3 mt-10 text-right bg-gray-50 sm:px-6">
            <UiAppFormSubmit className="primary" label="Save"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {
        given_name: "",
        family_name: "",
        email: "",
        role: "",
        createdBy: this.$auth.user.family_name + ' ' + this.$auth.user.given_name,
        updatedBy: this.$auth.user.family_name + ' ' + this.$auth.user.given_name,
      },
      roles: [
        {
          label: "Admin",
          value: "admin"
        },
        {
          label: "Distributor",
          value: "distributor"
        },
      ]
    }
  },
  mounted(){
    if(this.$auth.$storage.getUniversal('appMetaData').role === 'owner'){
      this.roles.push({
          label: "Owner",
          value: "owner"
      })
    }
  }
}
</script>

