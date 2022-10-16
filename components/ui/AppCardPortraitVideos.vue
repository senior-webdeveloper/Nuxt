// CD (CT on 20211228): Similar with the AppCardPortrait1 component. Just add the video play button. Also because of the difference in the link element(s) of the card

<template>
  <div>
    <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101">
      <div class="aspect-w-3 aspect-h-2" @click="$emit('open')">
        <img class="object-cover" :src="image" :alt="imgAlt" />
        <div class="w-24 h-24 m-auto text-nsk-primary hover:text-blueGray-900">
          <div title="Watch Video">
          <UiIconPlaySolid v-if="play" class="cursor-pointer" />
          </div>
        </div>
      </div>

      <div class="flex flex-col flex-1 p-4 space-y-2">
        <nuxt-link :to="to" v-if="to">
          <div class="text-lg font-medium leading-5">
            <h3>{{ title }}</h3>
          </div>
          <div class="flex flex-col justify-end flex-1 space-y-2">
            <div class="mt-2 leading-normal">
              <p class="text-blueGray-500">{{ subtitle }}</p>
              <p class="text-blueGray-500 line-clamp-3" v-html="content" />
              <p class="text-blueGray-500" v-html="content2" />
            </div>
            <div class="flex flex-col justify-end flex-1">
              <!--<div class="flex-row">
                <UiAppBadge class="py-2 mr-1" v-for="tag in tags" :key="tag.id" :className="'grey-border'" :label="tag.title" :tag="tag"/>
              </div>-->
              <div class="p-2">
                <slot name="footer" />
              </div>
            </div>
          </div>
        </nuxt-link>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "title", "image", "imgAlt", "content", "content2", "subtitle", "tags", "to", "play"],
  created() {}
};
</script>
