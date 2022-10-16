<template>
  <div>
    <div>
      <main>
        <UiAppHeader
          title="Form Email Notification Details"
          subtitle="Email routing and general content can be managed here"
          body="'From', 'To', 'cc' &amp; 'bcc' fields should be unique within each individual form"
        />
        <DashboardAdminCmsFormNotifications />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>
