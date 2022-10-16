<template>
  <div>
    <div>
      <main>
        <UiAppHeader
          title="Cost Savings Analysis"
          subtitle=""
          body=""
        />
        <DashboardCostSavingsEvaluationTable />
        <DashboardCostSavingsEvaluationUsersTable />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>

