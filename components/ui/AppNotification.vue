// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <UiAppTransition v-if="show">
    <div
      class="fixed inset-0 z-50 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
    >
      <!--
    Notification panel, show/hide based on alert state.

    Entering: "transform ease-out duration-300 transition"
      From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      To: "translate-y-0 opacity-100 sm:translate-x-0"
    Leaving: "transition ease-in duration-100"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <!-- Heroicon name: outline/inbox -->
              <svg
                class="w-6 h-6 text-blueGray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-gray-900">
                {{ title }}
              </p>
              <p class="mt-1 text-sm text-gray-500">{{ content }}</p>
              <slot name="footer"></slot>
            </div>
            <div class="flex flex-shrink-0 ml-4">
              <button
                @click="$emit('close')"
                class="inline-flex bg-white rounded-md text-blueGray-400 hover:text-blueGray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span class="sr-only">Close</span>
                <!-- Heroicon name: solid/x -->
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
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
      type: String
    },
    content: {
      type: String
    }
  }
};
</script>
