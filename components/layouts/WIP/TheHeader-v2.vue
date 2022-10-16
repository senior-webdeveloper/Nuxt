// CD (KO on 20210228): component used in only "/Layouts/TheHeader.vue"


<template>
  <div class="sticky top-0 z-20">
    <nav class="bg-blueGray-800">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center uppercase">
            <div class="flex-shrink-0">
              <!-- <img
                class="w-8 h-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
                alt="NSK Logo"
              > -->
              <div class="text-4xl text-white transition duration-300 ease-in-out cursor-pointer transform-gpu hover:scale-110">
                <a href="/">NSK</a></div>
            </div>
            <div class="hidden lg:block">
              <div class="flex items-baseline ml-10">
                <a
                  href="#"
                  class="px-2 py-1 text-sm font-medium text-white transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b bg-blueGray-900 focus:outline-none focus:text-white focus:bg-blueGray-700"
                >Products</a>
                <a
                  href="#"
                  class="px-2 py-1 ml-4 text-sm font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
                >Tech Info</a>
                <a
                  href="#"
                  class="px-2 py-1 ml-4 text-sm font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
                >Find Distributors</a>
                <a
                  href="#"
                  class="px-2 py-1 ml-4 text-sm font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
                >Company Profile</a>
                <a
                  href="#"
                  class="px-2 py-1 ml-4 text-sm font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
                >Media</a>
                <a
                  href="#"
                  class="px-2 py-1 ml-4 text-sm font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
                >Support</a>
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="flex items-center ml-4 md:ml-6">
              <!-- Search button -->
              <UiAppSearchBarFilter />
              <!--<LayoutsTheUserMenu />-->
            </div>
          </div>
          <div class="flex items-center ml-4 md:ml-6 lg:hidden">
            <!-- Mobile search button -->
            <UiAppSearchBarFilter />
            <!-- Mobile menu button -->
            <button @click="toggle" class="p-1 transition duration-300 ease-in-out border-2 border-transparent rounded-full transform-gpu hover:scale-110 text-blueGray-300 hover:text-blueGray-400 focus:outline-none focus:text-blueGray-300 focus:border-blueGray-400" aria-label="Menu">
              <UiIconMenu :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" />
              <UiIconClose :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" />
            </button>
          </div>
        </div>
      </div>
      <div :class="[isOpen ? '' : 'hidden', 'lg:hidden']">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="#"
            class="block px-2 py-1 text-base font-medium text-white transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b bg-blueGray-900 focus:outline-none focus:text-white focus:bg-blueGray-700"
          >Products</a>
          <a
            href="#"
            class="block px-2 py-1 mt-1 text-base font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
          >Tech Info</a>
          <a
            href="#"
            class="block px-2 py-1 mt-1 text-base font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
          >Find Distributors</a>
          <a
            href="#"
            class="block px-2 py-1 mt-1 text-base font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
          >Company Profile</a>
          <a
            href="#"
            class="block px-2 py-1 mt-1 text-base font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
          >Media</a>
          <a
            href="#"
            class="block px-2 py-1 mt-1 text-base font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-300 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
          >Support</a>
        </div>
        <div class="pt-4 pb-3 border-t border-blueGray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt
              >
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Mike Gabris</div>
              <div class="mt-1 text-sm font-medium leading-none text-blueGray-400">M.Gabris@nskamericacorp.com</div>
            </div>
          </div>
          <div class="px-2 mt-3">
            <a
              href="#"
              class="block px-2 py-1 text-base font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-400 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
            >Your Profile</a>
            <a
              href="#"
              class="block px-2 py-1 mt-1 text-base font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-400 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
            >Settings</a>
            <a
              href="#"
              class="block px-2 py-1 mt-1 text-base font-medium transition duration-300 ease-in-out transform-gpu hover:scale-110 hover:border-b text-blueGray-400 hover:text-white focus:outline-none focus:text-white focus:bg-blueGray-700"
            >Sign out</a>
          </div>
        </div>
      </div>
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
    }
  }
}
</script>