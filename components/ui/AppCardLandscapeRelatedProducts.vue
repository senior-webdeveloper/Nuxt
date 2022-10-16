<template>
  <div>
    <nuxt-link :to="to" :event="type.line ? 'click' : ''" :class="type.line ? '' : 'pointer-default'">
      <div class="relative flex flex-row w-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm group bg-blueGray-100 border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
        <!-- Image -->
        <div class="p-4 bg-white">
          <div class="w-48 aspect-w-1 aspect-h-1">
            <img class="object-cover object-center w-full h-full" :src="image" :alt="imgAlt" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <div>
            <div class="flex flex-col flex-1 p-4 space-y-2">
              <p class="text-xl font-medium text-nsk-primary font-subheading">{{ title }}</p>
              <p class="text-xs text-blueGray-500">{{ sku }}</p>
              <p class="text-sm text-blueGray-600">{{ subtitle }}</p>
            </div>
            <UiAppBadgeProducts class="mx-1 my-1" v-for="tag in tags" :key="tag.id" className="blue" :label="tag.title" :tag="tag"/>
            <slot name="footer" />
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["type", "title", "image", "imgAlt", "content", "sku", "subtitle", "to", "tags"],
  created() {}
};
</script>
