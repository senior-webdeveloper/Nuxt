<template>
  <div>
    <UiAppModal
      v-if="selected"
      :show="modal"
      @close="modal = false"
      @confirm="deleteDistributorAndSalesRep"
      :title="`Are you sure to delete ${selected.name || 'N/A'}`"
      content="This action is irreversable"
    />
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="hideNotification"
    />
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="hideSlider"
      :title="slider.title"
    >
      <DashboardAdminCmsFindDistributorsView
        v-if="slider.type !== 'add'"
        :is-edit="slider.type === 'edit'"
        @submit:delete="showDeleteModal"
        @submit:update="hideSliderOnAddOrEdit"
      />
      <DashboardAdminCmsFindDistributorsAdd
        v-else
        @submit:create="hideSliderOnAddOrEdit"
      />
    </UiAppSlideOverPanel>

    <UiAppTable
      :headers="headings"
      title="Distributors and Sales Representative"
    >
      <template #toolbar>
        <UiAppButton className="primary" label="Add Entry" @click="add" />
      </template>
      <!-- CD (EV on 20210302): Body of the table  -->
      <tbody>
        <!-- CD (EV on 20210302): Render table row -->
        <template v-if="$fetchState.pending">
          <tr>
            <td :colspan="headings.length">Loading</td>
          </tr>
        </template>
        <tr
          v-else
          class="trClass"
          v-for="(distributor_and_sales_rep, index) in pagination.items"
          :key="index"
        >
          <td
            class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap"
          >
            <!-- CD (EV on 20210302): Use AppBadge -->
            <UiAppBadge
              :className="statusColor(distributor_and_sales_rep.status)"
              :label="distributor_and_sales_rep.status || 'Unpublished'"
            />
          </td>
          <td
            class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap"
          >
            {{ distributor_and_sales_rep.name }}
          </td>
          <td
            class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap"
          >
            {{ distributor_and_sales_rep.category }}
          </td>
          <td
            class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap"
          >
            {{ distributor_and_sales_rep.categoryType }}
          </td>
          <td
            class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap"
          >
            {{ distributor_and_sales_rep.telephone }}
          </td>
          <td
            class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap"
          >
            {{ distributor_and_sales_rep.address | address | notAvailable }}
          </td>
          <td
            class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap"
          >
            <!-- CD (CT on 20210609): Updated icons and order -->
            <!-- @click here is inconsistent with codes on forms. Should be ShowSliderView instead of viewNews(data) -->
            <!--<UiAppButton
              className="icon-tables"
              @click="viewData(distributor_and_sales_rep)"
              ><UiIconView />
            </UiAppButton>-->
            <UiAppButton
              className="icon-tables"
              @click="editData(distributor_and_sales_rep)"
              ><UiIconView />
            </UiAppButton>
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
import algoliaSearch from "algoliasearch";
import {
  FETCH_DISTRIBUTOR_AND_SALES_REP,
  DELETE_ONE_DISTRIBUTOR_AND_SALES_REP
} from "~/graphql/dashboard/admin/map/distributor-and-sales-representative";
import ViewData from "./View";
import Add from "./Add.vue";
import paginationMixin from "~/mixins/pagination";
export default {
  mixins: [paginationMixin],
  components: { ViewData, Add },
  computed: {
    ...mapGetters({
      /* CD (EV on 20210329): Get initial distributors_and_sales_rep */
      paginationItems:
        "dashboard/distributor-and-sales-representative/distributorAndSalesRepresentatives",
      /* CD (EV on 20210329): Get initial slider */
      slider: "dashboard/distributor-and-sales-representative/slider",
      /* CD (EV on 20210329): Get initial notification */
      notification:
        "dashboard/distributor-and-sales-representative/notification",
      selected:
        "dashboard/distributor-and-sales-representative/distributorAndSalesRepresentative"
    })
  },
  data() {
    return {
      algolia: null,
      modal: false,
      /* CD (EV on 20210329): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Status",
        "Name",
        "Category",
        "Type",
        "Telephone",
        "Address",
        "Actions"
      ]
    };
  },
  mounted() {
    this.algolia = algoliaSearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    );
  },
  filters: {
    notAvailable(value) {
      return value || "N/A";
    },
    address(address) {
      return [
        address.streetAddress,
        address.addressLocality,
        address.addressRegion,
        address.country,
        address.postalCode
      ].join(", ");
    }
  },
  async fetch() {
    /* CD (EV on 20210329): Declare query variable*/
    const query = FETCH_DISTRIBUTOR_AND_SALES_REP;
    /* CD (EV on 20210329): Fetch technical questions*/
    const {
      data: { distributors_and_sales_representatives }
    } = await this.$apollo.query({ query });
    this.$store.dispatch(
      "dashboard/distributor-and-sales-representative/getDistributorAndSalesRepresentatives",
      distributors_and_sales_representatives
    );
  },
  methods: {
    createData(data) {},
    updateData(data) {},
    showDeleteModal() {
      this.hideSlider();
      this.modal = true;
    },
    add() {
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/setSlider",
        {
          type: "add",
          show: true,
          title: ""
        }
      );
    },
    editData(data) {
      /* CD (EV on 20210329): Show Slider*/
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/setSlider",
        {
          show: true,
          type: "edit",
          title: ""
        }
      );
      /* CD (EV on 20210329): Get the viewed technical question*/
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/getDistributorAndSalesRepresentative",
        data
      );
    },
    viewData(data) {
      /* CD (EV on 20210329): Get the viewed technical question*/
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/getDistributorAndSalesRepresentative",
        data
      );

      /* CD (EV on 20210329): Show Slider*/
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/setSlider",
        {
          show: true,
          type: "view",
          title: "View Distributor and Sales Representative"
        }
      );
    },
    async deleteDistributorAndSalesRep() {
      await this.$apollo.mutate({
        mutation: DELETE_ONE_DISTRIBUTOR_AND_SALES_REP,
        variables: {
          query: { _id: this.selected._id }
        }
      });
      if (this.selected._id) {
        await this.algolia
          .initIndex("distributors_and_sales_representatives-mongodb")
          .deleteObject(this.selected._id);
      }
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/deleteDistributorAndSalesRepresentative"
      );
      this.modal = false;
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/showNotificationUpdate",
        {
          show: true,
          title: "Success",
          content: "Deleted"
        }
      );
    },
    hideSlider() {
      /* CD (EV on 20210329): Hide slider*/
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/setSlider",
        {
          show: false,
          type: "hide",
          title: ""
        }
      );
    },
    deleteData(data) {
      this.modal = true;
      /* CD (EV on 20210329): Get the viewed technical question*/
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/getDistributorAndSalesRepresentative",
        data
      );
    },
    hideSliderOnAddOrEdit(data) {
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/showNotificationUpdate",
        {
          show: true,
          title: "Success",
          content: this.slider.type === "add" ? "Saved" : "Updated"
        }
      );
      if (this.slider.type === "edit") {
        this.$store.dispatch(
          "dashboard/distributor-and-sales-representative/updateDistributorAndSalesRepresentative",
          data
        );
      } else {
        this.$store.dispatch(
          "dashboard/distributor-and-sales-representative/pushDistributorAndSalesRepresentative",
          data
        );
      }
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/setSlider",
        {
          show: false,
          type: "hide"
        }
      );
    },
    hideNotification() {
      /* CD (EV on 20210329): Hide notification*/
      this.$store.dispatch(
        "dashboard/distributor-and-sales-representative/hideNotification"
      );
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      return status === "Unpublished" ? "red" : "green";
    }
  }
};
</script>
