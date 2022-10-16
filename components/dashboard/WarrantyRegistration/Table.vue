// CD (CT on 20210326): component used in only
"/pages/dashboard/warranty-registration/index.vue"

<template>
  <div>
    <!-- CD (EV on 20210302): Use AppNotification -->
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
      <!-- CD (EV on 20210302): Use WarrantyRegistrationView for as slider content -->
      <DashboardWarrantyRegistrationView v-if="slider.type == 'view'" />
    </UiAppSlideOverPanel>
    <UiAppTable :headers="headings" title="Warranty Registrations">
      <tbody>
        <template v-if="$fetchState.pending">
          <tr>
            <td :colspan="headings.length">Loading</td>
          </tr>
        </template>
        <!-- CD (EV on 20210302): Render table row -->
        <tr
          class="trClass"
          v-for="(warranty_registration, index) in pagination.items"
          :key="index"
        >
          <td class="tdClass">
            {{ warranty_registration.name }}
          </td>
          <!-- <td class="tdClass">
            {{ warranty_registration.title }}
          </td> -->
          <td class="tdClass">
            {{ warranty_registration.company }}
          </td>
          <td class="tdClass">
            {{ warranty_registration.email }}
          </td>
          <td class="tdClass">
            {{ warranty_registration.phone }}
          </td>
          <td class="tdClass">
            {{ warranty_registration.primaryIndustriesServed }}
          </td>
          <!-- <td class="tdClass">
            {{ warranty_registration.mailingAddress.street }}
          </td>
          <td class="tdClass">
            {{ warranty_registration.mailingAddress.city }}
          </td>
          <td class="tdClass">
            {{ warranty_registration.mailingAddress.zip }}
          </td>
          <td class="tdClass">
            {{ warranty_registration.mailingAddress.country }}
          </td> -->
          <!-- <td class="tdClass">
            {{ warranty_registration.productDetails.distributorPurchaseForm }}
          </td>
          <td class="tdClass">
            {{ warranty_registration.productDetails.productDescription }}
          </td> -->
          <td class="tdClass">
            <!-- CD (KO on 20210609): Updated icons and order -->
            <div class="flex flex-row space-x-2">
              <UiAppButton
                className="icon-tables"
                @click="showSliderView(warranty_registration)"
                ><UiIconView />
              </UiAppButton>
              <UiAppButton
                className="icon-tables"
                @click="download(warranty_registration.pdf)"
                ><UiIconCloudDownload />
              </UiAppButton>
            </div>
          </td>
        </tr>
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
/* CD (EV on 20210330): Import fetch warranty registrations query */
import { FETCH_WARRANTY_REGISTRATIONS } from "./../../../graphql/dashboard/warranty-registration/warranty-registration";
import paginationMixin from '~/mixins/pagination'
export default {
  mixins: [paginationMixin],
  computed: mapGetters({
    /* CD (EV on 20210330): Get initial technical_questions */
    paginationItems:
      "dashboard/warranty-registration/warrantyRegistrations",
    /* CD (EV on 20210330): Get initial slider */
    slider: "dashboard/warranty-registration/slider",
    /* CD (EV on 20210330): Get initial notification */
    notification: "dashboard/warranty-registration/notification"
  }),
  data() {
    return {
      /* CD (EV on 20210330): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Name",
        // "Title",
        "Company",
        "Email",
        "Phone",
        // "Street",
        // "City",
        // "Zip",
        // "Country",
        // "Distributor Purchase From",
        // "Product Description",
        "Primary Industries Served",
        "Action"
      ]
    };
  },
  async fetch() {
    /* CD (EV on 20210330): Declare query variable*/
    const query = FETCH_WARRANTY_REGISTRATIONS;

    /* CD (EV on 20210330): Fetch technical questions*/
    const {data} = await this.$apollo.query({ query })
    /* CD (EV on 20210330): Update warranty registrations []*/
    this.$store.dispatch(
      "dashboard/warranty-registration/getWarrantyRegistrations",
      data.warranty_registrations
    );
  },
  methods: {
    showSliderView(warrantyRegistration) {
      /* CD (EV on 20210330): Show Slider*/
      this.$store.dispatch("dashboard/warranty-registration/showSliderView");
      /* CD (EV on 20210330): Get the viewed warranty registration*/
      this.$store.dispatch(
        "dashboard/warranty-registration/getWarrantyRegistration",
        warrantyRegistration
      );
    },
    hideSlider() {
      /* CD (EV on 20210330): Hide slider*/
      this.$store.dispatch("dashboard/warranty-registration/hideSlider");
    },
    hideNotification() {
      /* CD (EV on 20210329): Hide notification*/
      this.$store.dispatch("dashboard/warranty-registration/hideNotification");
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
