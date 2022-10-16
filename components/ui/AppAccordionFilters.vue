// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <div>
    <div>
      <dt>
        <!-- Expand/collapse button -->
        <button @click="toggle" class="flex items-center w-full text-left">
          <span class="flex-shrink-0 w-5 h-5 ml-5 text-blueGray-600">
            <UiIconChevronDown />
          </span>
          <slot name="header"></slot>
        </button>
      </dt>
      <dd class="pr-12 mt-2">
        <div v-if="show" class="content">
          <slot name="content"></slot>
        </div>
      </dd>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ["showDefault"],
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
  created(){
    if(this.showDefault) this.show = true
  },
  computed: {
    icon: function() {
      if (this.show) return "-rotate-180 h-6 w-6 transform";
      else if (!this.show) return "-rotate-0 h-6 w-6 transform";
    }
  }
};
</script>
