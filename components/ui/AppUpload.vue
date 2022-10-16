<template>
  <div>
    <p class="block mb-2 text-sm font-medium text-blueGray-700">Upload File *</p>
    <input
      v-bind="$attrs"
      v-on="$listeners"
      type="file"
      hidden
      ref="file"
      @change="upload"
    />
    <div class="flex items-center">
      <UiAppButton
        :className="variant"
        :label="label"
        @click="showUploadDialog"
      />
      <span class="ml-4">{{ filename }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      default: ''
    },
    variant: {
      type: String,
      required: false,
      default: 'secondary'
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    showUploadDialog() {
      this.$refs.file.click()
    },
    upload(e) {
      const file = this.multiple ? e.target.files : e.target.files.item(0)
      this.$emit('input', file)
    }
  },
  computed: {
    filename() {
      if(typeof this.value === 'string') {
        return this.value
      }
      const files = this.multiple ? Array.from(this.value) : [this.value]
      return files.map(file => file.name).join(', ')
    },
    multiple() {
      return this.$attrs.multiple !== undefined
    }
  }
}
</script>
