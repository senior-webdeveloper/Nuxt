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
      <!-- CD (EV on 20210302): Use RepairReturnsView for as slider content -->
      <DashboardRepairReturnView v-if="slider.type == 'view'" />
    </UiAppSlideOverPanel>
    <!-- CD (EV on 20210302): Use AppTable -->
    <UiAppTable :headers="headings" title="Repairs &amp; Returns">
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
          v-for="(repair_return, index) in pagination.items"
          :key="`repair-return-${index}`"
        >
          <td class="tdClass">
            <!-- CD (EV on 20210302): Use AppBadge -->
            <UiAppBadge
              :className="statusColor(repair_return.status)"
              :label="repair_return.status"
            />
          </td>

          <td class="tdClass">
            {{ repair_return.repairOrReturn }}
          </td>

          <td class="tdClass">
            {{ repair_return.name }}
          </td>

          <td class="tdClass">
            {{ repair_return.company }}
          </td>

          <td class="tdClass">
            {{ repair_return.email }}
          </td>

          <td class="tdClass">
            {{ repair_return.phone }}
          </td>

          <td class="tdClass">
            {{ repair_return.address | address }}
          </td>

          <td class="tdClass">
            <table>
              <thead>
                <tr>
                  <th>Product Model</th>
                  <th>Serial Number</th>
                  <th>Estimate Warranty</th>
                  <th>Issue Description</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(claimDetail, index) in repair_return.claimDetails"
                  :key="`repair-return-claim-detail-${index}`"
                >
                  <td>
                    {{ claimDetail.productModel }}
                  </td>
                  <td>
                    {{ claimDetail.serialNumber }}
                  </td>
                  <td>
                    {{ claimDetail.estimateWarranty }}
                  </td>
                  <td>
                    {{ claimDetail.issueDescription }}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          <td class="tdClass">
            {{ repair_return.optionsBeyondRepair | beyondRepair }}
          </td>

          <td class="tdClass">
            {{ repair_return.authorizedDistributor.name }}
          </td>

          <td class="tdClass">
            {{ repair_return.authorizedDistributor.branch }}
          </td>

          <td class="tdClass">
            {{ repair_return.authorizedDistributor.cityStateZip }}
          </td>

          <td class="tdClass">
            {{
              repair_return.authorizedDistributor.distributorContactDetails.name
            }}
            <br />
            {{
              repair_return.authorizedDistributor.distributorContactDetails
                .email
            }}
            <br />
            {{
              repair_return.authorizedDistributor.distributorContactDetails
                .phone
            }}
            <br />
          </td>

          <td class="tdClass">
            <!-- CD (KO on 20210609): Updated icons and order -->
            <div class="flex flex-row space-x-2">
              <UiAppButton
                className="icon-tables"
                @click="showSliderView(repair_return)"
                ><UiIconView />
              </UiAppButton>
              <UiAppButton
                className="icon-tables"
                @click="download(repair_return.pdf)"
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
/* CD (EV on 20210329): Import fetch repair return query */
import { FETCH_REPAIR_RETURNS } from "~/graphql/dashboard/repair-return/repair-return";
import paginationMixin from '~/mixins/pagination'
export default {
  mixins: [paginationMixin],
  computed: mapGetters({
    /* CD (EV on 20210329): Get initial guarantee_trial_offer_program */
    paginationItems: "dashboard/repair-return/repairReturns",
    /* CD (EV on 20210329): Get initial slider */
    slider: "dashboard/repair-return/slider",
    /* CD (EV on 20210329): Get initial notification */
    notification: "dashboard/repair-return/notification"
  }),
  data() {
    return {
      // CD (JE on 20210513): loading indicator
      loading: true,
      /* CD (EV on 20210329): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Status",
        "Type",
        "Name",
        "Company",
        "Email",
        "Phone",
        "Address",
        "Claim Details",
        "Beyond Repair",
        "Distributor Name",
        "Distributor Branch Location",
        "Distributor City, State, Zip Code",
        "Distributor Company Information",
        "Actions"
      ]
    };
  },
  async fetch() {
    /* CD (EV on 20210329): Declare query variable*/
    const query = FETCH_REPAIR_RETURNS;

    /* CD (EV on 20210329): Fetch technical questions*/
    const { data } = await this.$apollo.query({ query });
    this.$store.dispatch(
      "dashboard/repair-return/getRepairReturns",
      data.repair_returns
    );
  },
  methods: {
    showSliderView(repairReturn) {
      /* CD (EV on 20210329): Show Slider*/
      this.$store.dispatch("dashboard/repair-return/showSliderView");
      /* CD (EV on 20210329): Get the viewed technical question*/
      this.$store.dispatch(
        "dashboard/repair-return/getRepairReturn",
        repairReturn
      );
    },
    hideSlider() {
      /* CD (EV on 20210329): Hide slider*/
      this.$store.dispatch("dashboard/repair-return/hideSlider");
    },
    hideNotification() {
      /* CD (EV on 20210329): Hide notification*/
      this.$store.dispatch("dashboard/repair-return/hideNotification");
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
  },
  filters: {
    // CD (JE on 20210513): format address
    address(address) {
      return [address.street, address.city, address.state, address.zip].join(
        ", "
      );
    },
    // CD (JE on 20210513): format beyond repair
    beyondRepair(beyond) {
      if(!beyond) return ''
      return beyond.sendItemsBack === "true"
        ? "Send items back"
        : "Destroy items";
    }
  }
};
</script>
