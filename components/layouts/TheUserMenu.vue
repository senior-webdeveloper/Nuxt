<template>
  <!-- Profile dropdown -->
  <div class="relative ml-3" v-click-outside="close">
    <div>
      <button
        @click="toggle"
        class="flex items-center max-w-xs text-sm text-white transition duration-300 ease-in-out rounded-full transform-gpu hover:scale-110 focus:outline-none focus:shadow-solid"
        id="user-menu"
        aria-label="User menu"
        aria-haspopup="true"
      >
        <img
          class="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt
        />
      </button>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="isOpen"
        class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
      >
        <div
          class="py-1 bg-white rounded-md shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100"
            role="menuitem"
            >Your Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100"
            role="menuitem"
            >Settings</a
          >
          <a
           @click="$auth.logout()"
            href="#"
            class="block px-4 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100"
            role="menuitem"
            >Sign out</a
          >
        </div>
      </div>
    </transition>
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
