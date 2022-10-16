<template>
  <NuxtLink to="/dashboard/resources" @click.native="setMobileDashboardSidebarStatus(false)">
    <button type="button" :class="{ 'sidebar-active': $route.path.includes('/dashboard/resources') }" class="flex items-center w-full py-2 pl-2 pr-1 text-sm text-left rounded-md text-blueGray-200 font-small hover:text-blueGray-50 group focus:outline-none" aria-controls="menu-3" aria-expanded="false">
        <UiIconReports class="flex-shrink-0 w-6 h-6 mr-3 text-blueGray-200 group-hover:text-blueGray-50" />
        <span class="flex-1 text-lg">Resources</span>
    </button>
  </NuxtLink>
</template>
<script>
import {mapActions} from 'vuex';
export default {
   methods: {
     ...mapActions('modalState/mobileDashboardSidebar',['setMobileDashboardSidebarStatus'])
  }
}
</script>