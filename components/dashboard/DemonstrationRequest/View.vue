<template>
  <div>
    <UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="deleteDemonstrationRequest"
      title="Are you sure you want to delete this item?"
      content="Items deleted cannot be recovered."
    />

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Demonstration Request Form</h1>
                <p>{{demonstration_request.formId}}</p>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <UiAppBadge
                  :className="statusColor(demonstration_request.status)"
                  :label="demonstration_request.status"
                />
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="py-5">
                  <div class="mt-5">
                    <h3 id="opportunity-details">Opportunity Details</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Hand Tools or Spindle
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.handToolsOrSpindle === 'spindle' ? 'Spindle' : 'Hand Tool' }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1" v-if="demonstration_request.csePdf">
                      <dt class="details-dt">
                        Download Cost Savings Analysis
                      </dt>
                      <dd class="details-dd">
                        <UiAppButton
                          className="icon-tables"
                          @click="download(demonstration_request.csePdf)"
                          ><UiIconCloudDownload />
                        </UiAppButton>
                    </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Opportunity Value
                      </dt>
                      <dd class="details-dd">
                        $ {{ demonstration_request.value }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Time to Close (days)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.timeToClose }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <h3 id="tooling-details">Tooling Details</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cutting Tool Diameter and Type (ex. 0.008 Carbide Drill)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.cuttingTool }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Material
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.material }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <h3 id="current-state">Current State</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Length of Cut (IN)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.currentState.cutLength | formatNumberThreeDecimals }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Depth of Cut (IN)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.currentState.cutDepth | formatNumberThreeDecimals }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Spindle Speed (RPM)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.currentState.spindleSpeed | formatNumber }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Feed (IPR)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.currentState.feed | formatNumberFiveDecimals }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <h3 id="future-state">Future State</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Length of Cut (IN)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.futureState.cutLength | formatNumberThreeDecimals }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Depth of Cut (IN)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.futureState.cutDepth | formatNumberThreeDecimals }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Spindle Speed (RPM)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.futureState.spindleSpeed | formatNumber }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Feed (IPR)
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.futureState.feed | formatNumberFiveDecimals }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <h3 id="additional-details">Additional Details</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        What will qualify as a successful test?
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.successfulTest }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Demonstration Date
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.demonstrationDate }}
                      </dd>
                    </div>
                  </dl>

                  <div class="overflow-x-auto">
                  <table class="table min-w-full mt-1 border border-b border-gray-200 divide-y divide-blueGray-200 sm:mt-4">
                    <thead>
                      <tr class="trClass">
                        <th scope="col" class="thClass">Quantity</th>
                        <th scope="col" class="thClass">Catalog or Model</th>
                        <th scope="col" class="thClass">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- CD (EV on 20210302): Render table row -->
                      <tr v-for="(productDetail, index) in demonstration_request.productDetails" :key="index" class="trClass">
                        <td class="tdClass">{{ productDetail.quantity }}</td>
                        <td class="tdClass">{{ productDetail.catalogOrModel }}</td>
                        <td class="tdClass">{{ productDetail.description }}</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>

                  <div class="mt-5">
                    <h3 id="contact-details">Company Information</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        IMR Company
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.nskSalesRep }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Name
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Email
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.email }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <h3 id=""></h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.distributorDetails.distributor }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor Street
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.distributorDetails.street }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor City, State, Zip Code
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.distributorDetails.cityStateZip }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor Sales Rep Name
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.distributorDetails.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor Sales Rep Title
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.distributorDetails.title }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor Sales Rep Email
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.distributorDetails.email }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <h3 id=""></h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Company Name
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.endUserCompanyDetails.endUserCompany }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Address
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.endUserCompanyDetails.cityStateZip }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Contact Name
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.endUserCompanyDetails.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Contact Title
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.endUserCompanyDetails.title }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Direct Phone Number
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.endUserCompanyDetails.phone }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Email Address
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.endUserCompanyDetails.email }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Shipping Option
                      </dt>
                      <dd class="details-dd">
                        {{ demonstration_request.shippingOption }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Status and Submission Details</h2>
            <div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <div class="space-y-6">
                  <h3>Status</h3>
                  <!-- CD (EV on 20210329): form for status dropdown and submit button using AppForm-->
                  <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                  <form @submit.prevent="formSubmit">
                    <div>
                      <UiAppFormSelect
                        :options="options"
                        v-model="form.status"
                        label="Status"
                        :required="true"
                      />
                    </div>
                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save" />
                    </div>
                  </form>
                </div>
              </div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created by {{demonstration_request.createdBy}}</span>
                </div>
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{demonstration_request.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{demonstration_request.createdAt|formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{demonstration_request.updatedAt|formatDate}}</time></span>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <!-- CD (CT on 20210412): Delete button-->
              <UiAppButton
                className="secondary-full"
                @click="modal = true"
                label="DELETE"
              />
            </div>
            <!--<div class="mt-6">-->
            <!-- CD (CT on 20210413): Cancel button-->
            <!--<UiAppButton className="tertiary" @click="$store.dispatch('dashboard/demonstration-request/hideSlider')" label="Cancel" />
            </div>-->
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  DELETE_ONE_DEMONSTRATION_REQUEST,
  UPDATE_ONE_DEMONSTRATION_REQUEST,
  FETCH_FORM_NOTIFICATION
} from "./../../../graphql/dashboard/demonstration-request/demonstration-request";
export default {
  computed: mapGetters({
    /* CD (EV on 20210329): get the selected technical question (to be updated or deleted)*/
    demonstration_request:
      "dashboard/demonstration-request/demonstrationRequest"
  }),
  data() {
    return {
      headers: ["Quantity", "Catalog # or Model #", "Description"],
      modal: false,
      options: [
        { label: "Pending", value: "Pending" },
        { label: "Missing Info", value: "Missing Info" },
        { label: "Done", value: "Done" }
      ],
      form: {
        status: ""
      },
      // CD (EV on 20210427): email sending state
      email: {
        submitting: false,
        isSubmitted: false,
        error: false
      }
    };
  },
  created() {
    this.form.status = this.demonstration_request.status;
  },
  methods: {
    async formSubmit() {
      const _id = this.demonstration_request._id;
      this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      /* CD (EV on 20210329): Declare variable for query and set (query what data to update [_id] ) (set what field to update [status])*/
      const variables = {
        /* CD (EV on 20210329): _id of technical question to be updated*/
        query: {
          _id: _id
        },
        /* CD (EV on 20210329): field of technical question want to update*/
        set: this.form
      };
      /* CD (EV on 20210329): Declare mutation*/
      const mutation = UPDATE_ONE_DEMONSTRATION_REQUEST;
      /* CD (EV on 20210329): Update the technical question*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210329): If update is success*/
      if (mutatate.data.updateOneDemonstration_request) {
        const updated_status = this.form.status;
        const initial_status = this.demonstration_request.status;
        /* CD (EV on 20210329): update the selected technical question*/
        this.$store.dispatch(
          "dashboard/demonstration-request/updateDemonstrationRequest",
          mutatate.data.updateOneDemonstration_request
        );
        /* CD (EV on 20210329): close the slider*/
        this.$store.dispatch("dashboard/demonstration-request/hideSlider");
        /* CD (EV on 20210329): Show notification of success update*/
        this.$store.dispatch(
          "dashboard/demonstration-request/showNotificationUpdate",
          {
            type: "success",
            title: "Update Successful",
            content: "",
            show: true
          }
        );
        if (initial_status !== updated_status) {
          /* CD (EV on 20210429): Declare query variable*/
          const query = FETCH_FORM_NOTIFICATION;
          /* CD (EV on 20210429): Declare variable for query where form name is Technical Questions*/
          const variables = {
            /* CD (EV on 20210429): name of technical question to be fetch*/
            query: {
              name: "Demonstration Request"
            }
          };

          /* CD (EV on 20210429): Fetch form notification*/
          const form_notification = await this.$apollo.query({
            query,
            variables
          });
          /* CD (EV on 20210429): if fetching of form notification is done, send email*/
          if (form_notification.data.form_notification) {
            try {
              // CD (EV on 20210427): update email sending state
              this.email.submitting = true;
              this.email.error = false;
              // CD (EV on 20210427): send email
              await this.$axios.$post(
                "/api/v1/dashboard/send-email/demonstration-request",
                {
                  initial_status: initial_status,
                  updated_status: updated_status,
                  demonstration_request: this.demonstration_request,
                  form_notification: form_notification.data.form_notification,
                  email: this.demonstration_request.email
                }
              );
              // CD (EV on 20210427): if success sending email update email state
              this.email.submitting = false;
              this.email.isSubmitted = true;

              await new Promise(resolve => setTimeout(resolve, 2500));
            } catch (e) {
              // CD (EV on 20210427): if error sending email update email state
              this.email.submitting = false;
              this.email.error = true;

              console.error(e);
            }
          }
        }
      }
    },
    async deleteDemonstrationRequest() {
      /* CD (EV on 20210329): Get _id of the demonstration-request*/
      const _id = this.demonstration_request._id;
      const variables = {
        /* CD (EV on 20210329): _id of demonstration-request to be deleted*/
        query: {
          _id: _id
        }
      };
      // /* CD (EV on 20210329): Declare mutation*/
      const mutation = DELETE_ONE_DEMONSTRATION_REQUEST;
      /* CD (EV on 20210329): Delete the technical question*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });

      // /* CD (EV on 20210329): If delete is success*/
      // console.log(mutatate)
      if (mutatate.data.deleteOneDemonstration_request) {
        this.modal = false;
        /* CD (EV on 20210329): Remove the selected warranty registration from warranty registrations (will also reflect on table)*/
        this.$store.dispatch(
          "dashboard/demonstration-request/deleteDemonstrationRequest"
        );
        /* CD (EV on 20210329): Hide slider*/
        this.$store.dispatch("dashboard/demonstration-request/hideSlider");
        /* CD (EV on 20210329): Show notification of success delete*/
        this.$store.dispatch(
          "dashboard/demonstration-request/showNotificationUpdate",
          {
            title: "Success",
            type: "success",
            content: "Demonstration Request Deleted",
            show: true
          }
        );
      }
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      if (status == "Done") return "green";
      else if (status == "Pending") return "red";
      else if (status == "Missing Info") return "yellow";
    },
    download(pdf) {
      const link = document.createElement('a')
      link.download = pdf.filename
      link.href=pdf.location
      link.click()
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString()
    },
    formatNumber(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(number)
    },
    formatNumberThreeDecimals(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(number)
    },
    formatNumberFourDecimals(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 }).format(number)
    },
    formatNumberFiveDecimals(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 5 }).format(number)
    }
  }

};
</script>
