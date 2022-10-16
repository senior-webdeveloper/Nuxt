<template>
  <label class="block text-sm font-medium text-blueGray-700">
    {{ label }}
    <input
      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"
      @input="handleInput($event.target.value)"
      :value="value"
      type="date"
    />
    <!-- :placeholder="placeholder"
      :required="required"
      :disabled="disabled" -->
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
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
