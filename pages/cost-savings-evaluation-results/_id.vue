<template>
  <div>
    <CostSavingsEvaluationResultsCostSavingsEvaluation v-if="value" :value="value" />
    <h1 v-else>Data not found</h1>
  </div>
</template>

<script>
import { FETCH_ONE_COST_SAVINGS_EVALUATION } from '~/graphql/cost-savings-evaluation'
export default {
  async asyncData({ params, app }) {
    const $apollo = app.apolloProvider.defaultClient
    const query = FETCH_ONE_COST_SAVINGS_EVALUATION
    const variables = {
      query: {
        _id: params.id
      }
    }
    const {data: { cost_savings_evaluation }} = await $apollo.query({query, variables})
    console.log({cost_savings_evaluation})
    return {
      value: cost_savings_evaluation
    }
  },
  data: () => ({
    value: null
  })
}
</script>
