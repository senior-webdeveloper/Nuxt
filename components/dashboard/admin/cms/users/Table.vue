<template>
  <div>
    <UiAppSlideOverPanel
      :show="$store.state.slider.show"
      @close="resetSliderData"
      :title="''"
    >
      <DashboardAdminCmsUsersView
        v-if="action === 'view' || action === 'update'"
        @deleteUser="deleteUser"
        @updateUser="updateUser"
        @resetPassword="resetPassword"
        :user="selected"
      />
      <DashboardAdminCmsUsersAdd
        @createUser="createUser"
        v-else      
        />
    </UiAppSlideOverPanel>

    <UiAppTable :headers="headings" title="Users">
      <template #toolbar>
        <UiAppButton className="primary" label="Add New User" @click="showAdd" />
      </template>
      <!-- CD (CT on 20210824): Body of the table  -->
      <tbody>
        <!-- CD (CT on 20210824): Render table row -->
        <template v-if="$fetchState.pending">
          <tr>
            <td :colspan="headings.length">Loading ...</td>
          </tr>
        </template>

        <template v-for="user in pagination.items">
          <tr class="trClass"  :key="user.user_id">
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{user.family_name}}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{user.given_name}}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{user.email}}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              {{user.app_metadata ? user.app_metadata.role : ""}}
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              <UiAppButton className="icon-tables" @click="resetPassword(user)">Reset Password</UiAppButton>
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              <UiAppButton
                className="icon-tables"
                @click="showUpdate(user)"
                ><UiIconView />
              </UiAppButton>
            </td>
          </tr>
        </template>
        <!-- CD (CT on 20210824): Render table row  END-->
      </tbody>

      <template #pagination>
        <UiAppPagination
          @change:page="setPaginationPage"
          @change:size="setPaginationSize"
          :pages="pagination.pages"
          :from="pagination.from"
          :to="pagination.to"
          :items="pagination.items.length"
          :size="pagination.size"
          :total="paginationItems.length"
        />
      </template>
    </UiAppTable>
  </div>
</template>

<script>
import paginationMixin from '~/mixins/pagination'
import notificationMixin from "~/mixins/notification";
import sliderMixin from "~/mixins/slider";

export default {
  mixins: [paginationMixin, notificationMixin, sliderMixin],
  data() {
    return {
      users: [],
      selected: null,
      headings: [
        "Last Name",
        "First Name",
        "Email",
        "Role",
        "Password Reset Link",
        "Actions"
      ],
      modal: false,
      action: "",
    };
  },
  async fetch(){
    const users = await this.$axios.$get('/api/v1/auth/users')
    console.log(this.$auth.$storage.getUniversal('appMetaData'))
    this.users = users
  },
  methods: {
    async createUser(user){
      try {
        await this.$axios.$post('/api/v1/auth/users', user)
        this.resetSliderData()
        this.setNotification({
          show: true,
          title: "Success",
          content: "User Saved."
        })
        this.loadUsers()
      } catch (error) {
        console.log(error)
        this.resetSliderData()
        this.setNotification({
          show: true,
          title: "Error",
          content: "Error Creating User."
        })
      }
    },
    async updateUser(user){
      try {
        await this.$axios.$patch('/api/v1/auth/users/' + user.user_id, user)
        this.resetSliderData()
        this.setNotification({
          show: true,
          title: "Success",
          content: "User Saved."
        })
        this.loadUsers()
      } catch (error) {
        console.log(error)
        this.resetSliderData()
        this.setNotification({
          show: true,
          title: "Error",
          content: "Error Updating User."
        })
      }
    },
    async deleteUser(){
      try {
        await this.$axios.$delete('/api/v1/auth/users/' + this.selected.user_id)
        this.resetSliderData()
        this.setNotification({
          show: true,
          title: "Success",
          content: "User Deleted."
        })
        this.loadUsers()
      } catch (error) {
        console.log(error)
        this.resetSliderData()
        this.setNotification({
          show: true,
          title: "Error",
          content: "Error Deleting User."
        })
      }
    },
    async resetPassword(user){
      console.log("reset password")
      try {
        await this.$axios.$post('/api/v1/auth/users/reset-password', user)
        this.setNotification({
          show: true,
          title: "Success",
          content: "Reset Password Email Sent."
        })
        this.loadUsers()
      } catch (error) {
        this.setNotification({
          show: true,
          title: "Error",
          content: "Error Sending Reset Password Email."
        })
      }
    },
    resetSliderData() {
      this.resetSlider();
      this.action = "";
      this.selected = null;
    },
    showView(user) {
      this.selected = user;
      this.setSlider({
        show: true,
        title: "View Users"
      });
      this.action = "view";
    },
    showAdd() {
      this.setSlider({
        show: true,
        title: "Add User"
      });
      this.action = "add";
    },
    async loadUsers(){
      const users = await this.$axios.$get('/api/v1/auth/users')
      this.users = users
    },
    showUpdate(user) {
      this.selected = user;
      this.setSlider({
        show: true,
        title: ""
      });
      this.action = "update";
    },
  },
  computed: {
    paginationItems() {
      return this.users;
    }
  }
};
</script>
