<template>
  <div class="mt-4">
    <label class="relative flex items-start">
      <input
        class="radio"
        type="radio"
        :value="label"
        :name="name"
        v-model="radioButtonValue"
      />
      <span class="block ml-3 text-sm font-medium text-blueGray-700">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    }
  },
  computed: {
    radioButtonValue: {
      get: function() {
        return this.value;
      },
      set: function() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit("change", this.label);
      }
    }
  }
};
</script>
