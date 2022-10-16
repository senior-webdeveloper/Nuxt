<template>
  <div>
    <nuxt-link :to="to" class="pointer-default">
      <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm group bg-blueGray-100 border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
        <div class="p-4 bg-white">
          <div class="aspect-w-1 aspect-h-1" @click="$emit('open')">
            <img class="object-cover object-center w-full h-full" :src="image" :alt="imgAlt" />
          </div>
        </div>
        <div class="flex flex-col flex-1 p-4 space-y-2">
          <div>
            <p class="text-xl font-medium text-nsk-primary font-subheading">{{ title }}</p>
          </div>
          <p class="text-xs text-blueGray-500">{{ sku }}</p>
          <p class="text-sm text-blueGray-600">{{ subtitle }}</p>
          <div class="flex flex-col justify-end flex-1">
            <UiAppBadgeProducts class="mx-1 my-1" v-for="tag in tags" :key="tag" className="blue" :tag="tag"/>
          </div>
          <div class="p-2">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["type", "title", "image", "imgAlt", "content", "content2", "sku", "subtitle", "tags2", "tags", "to"],
  created() {}
};
</script>

<style>
.m-auto{
  margin: auto;
}
</style>
