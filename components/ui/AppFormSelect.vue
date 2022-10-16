<template>
  <label class="block text-sm font-medium text-blueGray-700">
    {{ label }}
    <select
      @input="handleInput($event.target.value)"
      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" id="options-menu"
      :value="value"
      :required="required"
      :disabled="disabled"
    >
      <option disabled value="">Please select</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: false
    },
    value: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false
    }
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    }
  }
};
</script>
