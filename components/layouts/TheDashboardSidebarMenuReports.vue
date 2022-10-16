<template>
    <UiAppAccordionSidebarMenu>
        <template v-slot:header>
            <button type="button" class="flex items-center w-full pl-2 pr-1 text-sm text-left rounded-md text-blueGray-200 font-small hover:text-blueGray-50 group focus:outline-none" aria-controls="sub-menu-2" aria-expanded="false">
                <UiIconReports class="flex-shrink-0 w-6 h-6 mr-3 text-blueGray-200 group-hover:text-blueGray-50" />
                <span class="flex-1 text-lg">Reports</span>
            </button>
        </template>

        <template v-slot:content>
            <div class="px-4 space-y-2 shadow-inner" id="sub-menu-2">
                <NuxtLink to="/dashboard/cost-savings-evaluation" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/cost-savings-evaluation') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Cost Savings Analysis
                </NuxtLink>

                <NuxtLink to="/dashboard/demonstration-request" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/demonstration-request') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Demonstration Requests
                </NuxtLink>

                <NuxtLink to="/dashboard/distributorship-application" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/distributorship-application') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Distributorship Applications
                </NuxtLink>

                <NuxtLink to="/dashboard/guarantee-trial-offer-program" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/guarantee-trial-offer-program') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Guarantee Trial Offer Program
                </NuxtLink>

                <NuxtLink to="/dashboard/repair-return" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/repair-return') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Repairs &amp; Returns
                </NuxtLink>

                <NuxtLink to="/dashboard/technical-questions" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/technical-questions') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Technical Support Questions
                </NuxtLink>

                <NuxtLink to="/dashboard/warranty-registration" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/warranty-registration') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Warranty Registrations
                </NuxtLink>

                <!--<NuxtLink to="#" @click.native="setMobileDashboardSidebarStatus(false)" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Contact Us
                </NuxtLink>-->
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