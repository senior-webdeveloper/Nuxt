<template>
  <div class="flex flex-shrink-0 p-4 border-t bg-blueGray-700 border-blueGray-400">
    <a href="#" class="flex-shrink-0 block group">
      <div class="flex items-center">
        <div>
          <UiIconUser />
        </div>
        <div class="ml-3">
          <p class="text-base font-medium text-blueGray-200 hover:text-blueGray-400">
            {{$auth.user.given_name ? $auth.user.given_name : ""}} {{$auth.user.family_name ? $auth.user.family_name : ""}}
          </p>
          <p class="text-sm font-medium text-blueGray-200 hover:text-blueGray-400" @click="setMobileDashboardSidebarStatus(false)">
            <nuxt-link to="/dashboard/profile">View profile</nuxt-link>
          </p>
          <p class="text-sm font-medium text-blueGray-200 hover:text-blueGray-400">
            <a v-if="$auth.loggedIn" @click="signOff">Sign Off</a>
          </p>  
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    async signOff(){
      await this.$auth.logout()
      window.location.href = "/"
    },
    ...mapActions('modalState/mobileDashboardSidebar',['setMobileDashboardSidebarStatus'])
  }
}
</script>
