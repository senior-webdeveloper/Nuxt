<template>
  <div>
    <div>
      <LayoutsTheHeader />
      <nuxt/>
      <LazyUiToTop />
      <LazyLayoutsTheFooter />
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true
}
</script>