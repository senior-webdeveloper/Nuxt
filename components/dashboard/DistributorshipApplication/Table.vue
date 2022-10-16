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
      <!-- CD (EV on 20210302): Use DistributorshipApplicationsView for as slider content -->
      <DashboardDistributorshipApplicationView v-if="slider.type == 'view'" />
    </UiAppSlideOverPanel>
    <!-- CD (EV on 20210302): Use AppTable -->
    <UiAppTable :headers="headings" title="Distributorship Applications">
      <!-- CD (EV on 20210302): Body of the table  -->
      <tbody v-if="$fetchState.pending">
        <tr class="bg-gray-50">
          <td
            :colspan="headings.length"
            class="px-6 py-4 text-sm font-medium text-center text-blueGray-900 whitespace-nowrap"
          >
            Loading Data
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <!-- CD (EV on 20210302): Render table row -->
        <tr
          class="trClass"
          v-for="(distributorship_application,
          index) in pagination.items"
          :key="index"
        >
          <td class="tdClass">
            <!-- CD (EV on 20210302): Use AppBadge -->
            <UiAppBadge
              :className="statusColor(distributorship_application.status)"
              :label="distributorship_application.status"
            />
          </td>

          <td class="tdClass">
            <!-- CD (EV on 20210302): Use AppBadge -->
            <UiAppBadge
              :className="approvedColor(distributorship_application.approved)"
              :label="distributorship_application.approved"
            />
          </td>
          <!-- CD (CT on 20210331): Complete list of fields here -->
          <td class="tdClass">
            {{ distributorship_application.companyInformation.createdAt }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.companyInformation.legalName }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.companyInformation.address }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.companyInformation.phone }}
          </td>
          <td class="tdClass">
            <div class="flex flex-col space-y-1">
              <div>{{ distributorship_application.companyInformation.principalContact.nameAndTitle }}</div>
              <div>{{ distributorship_application.companyInformation.principalContact.email }}</div>
              <div>{{ distributorship_application.companyInformation.principalContact.phone }}</div>
            </div>
          </td>
          <td class="tdClass">
            {{ distributorship_application.companyInformation.nameAndTitleOfficersOrOwners }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.companyInformation.legalNameAndAddressHeadquartersParentCompany }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.companyInformation.geographicConcentration }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.companyInformation.primaryIndustriesServed }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.companyInformation.distributorType | distributorType }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.companyInformation.primaryProductLinesDistributed }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.salesInformation.crm }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.salesInformation.trackSalesOpportunites }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.salesInformation.showValue }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.salesInformation.trackSuccessStories }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.salesInformation.annualSalesCommitment }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.salesRepresentation.quantityInsideSales }}
          </td>
          <td class="tdClass">
            {{ distributorship_application.salesRepresentation.quantityOutsideSales }}
          </td>
          <!--<td class="tdClass">
            <template v-for="(salesDetail, i) in distributorship_application.salesRepresentation.salesDetails">
              <tr class="mb-2" :key="`sales-details-${i}`">
                <td class="flex flex-col space-y-1">
                  <div>{{ salesDetail.email }}</div>
                  <div>{{ salesDetail.name }}</div>
                  <div>{{ salesDetail.phone }}</div>
                  <div>{{ salesDetail.title }}</div>
                </td>
              </tr>
            </template>
          </td>-->
          <td class="tdClass" v-if="distributorship_application.creditInformation">
            <div v-for="(reference, i) in distributorship_application.creditInformation.referenceInformation.tradeReference.companyDetails" :key="i">
              <div>{{reference.companyLegalName}}</div>
              <div>{{reference.phone}}</div>
              <div>{{reference.email}}</div>
            </div>
          </td>
          <td class="tdClass" v-if="distributorship_application.creditInformation">
            <div  v-for="(attachment, i) in distributorship_application.creditInformation.addressInformation.attachments" :key="i">
              <a :href="attachment" target="_blank">{{attachment | fileName}}  <UiIconCloudDownload class="inline-block"/></a>
            </div>
          </td>
          <td class="tdClass">
            <!-- CD (KO on 20210609): Updated icons and order -->
            <div class="flex flex-row space-x-2">
              <UiAppButton
                className="icon-tables"
                @click="showSliderView(distributorship_application)"
                ><UiIconView />
              </UiAppButton>
              <UiAppButton
                className="icon-tables"
                @click="download(distributorship_application.pdf)"
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
import { FETCH_DISTRIBUTORSHIP_APPLICATIONS } from "./../../../graphql/dashboard/distributorship-application/distributorship-application";
import paginationMixin from '~/mixins/pagination'
export default {
  mixins: [paginationMixin],
  computed: mapGetters({
    /* CD (EV on 20210329): Get initial distributorship_application */
    paginationItems:
      "dashboard/distributorship-application/distributorshipApplications",
    /* CD (EV on 20210329): Get initial slider */
    slider: "dashboard/distributorship-application/slider",
    /* CD (EV on 20210329): Get initial notification */
    notification: "dashboard/distributorship-application/notification"
  }),
  data() {
    return {
      /* CD (EV on 20210329): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Status",
        "Approved",
        "Application Date",
        "Company Legal Name and d/b/a (if applicable)",
        "Company Address (principle place of business)",
        "Company Phone Number",
        "Company Principal Contact",
        "Company Name and Title Officers Or Owners",
        "Legal Name and Address of Headquarters or Parent Company (principal place of business) (if applicable)",
        "Company Geographic Concentration",
        "Company Primary Industries Served",
        "Company Distributor Type",
        "Company Primary Product Lines Distributed",
        "Sales CRM",
        "Sales Track Sales Opportunity",
        "Sales Show Value",
        "Sales Track Success Stories",
        "Sales Annual Sales Commitment",
        "Sales Rep Quantity Inside Sales",
        "Sales Rep Quantity Outside Sales",
        //"Sales Rep Sales Details",
        "Trade References",
        "Attachments",
        "Actions"
      ],
      loading: true
    };
  },
  async fetch() {
    /* CD (EV on 20210329): Declare query variable*/
    const query = FETCH_DISTRIBUTORSHIP_APPLICATIONS;

    /* CD (EV on 20210329): Fetch technical questions*/
    const {data} = await this.$apollo
      .query({ query })
      /* CD (EV on 20210329): Update technical questions []*/
        this.$store.dispatch(
          "dashboard/distributorship-application/getDistributorshipApplications",
          data.distributorship_applications
        );
  },
  methods: {
    showSliderView(distributorshipApplication) {
      /* CD (EV on 20210329): Show Slider*/
      this.$store.dispatch(
        "dashboard/distributorship-application/showSliderView"
      );
      /* CD (EV on 20210329): Get the viewed technical question*/
      this.$store.dispatch(
        "dashboard/distributorship-application/getDistributorshipApplication",
        distributorshipApplication
      );
    },
    hideSlider() {
      /* CD (EV on 20210329): Hide slider*/
      this.$store.dispatch("dashboard/distributorship-application/hideSlider");
    },
    hideNotification() {
      /* CD (EV on 20210329): Hide notification*/
      this.$store.dispatch(
        "dashboard/distributorship-application/hideNotification"
      );
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      if (status == "Done") return "green";
      else if (status.includes("Pending")) return "red";
      else if (status == "Missing Info") return "yellow";
    },
    approvedColor(approved) {
      return approved === "Yes" ? "green" : approved === "No" ? "red" : "grey";
    },
    // CD (JE on 20210520): Download pdf
    download(pdf) {
      const link = document.createElement("a");
      link.download = pdf.filename;
      link.href = pdf.location;
      link.click();
    }
  },
  filters: {
    // CD (JE on 20210510): format distributor types
    distributorType(value) {
      const types = [
        "Manufacturing",
        "Woodworking",
        "Jewelry",
        "Machine Tools"
      ];
      return Object.values(value)
        .map((selected, i) => (selected ? types[i] : false))
        .filter(Boolean)
        .join(", ");
    }
  }
};
</script>
