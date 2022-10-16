<template>
  <div>
    <!-- Use AppModal below to confirm deletion -->
    <!--<UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="deleteTechnicalQuestion"
      title="Are you sure you want to delete this item?"
      content="Items deleted cannot be recovered."
    />-->
    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>
                  View/Edit {{ isDistributor ? "Distributor" : "Sales Representative" }} Details
                </h1>
                <p>#009</p>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <UiAppBadge
                    :className="statusColor(form.status)"
                    :label="form.status"
                  />
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <DashboardAdminCmsFindDistributorsAdd
                v-if="isEdit"
                :data="form"
                :is-edit="isEdit"
                @submit:update="$emit('submit:update', $event)"
              />
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Submission Details</h2>
            <div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <!--<div class="space-y-6">
                  <h2>Status</h2>
                </div>-->
              </div>
              <div class="py-6 mt-8 space-y-5">
                <div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Submitted by {{form.createdBy}}</span>
                  <!-- CD (CT on 20210614) - Disregard this field for now -->
                </div>
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{form.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{form.createdAt | formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{form.updatedAt | formatDate}}</time></span>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <!-- CD (CT on 20210412): Delete button-->
              <UiAppButton
                className="secondary-full"
                @click="$emit('submit:delete')"
                label="DELETE"
              />
            </div>
            <!--<div class="mt-6">-->
            <!-- CD (CT on 20210413): Cancel button-->
            <!--<UiAppButton className="tertiary" @click="$store.dispatch('dashboard/technical-questions/hideSlider')" label="Cancel" />
            </div>-->
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import { DELETE_ONE_DISTRIBUTOR_AND_SALES_REP } from "~/graphql/dashboard/admin/map/distributor-and-sales-representative";
export default {
  props: ["isEdit"],
  computed: {
    ...mapGetters({
      /* CD (EV on 20210329): get the selected technical question (to be updated or deleted)*/
      distributors_and_sales_rep:
        "dashboard/distributor-and-sales-representative/distributorAndSalesRepresentative",
      slider: "dashboard/distributor-and-sales-representative/slider"
    }),
    isDistributor() {
      return this.form.category === "Distributor";
    }
  },
  data() {
    return {
      modal: false,
      form: {
        name: "",
        category: "",
        categoryType: "",
        address: {
          country: "",
          addressRegion: "",
          addressLocality: "",
          postalCode: "",
          streetAddress: ""
        },
        _geoloc: {
          lat: "",
          lng: ""
        },
        company: "",
        territoryState: "",
        territoryTitle: "",
        email: "",
        telephone: "",
        faxNumber: "",
        url: "",
        isNationalDistributor: "",
        status: "Unpublished",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    };
  },
  created() {
    this.form = JSON.parse(JSON.stringify(this.distributors_and_sales_rep))
  },
  methods: {
    toggle() {
      this.isEdit = !this.isEdit;
    },
    is(action) {
      return this.slider.type === action;
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      return status === "Published" ? "green" : "red";
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date ? date : Date.now()).toLocaleString();
    }
  }
};
</script>
