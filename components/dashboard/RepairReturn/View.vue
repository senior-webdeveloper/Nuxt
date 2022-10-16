<template>
  <div>
    <UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="deleteRepairReturn"
      title="Are you sure you want to delete this item?"
      content="Items deleted cannot be recovered."
    />

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Repairs &amp; Returns</h1>
                <p>#{{repair_return.formId}}</p>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <UiAppBadge
                  :className="statusColor(repair_return.status)"
                  :label="repair_return.status"
                />
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="py-5">
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="mt-5">
                      <h3>Contact Information</h3>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Name
                      </dt>
                      <dd class="details-dd">
                        {{ repair_return.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company
                      </dt>
                      <dd class="details-dd">
                        {{ repair_return.company }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Email
                      </dt>
                      <dd class="details-dd">
                        {{ repair_return.email }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Phone
                      </dt>
                      <dd class="details-dd">
                        {{ repair_return.phone }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Address
                      </dt>
                      <dd class="details-dd">
                        {{ repair_return.address | address }}
                      </dd>
                    </div>

                    <!--<div class="mt-5">
                      <h3>Claim Details</h3>
                    </div>
                    <div class="mt-2">
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
                          <template
                            v-for="(data, i) in repair_return.claimDetails"
                          >
                            <tr :key="`beyond-repair-preview-${i}`">
                              <td>{{ data.productModel }}</td>
                              <td>{{ data.serialNumber }}</td>
                              <td>{{ data.estimateWarranty }}</td>
                              <td>{{ data.issueDescription }}</td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>-->

                    <div class="mt-5">
                    <h3 id="claim-details">Claim Details</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                      <UiAppTable :headers="claimDetailsHeadersPreview" :sort="false">
                        <tbody>
                          <tr
                            v-for="(data, i) in repair_return.claimDetails"
                            :key="`beyond-repair-preview-${i}`"
                            class="trClass"
                          >
                            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
                              {{data.productModel}}
                            </td>
                            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
                              {{data.serialNumber}}
                            </td>
                            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
                              {{data.estimateWarranty}}
                            </td>
                            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
                              {{data.issueDescription}}
                            </td>
                          </tr>
                        </tbody>
                      </UiAppTable>
                  </dl>

                    <div class="sm:flex sm:py-1">
                    </div>

                    <div class="mt-5">
                      <h3>Authorized Distributor</h3>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Name
                      </dt>
                      <dd class="details-dd">
                        {{ repair_return.authorizedDistributor.name }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor Branch Location
                      </dt>
                      <dd class="details-dd">
                        {{ repair_return.authorizedDistributor.branch }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor City, State, Zip Code
                      </dt>
                      <dd class="details-dd">
                        {{ repair_return.authorizedDistributor.cityStateZip }}
                      </dd>
                    </div>

                    <div class="mt-5">
                      <h4>Distributor Company Information</h4>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Name
                      </dt>
                      <dd class="details-dd">
                        {{
                          repair_return.authorizedDistributor
                            .distributorContactDetails.name
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Email
                      </dt>
                      <dd class="details-dd">
                        {{
                          repair_return.authorizedDistributor
                            .distributorContactDetails.email
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Phone
                      </dt>
                      <dd class="details-dd">
                        {{
                          repair_return.authorizedDistributor
                            .distributorContactDetails.phone
                        }}
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
                  <!-- CD (EV on 20210329): form for status dropdown and submit button using AppForm-->
                  <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                  <form @submit.prevent="formSubmit">
                    <div>
                      <UiAppFormSelect
                        id="status"
                        :options="options"
                        v-model="form.status"
                        label="Status"
                        :required="true"
                      />
                      <!-- CD (JE on 20210505): form for approved dropdown and submit button using AppForm-->
                      <div class="my-4">
                        <UiAppFormSelect
                          id="request_type"
                          :options="optionsRepairOrReturn"
                          v-model="form.repairOrReturn"
                          label="Repairs &amp; Returns"
                          :required="true"
                        />
                      </div>
                    </div>
                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save" />
                    </div>
                  </form>
                </div>
              </div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{repair_return.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{repair_return.createdAt | formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{repair_return.updatedAt | formatDate}}</time></span>
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
/* CD (EV on 20210329): Import query for delete and update technical question*/
import { DELETE_ONE_REPAIR_RETURN, UPDATE_ONE_REPAIR_RETURN, FETCH_FORM_NOTIFICATION } from "./../../../graphql/dashboard/repair-return/repair-return";
export default {
  computed: mapGetters({
    /* CD (EV on 20210329): get the selected technical question (to be updated or deleted)*/
    repair_return: "dashboard/repair-return/repairReturn"
  }),
  data() {
    return {
      modal: false,
      claimDetailsHeadersPreview: ["Product Model", "Serial Number *", "Estimate Warranty", "Issue Description *"],
      form: {
        status: "",
        repairOrReturn: ""
      },
      options: [
        { label: "Pending", value: "Pending" },
        { label: "Missing Info", value: "Missing Info" },
        { label: "Done", value: "Done" }
      ],
      optionsRepairOrReturn: [
        { label: "Pending", value: "Pending" },
        { label: "Repair", value: "Repair" },
        { label: "Return", value: "Return" }
      ]
    };
  },
  created() {
    this.form.status = this.repair_return.status;
    this.form.repairOrReturn = this.repair_return.repairOrReturn;
  },

  methods: {
    async formSubmit() {
      this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      /* CD (EV on 20210329): Get the updated status*/
      // const status = this.selectedStatus;
      /* CD (EV on 20210329): Get _id of the technical question*/
      const _id = this.repair_return._id;
      /* CD (EV on 20210329): Declare variable for query and set (query what data to update [_id] ) (set what field to update [status])*/
      const variables = {
        /* CD (EV on 20210329): _id of technical question to be updated*/
        query: {
          _id: _id
        },
        /* CD (EV on 20210329): field of technical question want to update*/
        set: {
          ...this.form,
          updatedAt: new Date()
        }
      };

      /* CD (EV on 20210329): Declare mutation*/
      const mutation = UPDATE_ONE_REPAIR_RETURN;
      /* CD (EV on 20210329): Update the technical question*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210329): If update is success*/
      if (mutatate.data.updateOneRepair_return) {
           /* CD (JE on 20210513): Declare query variable*/
        const query = FETCH_FORM_NOTIFICATION;
        /* CD (JE on 20210513): Declare variable for query notification name is Repair Return*/
        const variables = {
          query: {
            name: "Repair Return"
          }
        };

        /* CD (JE on 20210513): Fetch form notification*/
        const form_notification = await this.$apollo.query({
          query,
          variables
        });

        // CD (JE on 20210513): send email notification for status or repairOrReturn is change
        if (
          this.repair_return.status !==
            mutatate.data.updateOneRepair_return.status ||
          this.repair_return.repairOrReturn !==
            mutatate.data.updateOneRepair_return.repairOrReturn
        ) {
          await this.$axios.$post(
            "/api/v1/dashboard/send-email/repair-return",
            {
              initial_status: this.repair_return.status,
              repair_return: {
                ...this.repair_return,
                ...mutatate.data.updateOneRepair_return
              },
              form_notification: form_notification.data.form_notification,
              email: this.repair_return.email
            }
          );
        }

        /* CD (EV on 20210329): update the selected technical question*/
        this.$store.dispatch(
          "dashboard/repair-return/updateRepairReturn",
          mutatate.data.updateOneRepair_return
        );
        /* CD (EV on 20210329): close the slider*/
        this.$store.dispatch("dashboard/repair-return/hideSlider");
        /* CD (EV on 20210329): Show notification of success update*/
        this.$store.dispatch("dashboard/repair-return/showNotificationUpdate", {
          type: "success",
          title: "Update Successful",
          content: "",
          show: true
        });
      }
    },
    async deleteRepairReturn() {
      /* CD (EV on 20210329): Get _id of the technical question*/
      const _id = this.repair_return._id;
      const variables = {
        /* CD (EV on 20210329): _id of technical question to be deleted*/
        query: {
          _id: _id
        }
      };
      /* CD (EV on 20210329): Declare mutation*/
      const mutation = DELETE_ONE_REPAIR_RETURN;
      /* CD (EV on 20210329): Delete the technical question*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210329): If delete is success*/
      if (mutatate.data.deleteOneRepair_return) {
        /* CD (EV on 20210329): Remove the selected technical question from technical questions (will also reflect on table)*/
        this.$store.dispatch("dashboard/repair-return/deleteRepairReturn");
        /* CD (EV on 20210329): Hide slider*/
        this.$store.dispatch("dashboard/repair-return/hideSlider");
        /* CD (EV on 20210329): Show notification of success delete*/
        this.$store.dispatch("dashboard/repair-return/showNotificationUpdate", {
          title: "Success",
          type: "success",
          content: "Deleted",
          show: true
        });
        this.modal = false;
      }
    },
    statusColor(status) {
      /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
      if (status == "Done") return "green";
      else if (status == "Pending") return "red";
      else if (status == "Missing Info") return "yellow";
    }
  },
  filters: {
    // CD (JE on 20210513): format address
    address(address) {
      return [address.street, address.city, address.state, address.zip].join(
        ", "
      );
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  }
};
</script>
