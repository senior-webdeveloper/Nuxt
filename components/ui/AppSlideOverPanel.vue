// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <div class="overflow-hidden">
    <div :class="{'opacity-75 z-10': show, 'z--1 invisible': !show}" class="fixed inset-0 w-full transition-opacity duration-300 ease-linear opacity-0 bg-blueGray-500" @click="$emit('close')"></div>  
    <UiAppTransitionSlideFromRight>
          <section class="fixed inset-y-0 right-0 z-10 flex justify-end overflow-hidden" aria-labelledby="slide-over-heading" v-if="show">
            <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-300"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-300"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
            <div class="w-screen max-w-5xl">
              <div class="flex flex-col h-full bg-white divide-y shadow-xl divide-blueGray-200">
                <div class="flex flex-col flex-1 min-h-0 py-6 overflow-y-scroll">
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 id="slide-over-heading">
                        {{ title }}
                      </h2>
                      <div class="flex items-center ml-3 h-7">
                        <button class="p-1 transition duration-300 ease-in-out border-2 border-transparent rounded-full transform-gpu hover:scale-110 text-blueGray-300 hover:text-blueGray-400 focus:outline-none focus:text-blueGray-300 focus:border-blueGray-400" @click="$emit('close')">
                          <span class="sr-only">Close panel</span>
                          <UiIconClose />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative flex-1 px-4 sm:px-6">
                    <slot></slot>
                  </div>
                </div>
                <slot name="footer"></slot>
              </div>
            </div>
          </section>
    </UiAppTransitionSlideFromRight>
  </div>
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
      required: false
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

<style>
.z--1{
  z-index: -1;
}
</style>
