<template>
  <UiAppTransition v-if="show">
    <div class="fixed inset-0 z-20">
      <div class="items-end justify-center block px-4 md:px-32">
        <div @click="$emit('close')" class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 opacity-75 bg-blueGray-500"></div>
        </div>
        <div class="h-full py-32 md:items-center md:py-10">
          <div class="aspect-w-16 aspect-h-9">
            <script src="https://unpkg.com/hls.js/dist/hls.min.js"></script>
            <div class="video-container">
              <video controls class="video" width="100%" height="100%" id="cover-video"></video>
              <script>
                  var hls = new Hls();
                  hls.loadSource('{{video.streamHls}}');
                  hls.attachMedia(document.getElementById("cover-video"));
              </script>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UiAppTransition>

</template>
<script>
export default {
  props: ["show", "video"],
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
