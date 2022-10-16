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
              MEDIA
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
            <NuxtLink to="/videos" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex px-2 text-center md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <UiIconPlay class="flex-shrink-0 w-8 h-8 text-nsk-primary" />
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      Videos
                    </p>
                    <!--<p class="mt-1 text-sm text-gray-500">
                      Duis aute irure dolor in reprehenderit
                    </p>-->
                  </div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/news" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex px-2 text-center md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <UiIconNewspaper class="flex-shrink-0 w-8 h-8 text-nsk-primary" />
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      News
                    </p>
                    <!--<p class="mt-1 text-sm text-gray-500">
                      Duis aute irure dolor in reprehenderit
                    </p>-->
                  </div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/events" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex px-2 text-center md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <UiIconCalendar class="flex-shrink-0 w-8 h-8 text-nsk-primary" />
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      Events
                    </p>
                    <!--<p class="mt-1 text-sm text-gray-500">
                      Duis aute irure dolor in reprehenderit
                    </p>-->
                  </div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/ads" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex px-2 text-center md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <UiIconPhoto class="flex-shrink-0 w-8 h-8 text-nsk-primary" />
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      Ads
                    </p>
                    <!--<p class="mt-1 text-sm text-gray-500">
                      Duis aute irure dolor in reprehenderit
                    </p>-->
                  </div>
                </div>
              </div>
            </NuxtLink>
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