<template>
  <div>
    <div>
      <main>
        <UiAppHeader
          title="Frequently Asked Questions"
          subtitle="FAQ can be managed here."
          body="Tags are required for each FAQ. These tags will be the main tabs in the FAQ page."
        />
        <DashboardAdminCmsFaq />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>
