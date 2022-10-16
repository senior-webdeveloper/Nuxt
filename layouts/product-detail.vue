<template>
  <div>
    <div>
      <LayoutsTheHeader />
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <UiAppBreadcrumbs />
          <nuxt/>
        </div>
      <LazyUiToTop />
      <LazyLayoutsTheFooter />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: '%s - NSK America Corporation',
  },
  scrollToTop: true
}
</script>