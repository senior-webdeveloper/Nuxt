<template>
  <div>
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="resetNotification"
    />
    <div>
      <LayoutsTheHeader />
        <div class="px-4 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <UiAppBreadcrumbs />
          <div class="pt-10">
            <nuxt />
          </div>
        </div>
      <LazyUiToTop />
      <LazyLayoutsTheFooter />
    </div>
  </div>
</template>


<script>
import notificationMixin from '~/mixins/notification'
export default {
  head: {
    titleTemplate: '%s - NSK America Corporation',
  },
  mixins: [notificationMixin],
  scrollToTop: true
}
</script>
