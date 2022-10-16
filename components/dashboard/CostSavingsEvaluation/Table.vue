<template>
  <div>
    <!--CD (EV on 20210302): Use AppNotification -->
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="hideNotification"
    />
    <!-- CD (EV on 20210302): Use AppSlideOverPanel -->
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="hideSlider"
      :title="slider.title"
    >
      <!-- CD (EV on 20210302): Use CostSavingsEvaluationsView for as slider content -->
      <DashboardCostSavingsEvaluationView v-if="slider.type == 'view'" />
      <DashboardCostSavingsEvaluationEdit v-if="slider.type == 'edit'" />
    </UiAppSlideOverPanel>
    <!-- CD (EV on 20210302): Use AppTable -->
    <div class="mt-10">
      <h2 class="text-gray-200">List of Cost Savings Analysis Form submissions</h2>
    </div>
    <UiAppTable :headers="headings" title="Cost Savings Analysis">
      <!-- CD (EV on 20210302): Body of the table  -->
      <tbody v-if="pagination.items.length">
        <!-- CD (EV on 20210302): Render table row -->
        <tr
          class="trClass"
          v-for="(cost_savings_evaluation, index) in pagination.items"
          :key="index"
        >
          <td class="tdClass">
            <!-- CD (EV on 20210302): Use AppBadge -->
            <UiAppBadge
              :className="statusColor(cost_savings_evaluation.status)"
              :label="cost_savings_evaluation.status"
            />
          </td>
          <td class="tdClass">
            {{ cost_savings_evaluation.label }}
          </td>
          <td class="tdClass">
            {{ cost_savings_evaluation.nskAmericaRepresentative }}
          </td>
          <td class="tdClass">
            {{ cost_savings_evaluation.owner ? cost_savings_evaluation.owner.firstName : "" }}
            {{ cost_savings_evaluation.owner ? cost_savings_evaluation.owner.lastName : "" }}
          </td>
          <td class="tdClass">
            {{ cost_savings_evaluation.companyName }}
          </td>
          <td class="tdClass">
            {{ cost_savings_evaluation.owner ? cost_savings_evaluation.owner.email : "" }}
          </td>
          <td class="tdClass">
            {{ cost_savings_evaluation.testDescription }}
          </td>
          <td class="tdClass">
            <UiAppBadge :label="cost_savings_evaluation.demonstrationRequest ? 'YES' : 'NO'" :className="cost_savings_evaluation.demonstrationRequest ? 'green' : 'red'"/>
          </td>
          <td class="tdClass">
            <!-- CD (CT on 20210609): Updated icons and order -->
            <div class="flex flex-row space-x-2">
              <UiAppButton
                className="icon-tables"
                @click="showSliderView(cost_savings_evaluation)"
                ><UiIconView />
              </UiAppButton>
              <UiAppButton
                className="icon-tables"
                @click="download(cost_savings_evaluation.pdf)"
                ><UiIconCloudDownload />
              </UiAppButton>
            </div>
          </td>
        </tr>
        <!-- CD (EV on 20210302): Render table row  END-->
      </tbody>
      <template #pagination>
        <UiAppPagination
          @change:page="setPaginationPage"
          @change:size="setPaginationSize"
          :pages="pagination.pages"
          :from="pagination.from"
          :to="pagination.to"
          :items="pagination.items.length"
          :size="pagination.size"
          :total="paginationItems.length"
        />
      </template>
    </UiAppTable>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
/* CD (EV on 20210329): Import fetch technical questions query */
import { FETCH_COST_SAVINGS_EVALUATIONS } from "~/graphql/dashboard/cost-savings-evaluation";
import paginationMixin from '~/mixins/pagination'
export default {
  mixins: [paginationMixin],
  computed: mapGetters({
    /* CD (EV on 20210329): Get initial cost_savings_evaluations */
    paginationItems:
      "dashboard/cost-savings-evaluation/costSavingsEvaluations",
    /* CD (EV on 20210329): Get initial slider */
    slider: "dashboard/cost-savings-evaluation/slider",
    /* CD (EV on 20210329): Get initial notification */
    notification: "dashboard/cost-savings-evaluation/notification"
  }),
  data() {
    return {
      /* CD (EV on 20210329): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Status",
        "Label",
        "NSK America Representative / IMR",
        "Name",
        "Company",
        "Email",
        "Test Description / Goal",
        "Action",
        "Demo Request"
      ]
    };
  },
  async fetch() {
    /* CD (EV on 20210329): Declare query variable*/
    const query = FETCH_COST_SAVINGS_EVALUATIONS;

    /* CD (EV on 20210329): Fetch technical questions*/
    const { data } = await this.$apollo.query({ query });
    this.$store.dispatch(
      "dashboard/cost-savings-evaluation/getCostSavingsEvaluations",
      data.cost_savings_evaluations
    );
    console.log(data.cost_savings_evaluations)
  },
  methods: {
    showSliderView(costSavingsEvaluation) {
      console.log(costSavingsEvaluation)
      /* CD (EV on 20210329): Show Slider*/
      this.$store.dispatch("dashboard/cost-savings-evaluation/showSliderView");
      /* CD (EV on 20210329): Get the viewed technical question*/
      this.$store.dispatch(
        "dashboard/cost-savings-evaluation/getCostSavingsEvaluation",
        costSavingsEvaluation
      );
    },
    hideSlider() {
      /* CD (EV on 20210329): Hide slider*/
      this.$store.dispatch("dashboard/cost-savings-evaluation/hideSlider");
    },
    hideNotification() {
      /* CD (EV on 20210329): Hide notification*/
      this.$store.dispatch(
        "dashboard/cost-savings-evaluation/hideNotification"
      );
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      return status === "Pending" ? "red" : "green";
    },
    // CD (JE on 20210520): Download pdf
    download(pdf) {
      const link = document.createElement('a')
      link.download = pdf.filename
      link.href=pdf.location
      link.click()
    }
  }
};
</script>
