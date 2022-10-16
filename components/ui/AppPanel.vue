<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- <div v-if="value == 1">
      first
      <br />

      <UiAppButton className="primary" label="next" @click="handleInput(2)" />
    </div>
    <div v-if="value == 2">
      second
      <br />
      <UiAppButton className="primary" label="prev" @click="handleInput(1)" />
      <UiAppButton className="primary" label="next" @click="handleInput(3)" />
    </div>
    <div v-if="value == 3">
      third
      <br />
      <UiAppButton className="primary" label="prev" @click="handleInput(2)" />
    </div> -->
    <nav aria-label="Progress" >
      <ol class="overflow-auto border border-gray-300 divide-y divide-gray-300 rounded-md md:flex md:divide-y-0">
        <li
          class="relative md:flex-1 md:flex"
          v-for="(step, index) in steps"
          :key="index"
        >
          <!-- Completed Step -->
          <a
            href="#"
            class="flex items-center w-full group"
            v-if="value > step.step"
          >
            <span class="flex items-center px-6 py-4 text-sm font-medium">
              <span class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                <svg
                  class="w-6 h-6 text-black-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="ml-4 text-sm font-medium text-gray-900">{{
                step.title
              }}</span>
            </span>
          </a>
          
          <!-- Current Step -->
          <a
            href="#"
            class="flex items-center px-6 py-4 text-sm font-medium"
            aria-current="step"
            v-else
          >
            <span class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
              <span class="text-indigo-600">0{{index+1}}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-indigo-600">
              {{step.title}}
            </span>
          </a>

          <!-- Arrow separator for lg screens and up -->
          <div
            class="absolute top-0 right-0 hidden w-5 h-full md:block"
            aria-hidden="true"
            v-if="index != steps.length - 1"
          >
            <svg
              class="w-full h-full text-gray-300"
              viewBox="0 0 22 80"
              fill="none"
              preserveAspectRatio="none">
              <path
                d="M0 -2L20 40L0 82"
                vector-effect="non-scaling-stroke"
                stroke="currentcolor"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["value", "steps"],
  data() {
    return {
      el: this.value
    };
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    }
  }
};
</script>
