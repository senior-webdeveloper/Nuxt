<template>
  <div class="flex flex-wrap -mx-4 overflow-hidden">
    <template v-if="direction === 'grid'">
      <template v-for="(item, index) in items">
        <div :key="`grid-${direction}-${index}`" class="w-full px-4 py-4 overflow-hidden lg:w-1/4">
          <slot name="grid" v-bind="{ item }" />
        </div>
      </template>
    </template>
    <template v-if="direction === 'list'">
      <template v-for="(item, index) in items">
        <div :key="`grid-${direction}-${index}`" class="w-full px-4 py-4 overflow-hidden">
          <slot name="list" v-bind="{ item }" />
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: ['direction', 'items'],
  mounted() {
    console.log(this.items)
  }
}
</script>
