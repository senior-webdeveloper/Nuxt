<template>
  <!-- CD (CT on 20210727):
  
  For the PRODUCTS task, please pull the following details for this products card:<template>
    title - name
    content - description
    subtitle - alternateName
    tags - tags
    tags2 - isAccessoryOrSparePartFor (use appbadge for this one same as the tags)
    image - image

  For the SERIES task, please pull the following details for this series card:<template>
    title - name
    content - description
    subtitle - NO SUBTITLE, leave this blank
    tags - tags
    tags2 - category
    image - image
  -->

  <div @click="$emit('clicked')">
    <div class="relative flex flex-row w-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm group bg-blueGray-100 border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
      <div class="p-4 bg-white">
        <div class="w-48 aspect-w-1 aspect-h-1">
          <img :src="image" :alt="imgAlt" class="object-cover object-center w-full h-full">
        </div>
      </div>
      <div class="col-span-2">
        <div class="flex flex-col flex-1 p-4 space-y-2">
          <h2>
            <nuxt-link :to="link" class="pointer-default">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {{ title }}
            </nuxt-link>
          </h2>
          <p class="text-xs text-blueGray-500">{{ sku }}</p>
          <p class="text-sm text-blueGray-600">{{ subtitle }}</p>
          <div class="flex flex-col justify-end flex-1">
            <!--<p class="text-sm italic text-gray-500">Black</p>
            <p class="text-base font-medium text-gray-900">$32</p>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "image", "imgAlt", "content", "sku", "subtitle", "tags", "tags2", "link"], //Delete here those that will not be needed in the above component once finalized
};
</script>
