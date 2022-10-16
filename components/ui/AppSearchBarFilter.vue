// CD (KO on 20210228): component used in the UI as part of another component


<template>
  <div class="" v-click-outside="close">
    <div>
      <div class="relative z-10">
        <div>
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
          <button
            @click="toggle"
            class="p-1 text-gray-500 transition duration-300 ease-in-out border-2 border-transparent rounded-full transform-gpu hover:scale-110 hover:text-blueGray-400 focus:outline-none focus:text-blueGray-300 focus:border-blueGray-400"
            aria-label="Search"
            aria-haspopup="true"
          >
            <UiIconSearch />
          </button>
        </div>
      </div>
        <div :class="{'opacity-75 z-10': isOpen, 'z--1 invisible': !isOpen}" class="fixed inset-0 w-full transition-opacity duration-300 ease-linear opacity-0 bg-blueGray-500" @click="close"></div>

      <UiAppTransition>
        <div class="absolute inset-x-0 z-10 mx-10 mt-3 transform shadow-lg bg-" v-show="isOpen">
          <div class="bg-blueGray-100">
            <div class="w-full px-4 py-8 pt-8 mx-auto sm:px-6 lg:px-8">
              <LayoutsTheSearchBar :isOpen="isOpen"/>
            </div>
          </div>
        </div>
      </UiAppTransition>
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
  }
};
</script>