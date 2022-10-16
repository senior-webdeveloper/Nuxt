<template>
  <div class="flex w-full px-3 overflow-hidden border border-b-2 cursor-pointer md:w-1/4 hover:bg-gray-50" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>