<template>
    <UiAppAccordionSidebarMenu>
        <template v-slot:header>
            <button type="button" class="flex items-center w-full pl-2 pr-1 text-sm text-left rounded-md text-blueGray-200 font-small hover:text-blueGray-50 group focus:outline-none" aria-controls="sub-menu-2" aria-expanded="false">
                <UiIconTemplate />
                <span class="flex-1 text-lg">CMS</span>
            </button>
        </template>
        <template v-slot:content>
            <div class="px-4 space-y-2 shadow-inner" id="sub-menu-2">
                <NuxtLink to="/dashboard/admin/cms/users" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/users') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Users
                </NuxtLink>

                <NuxtLink to="/dashboard/admin/cms/find-distributors" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/find-distributors') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Find Distributors
                </NuxtLink>

                <NuxtLink to="/dashboard/admin/cms/forms" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/forms') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Forms
                </NuxtLink>

                <NuxtLink to="/dashboard/admin/cms/news" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/news') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                News
                </NuxtLink>

                <NuxtLink to="/dashboard/admin/cms/events" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/events') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Events
                </NuxtLink>

                <NuxtLink to="/dashboard/admin/cms/videos" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/videos') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Videos
                </NuxtLink>

                <NuxtLink to="/dashboard/admin/cms/ads" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/ads') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Ads
                </NuxtLink>

                <NuxtLink to="/dashboard/admin/cms/faq" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/faq') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                FAQ
                </NuxtLink>

                <NuxtLink to="/dashboard/admin/cms/resources" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/resources') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Resources
                </NuxtLink>

                <!--<NuxtLink to="/dashboard/admin/cms/resource-categories" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('resource-categories') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Resource Categories
                </NuxtLink>-->

                <NuxtLink to="/dashboard/admin/cms/banner" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/banner') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Banner
                </NuxtLink>

                <NuxtLink to="/dashboard/admin/cms/tags" @click.native="setMobileDashboardSidebarStatus(false)" :class="{ 'sidebar-active': $route.path.includes('/dashboard/admin/cms/tags') }" class="flex items-center w-full py-2 pr-2 text-sm transition duration-300 ease-in-out rounded-md transform-gpu hover:scale-105 text-blueGray-200 font-small group pl-11 hover:text-gray-900 hover:bg-gray-50">
                Tags
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