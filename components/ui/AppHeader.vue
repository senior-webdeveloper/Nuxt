<template>
  <div>
    <div class="mb-10">
      <h1 class="text-blueGray-200">{{ title }}</h1>
      <h2 class="text-blueGray-200">{{ subtitle }}</h2>
      <p class="text-blueGray-400">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    body: {
      type: String,
      required: false
    },
  }
};
</script>