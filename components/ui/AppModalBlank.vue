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
          class="inline-block max-w-3xl px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <slot name="modalContent" />       
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
