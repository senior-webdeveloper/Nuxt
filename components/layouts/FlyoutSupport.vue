<template>
  <div  class="" v-click-outside="close">

    <div>
      <div class="relative z-10">
        <div>
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
          <button
            @click="toggle"
            class="px-2 py-1 text-lg font-medium transition duration-300 ease-in-out text-nsk-primary transform-gpu hover:scale-110 hover:border-b hover:border-nsk-primary bg-primary focus:outline-none focus:text-white focus:bg-nsk-primary"
            aria-label="MenuSupport"
            aria-haspopup="true"
          >
            <div>
              SUPPORT
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
            <div class="flex flex-col justify-between p-3 -m-3">
              <div class="flex md:h-full lg:flex-col">
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      Ask us
                    </p>
                    <div class="mt-2 ml-2 space-y-2">
                      <div>
                      <NuxtLink to="/faq" ><p class="mt-1 text-sm text-gray-500 hover:text-gray-700">
                        FAQ
                      </p></NuxtLink>
                      </div>
                      <div>
                      <NuxtLink to="/support/technical-questions" ><p class="mt-1 text-sm text-gray-500 hover:text-gray-700">
                        Technical Support Questions
                      </p></NuxtLink>
                      </div>
                      <div>
                      <NuxtLink to="/support/distributorship-application" ><p class="mt-1 text-sm text-gray-500 hover:text-gray-700">
                        Application for Distributorship
                      </p></NuxtLink>
                      </div>
                      <div>
                      <NuxtLink to="/support/contact-us" ><p class="mt-1 text-sm text-gray-500 hover:text-gray-700">
                        Contact Support
                      </p></NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NuxtLink to="/support/cost-savings-evaluation" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex px-2 text-center md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <UiIconDocumentText class="flex-shrink-0 w-8 h-8 text-nsk-primary" />
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      Cost Savings Analysis
                    </p>
                    <!-- <p class="mt-1 text-sm text-gray-500">
                      Lorem ipsum ipsum ipsum ipsum ipsum
                    </p> -->
                  </div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/support/warranty-registration" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex px-2 text-center md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <UiIconDocumentText class="flex-shrink-0 w-8 h-8 text-nsk-primary" />
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      Warranty Registration
                    </p>
                    <!-- <p class="mt-1 text-sm text-gray-500">
                      Lorem ipsum ipsum ipsum ipsum.
                    </p> -->
                  </div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/support/repair-return-form" class="flex flex-col justify-between p-3 -m-3 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50">
              <div class="flex text-center md:h-full lg:flex-col">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-md text-nsk-primary sm:h-12 sm:w-12">
                    <UiIconDocumentText class="flex-shrink-0 w-8 h-8 text-nsk-primary" />
                  </div>
                </div>
                <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                  <div>
                    <p class="text-base font-medium text-gray-900">
                      Repair Return Form
                    </p>
                    <!-- <p class="mt-1 text-sm text-gray-500">
                      Lorem ipsum ipsum ipsum ipsum.
                    </p> -->
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