<template>
  <div>
    <div class="absolute z-30 w-screen max-w-md px-2 mt-3 overflow-y-auto transform -translate-x-1/2 left-1/2 sm:px-0 lg:hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
          <UiAppAccordionSidebarMenu>
            <template v-slot:header>
              <button type="button" class="flex items-center px-2 py-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-400" aria-controls="sub-menu-2" aria-expanded="false">
                  <span class="flex-1 text-lg">Products</span>
              </button>
            </template>
            <template v-slot:content>
              <div class="px-4 space-y-2 shadow-inner" id="sub-menu-2">
                <NuxtLink to="/series" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Series
                </NuxtLink>

                <NuxtLink to="/products" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Products
                </NuxtLink>
              </div>
            </template>
          </UiAppAccordionSidebarMenu>
          <NuxtLink to="/find-distributors" class="flex items-center px-2 py-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-400">
            <span class="flex-1 text-lg">Find Distributors</span>
          </NuxtLink>
          <UiAppAccordionSidebarMenu>
            <template v-slot:header>
              <button type="button" class="flex items-center px-2 py-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-400" aria-controls="sub-menu-2" aria-expanded="false">
                <span class="flex-1 text-lg">Company Profile</span>
              </button>
            </template>
            <template v-slot:content>
              <div class="px-4 space-y-2 shadow-inner" id="sub-menu-2">
                <NuxtLink to="/company-profile/america" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                America
                </NuxtLink>

                <NuxtLink to="/company-profile/japan" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Japan
                </NuxtLink>
              </div>
            </template>
          </UiAppAccordionSidebarMenu>
          <UiAppAccordionSidebarMenu>
            <template v-slot:header>
              <button type="button" class="flex items-center px-2 py-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-400" aria-controls="sub-menu-2" aria-expanded="false">
                <span class="flex-1 text-lg">Media</span>
              </button>
            </template>
            <template v-slot:content>
              <div class="px-4 space-y-2 shadow-inner" id="sub-menu-2">
                <NuxtLink to="/videos" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Videos
                </NuxtLink>

                <NuxtLink to="/news" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                News
                </NuxtLink>

                <NuxtLink to="/events" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Events
                </NuxtLink>

                <NuxtLink to="/ads" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Ads
                </NuxtLink>
              </div>
            </template>
          </UiAppAccordionSidebarMenu>
          <UiAppAccordionSidebarMenu>
            <template v-slot:header>
              <button type="button" class="flex items-center px-2 py-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-400" aria-controls="sub-menu-2" aria-expanded="false">
                <span class="flex-1 text-lg">Support</span>
              </button>
            </template>
            <template v-slot:content>
              <div class="px-4 space-y-2 shadow-inner" id="sub-menu-2">
                <NuxtLink to="/videos" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Technical Support Questions
                </NuxtLink>

                <NuxtLink to="/videos" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Contact Us
                </NuxtLink>

                <NuxtLink to="/news" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Application for Distributorship
                </NuxtLink>

                <NuxtLink to="/events" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Warranty Registration
                </NuxtLink>

                <NuxtLink to="/ads" class="block px-2 py-1 mt-1 text-lg font-medium transition duration-300 ease-in-out transform-gpu text-blueGray-300 focus:outline-none focus:text-white focus:bg-blueGray-700">
                Repair Return Form
                </NuxtLink>
              </div>
            </template>
          </UiAppAccordionSidebarMenu>
          <UiAppButton v-if="!$auth.loggedIn" @click="logIn" className="primary" label="Login" />
          <UiAppButton v-if="$auth.loggedIn" @click="logout" className="tertiary" label="Logout"/>
        </div>

        <div class="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
          <div class="flow-root">
            <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
              <!-- Heroicon name: outline/play -->
              <svg class="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="ml-3">Watch Demo</span>
            </a>
          </div>

          <div class="flow-root">
            <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
              <!-- Heroicon name: outline/phone -->
              <svg class="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="ml-3">Contact Sales</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
   logIn(){
       this.$auth.loginWith('auth0')
   },
   logout(){
       this.$auth.logout()
   }
  },
}
</script>