<template>
  <div>
    <UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="deleteGuaranteeTrialOfferProgram"
      title="Are you sure you want to delete this item?"
      content="Items deleted cannot be recovered."
    />

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Guarantee Trial Offer Program Form</h1>
                <p>#{{guarantee_trial_offer_program.formId}}</p>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <UiAppBadge
                  :className="statusColor(guarantee_trial_offer_program.status)"
                  :label="guarantee_trial_offer_program.status"
                />
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="py-5">
                  <div class="mt-5">
                    <h3 id="guarantee-trial-offer-program">Guarantee Trial Offer Program</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Test Date
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.testDate }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.distributor }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.endUser }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <h3 id="scope">Scope</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Guarantee
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.guarantee }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <h3 id="contact-information">Contact Information</h3>
                  </div>

                  <div class="mt-5">
                    <p id="distributor-details" class="font-bold">Distributor Details</p>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.distributorDetails.distributor }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor Name
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.distributorDetails.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor Title
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.distributorDetails.title }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor Email
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.distributorDetails.email }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <p id="distributor-details" class="font-bold">End User Details</p>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.endUserDetails.endUser }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Name
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.endUserDetails.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Title
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.endUserDetails.title }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Phone
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.endUserDetails.phone }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Email
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.endUserDetails.email }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User Street
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.endUserDetails.address.street }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        End User City, State, Zip Code
                      </dt>
                      <dd class="details-dd">
                        {{ guarantee_trial_offer_program.endUserDetails.address.cityStateZip }}
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
                        :options="options"
                        v-model="form.status"
                        label="Status"
                        :required="true"
                      />
                      <!-- CD (JE on 20210505): form for approved dropdown and submit button using AppForm-->
                      <div class="my-4">
                        <UiAppFormSelect
                          :options="approveOptions"
                          v-model="form.approved"
                          label="Approved Status"
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
                <div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created by {{guarantee_trial_offer_program.createdBy}}</span>
                </div>
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{guarantee_trial_offer_program.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{guarantee_trial_offer_program.createdAt | formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{guarantee_trial_offer_program.updatedAt | formatDate}}</time></span>
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
/* CD (EV on 20210329): Import query for delete and update gtop*/
import {
  UPDATE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM,
  DELETE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM,
  FETCH_FORM_NOTIFICATION
} from "./../../../graphql/dashboard/guarantee-trial-offer-program/guarantee-trial-offer-program";
export default {
  computed: mapGetters({
    /* CD (EV on 20210329): get the selected gtop (to be updated or deleted)*/
    guarantee_trial_offer_program:
      "dashboard/guarantee-trial-offer-program/guaranteeTrialOfferProgram"
  }),
  data() {
    return {
      modal: false,
      form: {
        status: "",
        approved: ""
      },
      options: [
        { label: "Pending Response", value: "Pending Response" },
        { label: "Missing Info", value: "Missing Info" },
        { label: "Done", value: "Done" }
      ],
      // CD (JE on 20210505): approved options
      approveOptions: [
        { label: 'Yes', value: 'Yes'},
        { label: 'No', value: 'No'},
        { label: 'Pending', value: 'Pending'},
      ]
    };
  },
  created() {
    this.form.status = this.guarantee_trial_offer_program.status;
    this.form.approved = this.guarantee_trial_offer_program.approved || "No";
  },

  methods: {
    async formSubmit() {
      /* CD (EV on 20210329): Get the updated status*/
      // const status = this.selectedStatus;
      /* CD (EV on 20210329): Get _id of the gtop*/
      this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      const _id = this.guarantee_trial_offer_program._id;
      // CD (JE on 20210505): set updateAt on current timestamp
      this.form.updatedAt = new Date();
      /* CD (EV on 20210329): Declare variable for query and set (query what data to update [_id] ) (set what field to update [status])*/
      const variables = {
        /* CD (EV on 20210329): _id of gtop to be updated*/
        query: {
          _id: _id
        },
        /* CD (EV on 20210329): field of gtop want to update*/
        set: {
          ...this.form,
          approved: this.form.approved ? this.form.approved : ''
        }
      };

      /* CD (EV on 20210329): Declare mutation*/
      const mutation = UPDATE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM;
      /* CD (EV on 20210329): Update the gtop*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210329): If update is success*/
      if (mutatate.data.updateOneGuarantee_trial_offer_program) {
        /* CD (JE on 20210506): Declare query variable*/
        const query = FETCH_FORM_NOTIFICATION;
        /* CD (JE on 20210506): Declare variable for query notification name is Guarantee Trial Offer Program*/
        const variables = {
          query: {
            name: "Guarantee Trial Offer Program"
          }
        };

        /* CD (JE on 20210506): Fetch form notification*/
        const form_notification = await this.$apollo.query({
          query,
          variables
        });

        // CD (JE on 20210506): send email notification for status if change
        if (
          this.guarantee_trial_offer_program.status !==
            mutatate.data.updateOneGuarantee_trial_offer_program.status ||
          this.guarantee_trial_offer_program.approved !==
            mutatate.data.updateOneGuarantee_trial_offer_program.approved
        ) {
          await this.$axios.$post(
            "/api/v1/dashboard/send-email/guarantee-trial-offer-program",
            {
              initial_status: this.guarantee_trial_offer_program.status,
              guarantee_trial_offer_program: {
                ...this.guarantee_trial_offer_program,
                ...mutatate.data.updateOneGuarantee_trial_offer_program
              },
              form_notification: form_notification.data.form_notification,
              email: this.guarantee_trial_offer_program.distributorDetails.email
            }
          );
        }

        /* CD (EV on 20210329): close the slider*/
        this.$store.dispatch(
          "dashboard/guarantee-trial-offer-program/hideSlider"
        );
        /* CD (EV on 20210329): Show notification of success update*/
        this.$store.dispatch(
          "dashboard/guarantee-trial-offer-program/showNotificationUpdate",
          {
            type: "success",
            title: "Update Successful",
            content: "",
            show: true
          }
        );
        /* CD (EV on 20210329): update the selected gtop*/
        this.$store.dispatch(
          "dashboard/guarantee-trial-offer-program/updateGuaranteeTrialOfferProgram",
          mutatate.data.updateOneGuarantee_trial_offer_program
        );
      }
    },
    async deleteGuaranteeTrialOfferProgram() {
      /* CD (EV on 20210329): Get _id of the gtop*/
      const _id = this.guarantee_trial_offer_program._id;
      const variables = {
        /* CD (EV on 20210329): _id of gtop to be deleted*/
        query: {
          _id: _id
        }
      };
      /* CD (EV on 20210329): Declare mutation*/
      const mutation = DELETE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM;
      /* CD (EV on 20210329): Delete the gtop*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210329): If delete is success*/
      if (mutatate.data.deleteOneGuarantee_trial_offer_program) {
        /* CD (EV on 20210329): Remove the selected gtop from gtops (will also reflect on table)*/
        this.$store.dispatch(
          "dashboard/guarantee-trial-offer-program/deleteGuaranteeTrialOfferProgram"
        );
        /* CD (EV on 20210329): Hide slider*/
        this.$store.dispatch(
          "dashboard/guarantee-trial-offer-program/hideSlider"
        );
        /* CD (EV on 20210329): Show notification of success delete*/
        this.$store.dispatch(
          "dashboard/guarantee-trial-offer-program/showNotificationUpdate",
          {
            title: "Success",
            type: "success",
            content: "Deleted",
            show: true
          }
        );
        this.modal = false;
      }
    },
    /* CD (EV on 20210329): Update color of status column (Using AppBadge)*/
    statusColor(status) {
      if (status == "Done") return "green";
      else if (status == "Pending Response") return "red";
      else if (status == "Missing Info") return "yellow";
    }
  },
  // CD (JE on 20210505): date filters to format raw string date format
  filters: {
    formatDate(value) {
      return new Date(value).toLocaleDateString();
    }
  }
};
</script>

