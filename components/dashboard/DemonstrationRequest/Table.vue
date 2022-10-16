<template>
  <div>
    <!-- CD (EV on 20210302): Use AppNotification -->
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="hideNotification"
    >
    </UiAppNotification>
    <!-- CD (EV on 20210302): Use AppSlideOverPanel -->
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="hideSlider"
      :title="slider.title"
    >
      <!-- CD (EV on 20210302): Use DemonstrationRequestView for as slider content -->
      <DashboardDemonstrationRequestView v-if="slider.type == 'view'" />
    </UiAppSlideOverPanel>
    <!-- CD (EV on 20210302): Use AppTable -->
    <UiAppTable :headers="headings" title="Demonstration Requests">
      <!-- CD (EV on 20210302): Body of the table  -->
      <tbody>
        <!-- CD (EV on 20210302): Render table row -->
        <template v-if="$fetchState.pending || $apollo.loading">
          <tr>
            <td :colspan="headings.length">Loading</td>
          </tr>
        </template>
        <tr
          v-else
          class="trClass"
          v-for="(demonstration_request, index) in pagination.items"
          :key="index"
        >
          <td class="tdClass">
            <!-- CD (EV on 20210302): Use AppBadge -->
            <UiAppBadge
              :className="statusColor(demonstration_request.status)"
              :label="demonstration_request.status"
            />
          </td>
          <td class="tdClass">
            {{ demonstration_request.handToolsOrSpindle === 'spindle' ? 'Spindle' : 'Hand Tool' }}
          </td>
          <!--<td class="tdClass">
            {{ demonstration_request.value }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.timeToClose }}
          </td>
           <td class="tdClass">
            {{ demonstration_request.cuttingTool }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.material }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.currentState.cutLength }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.currentState.cutDepth }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.currentState.spindleSpeed }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.currentState.feed }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.futureState.cutLength }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.futureState.cutDepth }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.futureState.spindleSpeed }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.futureState.feed }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.successfulTest }}
          </td>-->
          <td class="tdClass">
            {{ demonstration_request.demonstrationDate }}
          </td>
          <!-- <td class="tdClass">
            {{ demonstration_request.distributor }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.endUser }}
          </td>
          <td class="tdClass">
            <div
              v-for="(productDetail,
              index) in demonstration_request.productDetails"
              :key="index"
            >
              <p>quantity {{ productDetail.quantity }}</p>
              <p>catalogOrModel {{ productDetail.catalogOrModel }}</p>
              <p>description {{ productDetail.description }}</p>
              <br /><br />
            </div>
          </td>-->
          <td class="tdClass">
            {{ demonstration_request.nskSalesRep }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.name }}
          </td>
          <!--<td class="tdClass">
            {{ demonstration_request.title }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.email }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.date }}
          </td> -->
          <td class="tdClass">
            {{ demonstration_request.distributorDetails.distributor }}
          </td>
          <!-- <td class="tdClass">
            {{ demonstration_request.distributorDetails.street }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.distributorDetails.cityStateZip }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.distributorDetails.name }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.distributorDetails.title }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.distributorDetails.email }}
          </td>-->
          <td class="tdClass">
            {{ demonstration_request.endUserCompanyDetails.endUserCompany }}
          </td>
          <!--<td class="tdClass">
            {{ demonstration_request.endUserCompanyDetails.cityStateZip }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.endUserCompanyDetails.name }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.endUserCompanyDetails.title }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.endUserCompanyDetails.phone }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.endUserCompanyDetails.email }}
          </td>
          <td class="tdClass">
            {{ demonstration_request.shippingOption }}
          </td> -->
          <td class="tdClass">
              <UiAppButton
                className="icon-tables"
                v-if="demonstration_request.csePdf && demonstration_request.csePdf.location"
                @click="download(demonstration_request.csePdf)"
                ><UiIconCloudDownload />
              </UiAppButton>
          </td>
          <td class="tdClass">
            <!-- CD (KO on 20210609): Updated icons and order -->
            <div class="flex flex-row space-x-2">
              <UiAppButton
                className="icon-tables"
                @click="showSliderView(demonstration_request)"
                ><UiIconView />
              </UiAppButton>
              <UiAppButton
                className="icon-tables"
                @click="download(demonstration_request.pdf)"
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
/* CD (EV on 20210329): Import fetch demonstration requests query */
import { FETCH_DEMONSTRATION_REQUESTS } from "./../../../graphql/dashboard/demonstration-request/demonstration-request";
import paginationMixin from '~/mixins/pagination'
export default {
  mixins: [paginationMixin],
  computed: mapGetters({
    /* CD (EV on 20210329): Get initial demonstration-requests */
    paginationItems:
      "dashboard/demonstration-request/demonstrationRequests",
    /* CD (EV on 20210329): Get initial slider */
    slider: "dashboard/demonstration-request/slider",
    /* CD (EV on 20210329): Get initial notification */
    notification: "dashboard/demonstration-request/notification"
  }),
  data() {
    return {
      headings: [
        "Status",
        "Hand Tools or Spindle",
        // "Opportunity Value",
        // "Time to Close",
        // "cuttingTool",
        // "material",
        // "current State cutLength",
        // "current State cutDepth",
        // "current State spindleSpeed",
        // "current State feed",
        // "future State cutLength",
        // "future State cutDepth",
        // "future State spindleSpeed",
        // "future State feed",
        // "successfulTest",
        "Demonstration Date",
        // "productDetails",
        "IMR Company",
        "Name",
        // "title",
        // "email",
        // "date",
        "Distributor",
        // "Distributor Street",
        // "Distributor City, State, Zip Code",
        // "Distributor Sales Rep Name",
        // "Distributor Sales Rep Title",
        // "Distributor Sales Rep Email",
        "End User Company Name",
        // "End User Address",
        // "End User Contact Name",
        // "End User Contact Title",
        // "End User Direct Phone Number",
        // "End User Email Address",
        // "Shipping Option",
        "CSE Pdf",
        "Action"
      ]
    };
  },
  async fetch() {
    /* CD (EV on 20210329): Declare query variable*/
    const query = FETCH_DEMONSTRATION_REQUESTS;
 
    /* CD (EV on 20210329): Fetch demonstration-requests*/
    const {data} = await this.$apollo.query({ query })
        console.log(data)
    /* CD (EV on 20210329): Update demonstration-requests []*/
    this.$store.dispatch(
      "dashboard/demonstration-request/getDemonstrationRequests",
      data.demonstration_requests
    );

  },
  methods: {
    showSliderView(demonstrationRequest) {
      /* CD (EV on 20210329): Show Slider*/
      this.$store.dispatch("dashboard/demonstration-request/showSliderView");
      /* CD (EV on 20210329): Get the viewed demonstration-request*/
      this.$store.dispatch(
        "dashboard/demonstration-request/getDemonstrationRequest",
        demonstrationRequest
      );
    },
    hideSlider() {
      /* CD (EV on 20210329): Hide slider*/
      this.$store.dispatch("dashboard/demonstration-request/hideSlider");
    },
    hideNotification() {
      /* CD (EV on 20210329): Hide notification*/
      this.$store.dispatch("dashboard/demonstration-request/hideNotification");
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      if (status == "Done") return "green";
      else if (status == "Pending") return "red";
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
