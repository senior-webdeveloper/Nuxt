// CD (KO on 20210228): component used in only "/pages/index.vue"


// CD (KO on 20210228): component used in only "/pages/index.vue" // Use
AppCardPortrait1

<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h2 class="pre-header">
            Featured Products
          </h2>
          <!--<p class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>-->
        </div>
        <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
        <!--image="https://via.placeholder.com/520"-->
          <UiAppCardPortrait1
            :type="{ whole: false, line: true }"
            title="iSpeed5"
            subtitle=""
            image="https://cinnamon.nyc3.cdn.digitaloceanspaces.com/nsk/series_emaxevo.jpg"
            imgAlt="Hand Tools"
            content="Fully tool-changeable electric spindles transform CNC machines into high-speed machining centers."
          >
            <template v-slot:footer>
              <div class="flex justify-end p-2">
                <UiAppButton className="icon" :onClick="consoleClick">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </UiAppButton>
              </div>
            </template>
          </UiAppCardPortrait1>
          <UiAppCardPortrait1
            :type="{ whole: false, line: true }"
            title="Sheenus ZERO"
            subtitle=""
            image="https://cinnamon.nyc3.cdn.digitaloceanspaces.com/nsk/series_emaxevo.jpg"
            imgAlt="Hand Tools"
            content="Ultrasonic polishers rapidly remove hard layers of EDM deposits and polish complex corners and ribs."
          >
            <template v-slot:footer>
              <div class="flex justify-end p-2">
                <UiAppButton className="icon" :onClick="consoleClick">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </UiAppButton>
              </div>
            </template>
          </UiAppCardPortrait1>
          <UiAppCardPortrait1
            :type="{ whole: false, line: true }"
            title="HES-510"
            subtitle=""
            image="https://cinnamon.nyc3.cdn.digitaloceanspaces.com/nsk/series_emaxevo.jpg"
            imgAlt="Hand Tools"
            content="Ultra-precision, high-speed HES510 Spindles allow you to use your existing equipment for a much larger variety of operations."
          >
            <template v-slot:footer>
              <div class="flex justify-end p-2">
                <UiAppButton className="icon" :onClick="consoleClick">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </UiAppButton>
              </div>
            </template>
          </UiAppCardPortrait1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // CD (EV on 20210302): onClick function for UiAppButton
    consoleClick() {
      console.log("Button clicked");
    }
  }
};
</script>
