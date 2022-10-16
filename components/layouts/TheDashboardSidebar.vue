<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col flex-grow pt-5 overflow-y-auto border-r opacity-100 border-blueGray-400 bg-blueGray-600">
    <div class="flex items-center flex-shrink-0 px-4 pb-4">
      <span class="text-4xl text-white">NSK</span>
      <!-- <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow"> -->
    </div>
    <div class="flex flex-col flex-grow mt-8">
      <nav class="flex-1 px-2 space-y-4" aria-label="Sidebar">
        <div>
          <NuxtLink to="/" 
            class="flex items-center w-full py-2 pl-2 text-lg font-medium rounded-md text-blueGray-200 group"
          >
            <UiIconChevronDoubleLeft class="flex-shrink-0 w-6 h-6 mr-3 text-blueGray-200 group-hover:text-blueGray-50" />
              <span class="flex-1 text-lg">Frontend</span>
          </NuxtLink>
        </div>
        
        <div class="space-y-1">
          <NuxtLink to="/dashboard/" 
            class="flex items-center w-full py-2 pl-2 text-lg font-medium rounded-md text-blueGray-200 group" 
            :class="{ 'sidebar-active': $route.path === '/dashboard/' || $route.path === '/dashboard/admin' }"
          >
            <UiIconHome class="flex-shrink-0 w-6 h-6 mr-3 text-blueGray-200 group-hover:text-blueGray-50"/>
              <span class="flex-1 text-lg">Dashboard</span>
          </NuxtLink>
        </div>

        <div class="space-y-1">
          <LayoutsTheDashboardSidebarMenuForms/>
        </div>

        <!--<div class="space-y-1" :class="{ 'sidebar-active': $route.path.includes('resources') }" v-if="user_role == 'distributor'">-->
        <div class="space-y-1">
          <LayoutsTheDashboardSidebarMenuResources/>
        </div>

        <div class="space-y-1" v-if="user_role !== 'distributor'">
          <LayoutsTheDashboardSidebarMenuReports/>
        </div>

        <div class="space-y-1" v-if="user_role !== 'distributor'">
          <LayoutsTheDashboardSidebarMenuCms/>
        </div>
      </nav>
    </div>
    <LayoutsTheDashboardSidebarFooter />
  </div>
</template>

<script>
export default {
  data(){
    return {
      user_role: null,
    }
  },
  created(){
    this.user_role = this.$auth.$storage.getUniversal('appMetaData').role
  }
}
</script>

<style>
.sidebar-active{
  color: rgba(23, 23, 23) !important;
  background-color: rgba(250, 250, 250);
  border-radius: 6px;
}
.sidebar-active span, .sidebar-active svg{
  color: rgba(23, 23, 23) !important;
}
</style>