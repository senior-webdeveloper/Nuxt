<template>
    <UiAppAccordionSidebarMenu>
        <template v-slot:header>
            <button type="button" class="flex items-center w-full pl-2 pr-1 text-sm text-left rounded-md text-blueGray-200 font-small hover:text-blueGray-50 group focus:outline-none" aria-controls="sub-menu-2" aria-expanded="false">
                <UiIconReports class="flex-shrink-0 w-6 h-6 mr-3 text-blueGray-200 group-hover:text-blueGray-50" />
                <span class="flex-1 text-lg">Forms</span>
            </button>
        </template>

        <template v-slot:content>
            <div class="px-4 space-y-2 shadow-inner" id="sub-menu-2">

                <NuxtLink to="/dashboard/forms/demonstration-request" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/forms/demonstration-request') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                  Demonstration Request
                </NuxtLink>

                <NuxtLink to="/dashboard/forms/guarantee-trial-offer-program" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/forms/guarantee-trial-offer-program') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                  Guarantee Trial Offer Program
                </NuxtLink>

            </div>
        </template>
    </UiAppAccordionSidebarMenu>
</template>
<script>
import {mapActions} from 'vuex';
export default {
   methods: {
     ...mapActions('modalState/mobileDashboardSidebar',['setMobileDashboardSidebarStatus'])
  }
}
</script>