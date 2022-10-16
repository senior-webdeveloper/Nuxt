<!-- SAMPLE -->
<!--<UiAppFormFieldExtended
      v-model="form.value"
      type="text"
      label="Opportunity Value *"
      :required="true"
    >
      <template v-slot:left-symbol>
        <div class="anything">&</div>
      </template>
      <template v-slot:right-symbol>
        EUR
      </template>
    </UiAppFormFIeldExtended> -->

<!-- left-symbol and right-symbol will default to $ and USD if the templates part of the code is removed -->
<!-- left-symbol can be a character or an icon -->


<template>
  <label
    class="block text-sm font-medium text-blueGray-700"
    v-if="['text', 'email', 'password', 'date', 'datetime-local', 'number' ].includes(type)"
  >
    {{ label }}
    <div v-if="!isPreview" class="relative">
      <span class="absolute top-0 flex items-center justify-center w-8 h-full text-blueGray-400">
        <slot name="left-symbol">
          $
        </slot>
      </span>
      <input
        class="z-10 block w-full pr-12 mt-1 text-right border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"
        @input="handleInput($event.target.value)"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
      />
      <span class="absolute top-0 flex items-center justify-center h-full text-blueGray-400 right-2">
        <slot name="right-symbol">
          USD
        </slot>
      </span>
    </div>
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
    },
    step: {
      type: Float64Array,
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