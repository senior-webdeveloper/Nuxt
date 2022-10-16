<template>
  <div class="sticky top-0 z-20 shadow">
    <!-- If banner status is active, show banner. else, hide --> 
    <LayoutsBanner />
    <nav v-click-outside="close" class="bg-white border-b">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center uppercase">
            <div class="flex-shrink-0">
              <UiLogoNskB />
            </div>
            <div class="hidden lg:block">
              <div class="flex items-baseline ml-10 space-x-2">
                <LayoutsFlyoutProducts />
                <LayoutsFlyoutSolutions />
                <!--<LayoutsFlyoutTechInfo />-->
                <NuxtLink to="/find-distributors"
                  class="px-2 py-1 ml-4 text-lg font-medium transition duration-300 ease-in-out text-nsk-primary transform-gpu hover:scale-110 hover:border-b hover:border-nsk-primary hover:text-blue-800 focus:outline-none focus:text-white focus:bg-nsk-primary">
                  Find Distributors
                </NuxtLink>
                <LayoutsFlyoutCompanyProfile />
                <LayoutsFlyoutMedia />
                <LayoutsFlyoutSupport />
               
                <!-- <div
                  v-if="!$auth.loggedIn"
                  @click="logIn"
                  class="px-2 py-1 ml-4 text-lg font-medium transition duration-300 ease-in-out cursor-pointer text-nsk-primary transform-gpu hover:scale-110 hover:border-b hover:border-nsk-primary hover:text-blue-800 focus:outline-none focus:text-white focus:bg-nsk-primary">
                  LOGIN
                </div>
                <div
                  v-if="$auth.loggedIn"
                  @click="logout"
                  class="px-2 py-1 ml-4 text-lg font-medium transition duration-300 ease-in-out cursor-pointer text-nsk-primary transform-gpu hover:scale-110 hover:border-b hover:border-nsk-primary hover:text-blue-800 focus:outline-none focus:text-white focus:bg-nsk-primary">
                  LOGOUT
                </div> -->
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="flex items-center ml-4 md:ml-6">
              <!-- Search button -->
              <UiAppSearchBarFilter />
              <!--<LayoutsTheUserMenu  v-if="$auth.loggedIn" />-->
            </div>
          </div>
          <div class="flex items-center ml-4 space-x-1 md:ml-6 lg:hidden">
            <!-- Mobile search button -->
            <UiAppSearchBarFilter />
            <!-- Mobile menu button -->
            <button @click="toggle" class="p-1 text-gray-500 transition duration-300 ease-in-out border-2 border-transparent rounded-full transform-gpu hover:scale-110 hover:text-blueGray-400 focus:outline-none focus:text-blueGray-300 focus:border-blueGray-400" aria-label="Menu">
              <UiIconMenu :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" />
              <UiIconClose :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" />
            </button>
          </div>
        </div>
      </div>

      <!-- Start of Mobile. Mobile menu -->
      <UiAppTransition>
        <!-- <div :class="[isOpen ? '' : 'hidden', 'lg:hidden']"> -->
        <div v-show="isOpen">
          <div class="absolute z-30 w-screen h-screen max-w-md px-2 mt-3 overflow-y-auto transform -translate-x-1/2 left-1/2 sm:px-0 lg:hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                <div class="py-1 pr-2" role="none">
                  <UiAppAccordionSidebarMenu>
                    <template v-slot:header>
                      <button type="button" class="flex px-4 py-2 text-sm text-gray-700 items-centerblock" aria-controls="sub-menu-2" aria-expanded="false">
                        <span class="flex-1 text-lg">Products</span>
                      </button>
                    </template>
                    <template v-slot:content>
                      <div class="px-4 space-y-3" id="sub-menu-2">
                        <NuxtLink to="/series" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">
                        Series
                        </NuxtLink>
                        <NuxtLink to="/products" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                        Products
                        </NuxtLink>
                      </div>
                    </template>
                  </UiAppAccordionSidebarMenu>
                  <UiAppAccordionSidebarMenu>
                    <template v-slot:header>
                      <button type="button" class="flex px-4 py-2 text-sm text-gray-700 items-centerblock" aria-controls="sub-menu-2" aria-expanded="false">
                        <span class="flex-1 text-lg">Solutions</span>
                      </button>
                    </template>
                    <template v-slot:content>
                      <div class="px-4 space-y-3" id="sub-menu-2">
                        <NuxtLink to="/solutions/industry-solutions" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">
                        Industry Locations
                        </NuxtLink>
                        <NuxtLink to="/solutions/application-examples" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                        Application Examples
                        </NuxtLink>
                        <NuxtLink to="/solutions/work-materials" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                        Work Material
                        </NuxtLink>
                      </div>
                    </template>
                  </UiAppAccordionSidebarMenu>
                  <NuxtLink to="/find-distributors" @click.native="isOpen=false" class="block px-4 py-2 text-lg text-gray-700">
                    Find Distributors
                  </NuxtLink>
                  <UiAppAccordionSidebarMenu>
                  <template v-slot:header>
                    <button type="button" class="flex px-4 py-2 text-sm text-gray-700 items-centerblock" aria-controls="sub-menu-2" aria-expanded="false">
                      <span class="flex-1 text-lg">Company Profile</span>
                    </button>
                  </template>
                  <template v-slot:content>
                    <div class="px-4 space-y-3" id="sub-menu-2">
                      <NuxtLink to="/company-profile/america" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      America
                      </NuxtLink>
                      <NuxtLink to="/company-profile/japan" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Japan
                      </NuxtLink>
                    </div>
                  </template>
                  </UiAppAccordionSidebarMenu>
                  <UiAppAccordionSidebarMenu>
                  <template v-slot:header>
                    <button type="button" class="flex px-4 py-2 text-sm text-gray-700 items-centerblock" aria-controls="sub-menu-2" aria-expanded="false">
                      <span class="flex-1 text-lg">Media</span>
                    </button>
                  </template>
                  <template v-slot:content>
                    <div class="px-4 space-y-3" id="sub-menu-2">
                      <NuxtLink to="/videos" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Videos
                      </NuxtLink>
                      <NuxtLink to="/news" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      News
                      </NuxtLink>
                      <NuxtLink to="/events" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Events
                      </NuxtLink>
                      <NuxtLink to="/ads" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Ads
                      </NuxtLink>
                    </div>
                  </template>
                  </UiAppAccordionSidebarMenu>
                  <UiAppAccordionSidebarMenu>
                  <template v-slot:header>
                    <button type="button" class="flex items-center px-4 py-2 text-sm text-gray-700" aria-controls="sub-menu-2" aria-expanded="false">
                      <span class="flex-1 text-lg">Support</span>
                    </button>
                  </template>
                  <template v-slot:content>
                    <div class="px-4 space-y-3" id="sub-menu-2">
                      <NuxtLink to="/faq" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      FAQ
                      </NuxtLink>
                      <NuxtLink to="/support/contact-us" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Contact Us
                      </NuxtLink>
                      <NuxtLink to="/support/cost-savings-evaluation" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Cost Savings Analysis
                      </NuxtLink>
                      <NuxtLink to="/support/technical-questions" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Technical Support Questions
                      </NuxtLink>
                      <NuxtLink to="/support/distributorship-application" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Application for Distributorship
                      </NuxtLink>
                      <NuxtLink to="/support/warranty-registration" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Warranty Registration
                      </NuxtLink>
                      <NuxtLink to="/support/repair-return-form" @click.native="isOpen=false" class="block px-4 text-sm text-gray-700">
                      Repair Return Form
                      </NuxtLink>
                    </div>
                  </template>
                  </UiAppAccordionSidebarMenu>
                  
                </div>
                <div class="py-1" role="none" v-if="$auth.loggedIn">
                  <div class="px-4 py-2">
                  <!--<div class="text-lg font-medium leading-none text-blueGray-400">Mike Gabris</div>
                  <div class="mt-1 text-sm font-medium leading-none text-blueGray-400">M.Gabris@nskamericacorp.com</div>-->
                  </div>
                  <a href="/dashboard/profile" @click="isOpen=false" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-6">Your Profile</a>
                  <a href="/dashboard" @click="isOpen=false" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-6">Dashboard</a>
                </div>
                <div>
                  <UiAppButton v-if="!$auth.loggedIn" @click="logIn" className="primary-full" label="Login" />
                  <UiAppButton v-if="$auth.loggedIn" @click="logout" className="tertiary-full" label="Logout"/>
                </div>
              </div>
              <div class="px-5 py-5 space-y-6 text-white bg-nsk-primary sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                <div class="flow-root">
                  <a href="tel:8005854675" title="Call us" class="flex items-center p-3 -m-3 text-base font-medium transition duration-300 ease-in-out rounded-md hover:bg-gray-100">
                    <UiIconPhone class="flex-shrink-0 w-6 h-6" />
                    <span class="ml-2">(800) 585-4675</span>
                  </a>
                </div>
                <div class="flow-root">
                  <a href="mailto:info@nskamericacorp.com" title="Email" class="flex items-center p-3 -m-3 text-base font-medium transition duration-300 ease-in-out rounded-md hover:bg-gray-100">
                    <UiIconMailv2 class="flex-shrink-0 w-6 h-6" />
                    <span class="ml-2">info@nskamericacorp.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiAppTransition>
      <!-- End of Mobile -->
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
   toggle () {
      this.isOpen = !this.isOpen
   },
   close() {
      this.isOpen = false;
   },
   logIn(){
       this.$auth.loginWith('auth0')
   },
   logout(){
       this.$auth.logout()
   }
  },
  directives: {
    "click-outside": {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }

          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble;
        const handler = e => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        // add Event Listeners
        document.addEventListener("click", handler);
      },
      unbind: function(el, binding) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  },
}
</script>