// CD (CT on 20210623): component used in the UI as part of another component

<template>
  <div  class="" v-click-outside="close">

    <div>
      <div class="relative z-10">
        <div>
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
          <button
            @click="toggle"
            class="px-2 py-1 text-lg font-medium transition duration-300 ease-in-out text-nsk-primary transform-gpu hover:scale-110 hover:border-b hover:border-nsk-primary bg-primary focus:outline-none focus:text-white focus:bg-nsk-primary"
            aria-label="MenuProducts"
            aria-haspopup="true"
          >
            <div>
              TECH INFO
            </div>
          </button>
        </div>
      </div>

      <transition
      enter-active-class="transition duration-100 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div class="absolute inset-x-0 z-10 mx-10 mt-3 transform shadow-lg" v-show="isOpen">
        <div class="bg-blueGray-100">
          <div class="grid px-4 py-6 mx-auto max-w-7xl gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:grid-cols-4 lg:px-8">
            <a href="#" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/chart-bar -->
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      LOREM
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Duis aute irure dolor in reprehenderit
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href="#" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/cursor-click -->
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      LOREM
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Duis aute irure dolor in reprehenderit
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href="#" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/shield-check -->
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      LOREM
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Duis aute irure dolor in reprehenderit
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href="#" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      LOREM
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Duis aute irure dolor in reprehenderit
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <LayoutsFlyoutFooter />
      </div>
      </transition>
    </div>
  

  </div>
</template>


<script>
export default {
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

  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
    }
  },
  watch: {
    $route() {
      this.isOpen = false;
    }
  },
};
</script>