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
      <!-- CD (EV on 20210302): Use GuaranteeTrialOfferProgramsView for as slider content -->
      <DashboardGuaranteeTrialOfferProgramView v-if="slider.type == 'view'" />
    </UiAppSlideOverPanel>
    <!-- CD (EV on 20210302): Use AppTable -->
    <UiAppTable :headers="headings" title="Guarantee Trial Offer Program Requests">
      <!-- CD (EV on 20210302): Body of the table  -->
      <tbody v-if="$fetchState.pending">
        <tr class="bg-gray-50">
          <td :colspan="headings.length" class="px-6 py-4 text-sm font-medium text-center text-blueGray-900 whitespace-nowrap">Loading Data</td>
        </tr>
      </tbody>
      <tbody v-else>
        <!-- CD (EV on 20210302): Render table row -->
        <tr
          class="trClass"
          v-for="(guarantee_trial_offer_program, index) in pagination.items"
          :key="index"
        >
          <td class="tdClass">
            <!-- CD (EV on 20210302): Use AppBadge -->
            <UiAppBadge
              :className="statusColor(guarantee_trial_offer_program.status)"
              :label="guarantee_trial_offer_program.status"
            />
          </td>

          <td class="tdClass">
            <!-- CD (EV on 20210302): Use AppBadge -->
            <UiAppBadge
              :className="approvedColor(guarantee_trial_offer_program.approved)"
              :label="guarantee_trial_offer_program.approved||'Pending'"
            />
          </td>

          <!-- CD (CT on 20210331): Complete list of fields here -->
          <td class="tdClass">
            {{ guarantee_trial_offer_program.testDate }}
          </td>
          <td class="tdClass">
            {{ guarantee_trial_offer_program.endUser }}
          </td>
          <td class="tdClass">
            {{ guarantee_trial_offer_program.distributor }}
          </td>
          <td class="tdClass">
            {{ guarantee_trial_offer_program.guarantee }}
          </td>
          <td class="tdClass">
          <table>
            <tbody>
              <tr>
                <td><strong>Distributor</strong></td>
                <td>{{ guarantee_trial_offer_program.distributorDetails.distributor }}</td>
              </tr>
              <tr>
                <td><strong>Name</strong></td>
                <td>{{ guarantee_trial_offer_program.distributorDetails.name }}</td>
              </tr>
              <tr>
                <td><strong>Title</strong></td>
                <td>{{ guarantee_trial_offer_program.distributorDetails.title }}</td>
              </tr>
              <tr>
                <td><strong>Email</strong></td>
                <td>{{ guarantee_trial_offer_program.distributorDetails.email }}</td>
              </tr>
            </tbody>
          </table>
          </td>
          <td class="tdClass">
          <table>
            <tbody>
              <tr>
                <td><strong>End User</strong></td>
                <td>{{ guarantee_trial_offer_program.endUserDetails.endUser }}</td>
              </tr>
              <tr>
                <td><strong>Name</strong></td>
                <td>{{ guarantee_trial_offer_program.endUserDetails.name }}</td>
              </tr>
              <tr>
                <td><strong>Title</strong></td>
                <td>{{ guarantee_trial_offer_program.endUserDetails.title }}</td>
              </tr>
              <tr>
                <td><strong>Phone</strong></td>
                <td>{{ guarantee_trial_offer_program.endUserDetails.phone }}</td>
              </tr>
              <tr>
                <td><strong>Email</strong></td>
                <td>{{ guarantee_trial_offer_program.endUserDetails.email }}</td>
              </tr>
              <tr>
                <td><strong>Address</strong></td>
                <td>{{ guarantee_trial_offer_program.endUserDetails.address | address}}</td>
              </tr>
            </tbody>
          </table>
          </td>
          <td class="tdClass">
            <!-- CD (KO on 20210609): Updated icons and order -->
            <div class="flex flex-row space-x-2">
              <UiAppButton
                className="icon-tables"
                @click="showSliderView(guarantee_trial_offer_program)"
                ><UiIconView />
              </UiAppButton>
              <UiAppButton
                className="icon-tables"
                @click="download(guarantee_trial_offer_program.pdf)"
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
import { FETCH_GUARANTEE_TRIAL_OFFER_PROGRAM } from "~/graphql/dashboard/guarantee-trial-offer-program/guarantee-trial-offer-program";
import paginationMixin from '~/mixins/pagination'
export default {
  mixins: [paginationMixin],
  computed: mapGetters({
    /* CD (EV on 20210329): Get initial guarantee_trial_offer_program */
    paginationItems: "dashboard/guarantee-trial-offer-program/guaranteeTrialOfferPrograms",
    /* CD (EV on 20210329): Get initial slider */
    slider: "dashboard/guarantee-trial-offer-program/slider",
    /* CD (EV on 20210329): Get initial notification */
    notification: "dashboard/guarantee-trial-offer-program/notification"
  }),
  data() {
    return {
      /* CD (EV on 20210329): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Status",
        "Approved",
        "Test Date",
        "End User",
        "Distributor",
        "Guarantee",
        "Contact Information - Distributor Details",
        "Contact Information - End User Details",
        "Actions"
      ]
    };
  },
  async fetch() {
    /* CD (EV on 20210329): Declare query variable*/
    const query = FETCH_GUARANTEE_TRIAL_OFFER_PROGRAM;

    /* CD (EV on 20210329): Fetch technical questions*/
    const { data } = await this.$apollo.query({ query })
    /* CD (EV on 20210329): Update technical questions []*/
    this.$store.dispatch(
      "dashboard/guarantee-trial-offer-program/getGuaranteeTrialOfferPrograms",
      data.guarantee_trial_offer_programs
    );
  },
  methods: {
    showSliderView(guaranteeTrialOfferProgram) {
      /* CD (EV on 20210329): Show Slider*/
      this.$store.dispatch("dashboard/guarantee-trial-offer-program/showSliderView");
      /* CD (EV on 20210329): Get the viewed technical question*/
      this.$store.dispatch(
        "dashboard/guarantee-trial-offer-program/getGuaranteeTrialOfferProgram",
        guaranteeTrialOfferProgram
      );
    },
    hideSlider() {
      /* CD (EV on 20210329): Hide slider*/
      this.$store.dispatch("dashboard/guarantee-trial-offer-program/hideSlider");
    },
    hideNotification() {
      /* CD (EV on 20210329): Hide notification*/
      this.$store.dispatch("dashboard/guarantee-trial-offer-program/hideNotification");
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      if (status == "Done") return "green";
      else if (status == "Pending Response") return "red";
      else if (status == "Missing Info") return "yellow";
    },
    approvedColor(approved) {
      return approved === 'Yes' ? 'green' : approved === 'No' ? 'red' : 'grey';
    },
    // CD (JE on 20210520): Download pdf
    download(pdf) {
      const link = document.createElement('a')
      link.download = pdf.filename
      link.href=pdf.location
      link.click()
    }
  },
  // CD (JE on 20210505): format address for user details
  filters: {
    address(value) {
      return [value.street, value.cityStateZip].filter(Boolean).join(', ')
    }
  }
};
</script>
