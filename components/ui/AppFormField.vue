<template>
  <label
    class="block text-sm font-medium text-blueGray-700"
    v-if="['text', 'email', 'password', 'date', 'datetime-local'].includes(type)"
  >
    {{ label }}
    <input
      v-if="isNaValidPhone"
      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"
      @input="handleInput($event.target.value)"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      pattern="\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})"
    />
    <input
      v-else-if="!isPreview"
      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"
      @input="handleInput($event.target.value)"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
    />
    <p v-else v-text="value" class="pt-2"></p>
  </label>
</template>

<script>
export default {
  props: {
    // CD (JE on 20210504): determine if input is on preview mode
    isPreview: {
      type: Boolean,
      required: false,
      default: false
    },
    isNaValidPhone:{
      type: Boolean,
      required: false,
      default: false,
    },
    value: {
      type: String,
      default: ""
    },
    type: {
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
