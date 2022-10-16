// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <UiAppTransition v-if="show">
    <div class="fixed inset-0 z-20 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div @click="$emit('close')" class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 opacity-75 bg-blueGray-500"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" >&#8203;</span>

        <div
          class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg w-full lg:w-auto sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="sm:flex sm:items-start">
            <div v-if="type == 'red'" class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
              <UiIconAlert class="text-red-600"/>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg font-medium leading-6 text-gray-900"
                id="modal-headline"
              >
                {{ title }}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500" v-if="content">
                  {{ content }}
                </p>
                <slot />
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex">
            <button
              v-if="!withoutConfirmButton"
              @click="$emit('confirm')"
              type="button"
              :class="
                `w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`
              "
            >
              {{ confirmButtonLabel }}
            </button>
            <button
              @click="$emit('close')"
              class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              {{ cancelButtonLabel }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </UiAppTransition>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    type: {
      type: String,
      default: "red"
    },
    cancelButtonLabel: {
      type: String,
      default: "Cancel"
    },
    confirmButtonLabel: {
      type: String,
      default: "Confirm"
    },
    withoutConfirmButton: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const handleEscape = event => {
      if (event.key === "Escape") this.$emit("close");
    };
    document.addEventListener("keyup", handleEscape);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  }
};
</script>
