// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- Enabled: "bg-blue-600", Not Enabled: "bg-blueGray-200" -->
    APP TOOGLE
    <button
      @click="$emit('toggle')"
      type="button"
      :class="buttonClass"
      aria-pressed="false"
    >
      <span class="sr-only">Use setting</span>
      <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
      <span aria-hidden="true" :class="spanClass"></span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    enable: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    buttonClass: function() {
      if (this.enable)
        return "bg-blue-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      else if (!this.enable)
        return "bg-blueGray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    },
    spanClass: function() {
      if (this.enable)
        return "translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200";
      else if (!this.enable)
        return "translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200";
    }
  }
};
</script>


// https://codepen.io/lhermann/pen/EBGZRZ

