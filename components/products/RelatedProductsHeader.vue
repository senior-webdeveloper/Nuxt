<template>
  <div>
    <div class="bg-white">
      <div class="py-2">
        <h4 class="sr-only">Related products to</h4>
        <h4>{{ product.details.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

