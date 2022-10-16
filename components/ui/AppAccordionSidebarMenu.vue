// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <div>
    <div>
      <dt class="text-lg">
        <!-- Expand/collapse menu button -->
        <button @click="toggle" class="flex items-center justify-between w-full text-left text-blueGray-400">
          <slot name="header"></slot>
          <span class="flex items-center flex-shrink-0 ml-6 h-7 text-bluegray-200">
            <UiIconChevronDown
            :class="icon" />
          </span>
        </button>
      </dt>
      <dd class="mt-2">
        <div v-if="show" class="content">
          <slot name="content"></slot>
        </div>
      </dd>
    </div>    
  </div>
</template>


<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  },
  computed: {
    icon: function() {
      if (this.show) return "-rotate-180 h-6 w-6 transform";
      else if (!this.show) return "-rotate-0 h-6 w-6 transform";
    }
  }
};
</script>
