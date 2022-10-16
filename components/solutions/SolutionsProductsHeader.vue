<template>
  <div>
    <div class="text-center">
      <h1 v-if="name">
        {{name}}
      </h1>
      <p v-if="description" class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
        {{description}}
      </p>
    </div>
    <div v-if="headerImage" class="mt-10 max-w-7xl">
      <img :src="headerImage" class="object-contain mx-auto" :alt="name" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "description", "headerImage"]
}
</script>
