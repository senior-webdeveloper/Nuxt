<template>
  <div>
    <!-- CD (EV on 20210302): Use AppNotification -->
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
      <!-- CD (EV on 20210302): Use TechnicalQuestionsView for as slider content -->
      <DashboardTechnicalQuestionsView v-if="slider.type == 'view'" />
    </UiAppSlideOverPanel>
    <!-- CD (EV on 20210302): Use AppTable -->
    <UiAppTable :headers="headings" title="Technical Questions">
      <!-- CD (EV on 20210302): Body of the table  -->
      <tbody>
        <template v-if="$fetchState.pending">
          <tr>
            <td :colspan="headings.length">Loading</td>
          </tr>
        </template>
        <!-- CD (EV on 20210302): Render table row -->
        <tr
          v-else
          class="trClass"
          v-for="(technical_question, index) in pagination.items"
          :key="index"
        >
          <td class="tdClass">
            <!-- CD (EV on 20210302): Use AppBadge -->
            <UiAppBadge
              :className="statusColor(technical_question.status)"
              :label="technical_question.status"
            />
          </td>
          <td class="tdClass">
            {{ technical_question.name }}
          </td>
          <!-- <td class="tdClass">
            {{ technical_question.title }}
          </td> -->
          <td class="tdClass">
            {{ technical_question.company }}
          </td>
          <td class="tdClass">
            {{ technical_question.email }}
          </td>
          <td class="tdClass">
            {{ technical_question.phone }}
          </td>
          <!-- <td class="tdClass">
            {{ technical_question.product }}
          </td>
          <td class="tdClass">
            {{ technical_question.application }}
          </td>
          <td class="tdClass">
            {{ technical_question.machineType }}
          </td>
          <td class="tdClass">
            {{ technical_question.question }}
          </td> -->
          <td class="tdClass">
            <!-- CD (KO on 20210609): Updated icons and order -->
            <div class="flex flex-row space-x-2">
              <UiAppButton
                className="icon-tables"
                @click="showSliderView(technical_question)"
                ><UiIconView />
              </UiAppButton>
              <UiAppButton
                className="icon-tables"
                @click="download(technical_question.pdf)"
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
import { FETCH_TECHNICAL_QUESTIONS } from "./../../../graphql/dashboard/technical-questions/technical_questions";
import paginationMixin from '~/mixins/pagination'
export default {
  mixins: [paginationMixin],
  computed: mapGetters({
    /* CD (EV on 20210329): Get initial technical_questions */
    paginationItems: "dashboard/technical-questions/technicalQuestions",
    /* CD (EV on 20210329): Get initial slider */
    slider: "dashboard/technical-questions/slider",
    /* CD (EV on 20210329): Get initial notification */
    notification: "dashboard/technical-questions/notification"
  }),
  data() {
    return {
      /* CD (EV on 20210329): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Status",
        "Name",
        "Company",
        "Email",
        "Phone",
        "Action"
      ]
    };
  },
  async fetch() {
    /* CD (EV on 20210329): Declare query variable*/
    const query = FETCH_TECHNICAL_QUESTIONS;

    /* CD (EV on 20210329): Fetch technical questions*/
    const {data} = await this.$apollo.query({ query })
    /* CD (EV on 20210329): Update technical questions []*/

      this.$store.dispatch(
        "dashboard/technical-questions/getTechnicalQuestions",
        data.technical_questions
      );
  },
  methods: {
    showSliderView(technicalQuestion) {
      /* CD (EV on 20210329): Show Slider*/
      this.$store.dispatch("dashboard/technical-questions/showSliderView");
      /* CD (EV on 20210329): Get the viewed technical question*/
      this.$store.dispatch(
        "dashboard/technical-questions/getTechnicalQuestion",
        technicalQuestion
      );
    },
    hideSlider() {
      /* CD (EV on 20210329): Hide slider*/
      this.$store.dispatch("dashboard/technical-questions/hideSlider");
    },
    hideNotification() {
      /* CD (EV on 20210329): Hide notification*/
      this.$store.dispatch("dashboard/technical-questions/hideNotification");
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      if (status == "Done") return "green";
      else if (status == "Pending Response") return "red";
      else if (status == "Missing Info") return "yellow";
    },
    // CD (JE on 20210524): Download pdf
    download(pdf) {
      const link = document.createElement('a')
      link.download = pdf.filename
      link.href=pdf.location
      link.click()
    }
  }
};
</script>
