//New transitions for mobile sidemenu

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex h-screen overflow-hidden bg-blueGray-700">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->

    <div class="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <!-- <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div> -->

      <div ref="mobileSidebarOverlay" class="fixed inset-0 transition-opacity duration-300 ease-linear opacity-0 bg-blueGray-500" :class="{'opacity-75': getMobileDashboardSidebarState}" aria-hidden="true"></div>
      <!-- CD (CT on 20210722) - code from EM affecting the z-index but doesn't affect overall function of the slideover
      
      <div ref="mobileSidebarOverlay" class="fixed inset-0 bg-gray-600" :class="{'bg-opacity-75':showDashboardSideInMobileView,'bg-opacity-1':!showDashboardSideInMobileView}" aria-hidden="true"></div>
      END OF CODE -->
        <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
        <UiAppTransitionSlideFromLeft>
          <div v-if="getMobileDashboardSidebarState" class="relative flex flex-col flex-1 w-full max-w-xs bg-white">
          <!-- CD (CT on 20210722) - code from EM affecting the z-index but doesn't affect overall function of the slideover
          <div v-if="showDashboardSideInMobileView" :class="{'ease-in opacity-100':showDashboardSideInMobileView, 'ease-out opacity-0':!showDashboardSideInMobileView}" class="relative flex flex-col flex-1 w-full max-w-xs transition duration-500 bg-white">
            END OF CODE -->
          <!--
            Close button, show/hide based on off-canvas menu state.

            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
        
              <div class="absolute top-0 right-0 z-10 pt-2 -mr-12">
                <UiAppButtonClose @closeMobileLayoutSidebar="setMobileDashboardSidebarStatus(false)"/>
              </div>
          
            <LayoutsTheDashboardSidebar />
          </div>
        </UiAppTransitionSlideFromLeft>
        <!-- </transition> -->

      <div class="z-0 flex-shrink-0 w-14" @click="setMobileDashboardSidebarStatus(false)">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>


    <!-- Static sidebar for desktop -->
    <div class="hidden overflow-hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col overflow-hidden w-72">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <LayoutsTheDashboardSidebar />
      </div>
    </div>

    <div class="flex flex-col flex-1 w-0 overflow-hidden" :class="{'z-50':!getMobileDashboardSidebarState}">
      <div class="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
        <button @click="setMobileDashboardSidebarStatus(true)" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-full text-gray-400 hover:text-blueGray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open sidebar</span>
          <UiIconMenu class="text-white"/>
        </button>
      </div>
      <main class="relative flex-1 overflow-hidden overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div>
              <nuxt />
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="resetNotification"
    />
  </div>
</template>

<script>
import notificationMixin from '~/mixins/notification'
import {mapGetters, mapActions} from 'vuex';
export default {
  head: {
    titleTemplate: '%s NSK Dashboard',
  },
  middleware: ["auth"],
  mixins: [notificationMixin],
  scrollToTop: true,
  computed: {
     ...mapGetters('modalState/mobileDashboardSidebar',['getMobileDashboardSidebarState'])
  },
  methods: {
     ...mapActions('modalState/mobileDashboardSidebar',['setMobileDashboardSidebarStatus'])
  },
  mounted () {
     let $this = this
     let handleClickOutSide = function(){
         if($this.getMobileDashboardSidebarState){
            $this.setMobileDashboardSidebarStatus(false)
         }
     }
     this.$refs.mobileSidebarOverlay.addEventListener('click', handleClickOutSide)

     this.$once("hook:beforeDestroy", () => {
      this.$refs.mobileSidebarOverlay.removeEventListener("click", handleClickOutSide);
    });
  },
}
</script>

<style>
.bg-overlay{
  background-color: rgba(100, 116, 139) !important;
}
</style>
