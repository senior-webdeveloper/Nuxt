<template>
  <nuxt-link
    :to="to"
    :event="type.whole ? 'click' : ''"
    :class="type.whole ? '' : 'cursor-default'"
  >
    <div class="sm:py-8">
      <div
        class="space-y-2 transition duration-300 ease-in-out delay-100 border shadow-xl sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0 bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-105 hover:border-blueGray-800"
      >
        <!-- Image -->
        <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
          <img
            class="object-cover"
            :src="image"
            :alt="imgAlt"
          />
        </div>
        <div class="sm:col-span-2">
          <div class="space-y-4">
            <div class="mt-10 space-y-1 text-lg font-medium leading-6">
              <nuxt-link
                :to="to"
                :event="type.line ? 'click' : ''"
                :class="type.line ? '' : 'cursor-default'"
              >
                <h3>{{ title }}</h3>
              </nuxt-link>
              <p class="text-indigo-600">{{ subtitle }}</p>
            </div>
            <UiAppBadge class="mx-1 my-1" v-for="tag in tags" :key="tag.id" :className="'grey-border'" :label="tag.title" :tag="tag"/>
            <div class="text-lg">
              <p class="text-gray-500">
                {{ content }}
              </p>
            </div>
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: ["type", "title", "image", "imgAlt", "content", "subtitle", "to", "tags"],
  created() {}
};
</script>
