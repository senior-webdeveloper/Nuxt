// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <div>
    <div class="flex justify-between sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select
        id="tabs"
        name="tabs"
        class="block w-full py-2 pl-3 pr-10 mr-10 overflow-x-auto text-base rounded-sm text-blueGray-500 border-blueGray-300 focus:outline-none focus:ring-blueGray-500 focus:border-blueGray-500 sm:text-sm"
        @change="handleInput($event.target.value)"
      >
        <option
          v-for="(tab, index) in tabs"
          :key="index"
          :selected="index == selected"
          :value="index"
          >{{ tab }}</option
        >
      </select>
      <div v-if="withViewOption" class="flex ml-10 bg-blueGray-500 p-0.5 rounded-sm items-center">
        <button
          type="button"
          class="p-1 rounded-sm text-blueGray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueGray-500 toggle-default"
          :class="viewIs('list') && 'toggle-active'"
          @click="$emit('change:view', 'list')"
        >
          <UiIconViewList />
          <span class="sr-only">Use list view</span>
        </button>
        <button
          type="button"
          class="ml-0.5 p-1 rounded-sm shadow-sm text-blueGray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueGray-500 toggle-default"
          :class="viewIs('grid') && 'toggle-active'"
          @click="$emit('change:view', 'grid')"
        >
          <UiIconViewGrid />
          <span class="sr-only">Use grid view</span>
        </button>
      </div>
    </div>

    <div class="hidden sm:block">
      <div class="flex items-center border-b border-gray-200">
        <nav class="flex flex-1 -mb-px space-x-6 overflow-x-auto xl:space-x-8">
          <a
            @click="handleInput(index)"
            v-for="(tab, index) in tabs"
            :key="tab"
            :class="[
              index == selected
                ? 'border-nsk-primary text-nsk-primary cursor-pointer' 
                : 'border-transparent text-blueGray-500 hover:text-blueGray-700 hover:border-blueGray-300 cursor-pointer',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer'
            ]"
            :aria-current="index == selected ? 'page' : undefined"
          >
            {{ tab }}
          </a>
        </nav>
        <div v-if="withViewOption" class="hidden ml-32 bg-blueGray-500 p-0.5 rounded-sm items-center sm:flex mb-4">
          <button
            type="button"
            class="p-1 rounded-sm text-blueGray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueGray-500 toggle-default"
            :class="viewIs('list') && 'toggle-active'"
            @click="$emit('change:view', 'list')"
          >
            <UiIconViewList />
            <span class="sr-only">Use list view</span>
          </button>
          <button
            type="button"
            class="ml-0.5 p-1 rounded-sm text-blueGray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueGray-500 toggle-default"
            :class="viewIs('grid') && 'toggle-active'"
            @click="$emit('change:view', 'grid')"
          >
            <UiIconViewGrid />
            <span class="sr-only">Use grid view</span>
          </button>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: ["value", "tabs", "withViewOption", "viewOption"],
  props: {
    value: {
      type: [String,Number],
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    withViewOption: {
      type: Boolean,
      required: false,
      default: false,
    },
    viewOption: {
      type: String,
      required: false,
      default: 'grid'
    }
  },
  data() {
    return {
      selected: this.value
    };
  },
  methods: {
    viewIs(view) {
      return this.viewOption === view
    },
    handleInput(value) {
      this.selected = value;
      this.$emit("input", value);
    }
  },
  watch:{
    value: function(val){
      this.selected = val
    }
  }
};
</script>
