// CD (KO on 20210228): component used in only "/pages/_slug.vue"


<template>
    <section aria-labelledby="product-image">
      <div class="mx-auto">
        <div class="bg-white">
            <div class="block md:hidden">
              <h1>{{product.details.name}}</h1>
              <p>[IF PART OF SERIES, SHOW SERIES NAME]</p>
            </div>
          <div class="p-2 border border-gray-200 rounded-md shadow-md">
          <img class="object-cover object-center w-full h-[300px]"  :src="product.details.image" />
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 lg:px-8">
          <a href="#">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="ml-3">Watch product video</p>
            </div>
          </a>
          <a href="#">
            <div class="">
              <UiAppButton className="primary" @click="modal = true" label="See PDF Catalog for details" />
            </div>
          </a>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props:["product"]
}
</script>
