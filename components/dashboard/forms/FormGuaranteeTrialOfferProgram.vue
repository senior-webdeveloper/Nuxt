// CD (KO on 20210228): component used in only "/pages/support/index.vue"

<template>
  <div>
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="notification.show = false"
    />

    <div class="mb-10">
      <div class="relative p-4 text-center md:w-3/4 md:mx-auto sm:px-6 sm:py-8">
        <h1 class="text-gray-200">Guarantee Trial Offer Program Form</h1>
      </div>
      <div class="relative py-4 bg-blueGray-100 lg:w-3/4 md:mx-auto sm:p-6">
        <div class="container mx-auto sm:px-4">
          <!-- <UiAppForm :formInput="formInput"  /> -->
          <div class="mt-5 md:mt-10 sm:mt-0">
            <UiAppPanel v-model="panel" :steps="steps" />
            <form @submit.prevent="formSubmit" class="mt-10">
              <template v-if="viewIs(1)">
                <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                  <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                      <h3>Guarantee Trial Offer Program</h3>
                    </div>
                  </div>
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 lg:col-span-3">
                            <!-- date type -->
                            <UiAppFormField
                              v-model="form.testDate"
                              type="date"
                              label="Test Date *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.distributor"
                              type="text"
                              label="Distributor *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.endUser"
                              type="text"
                              label="End User *"
                              :required="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0">
                  <div>
                    <div>
                      <div class="px-4 sm:px-0">
                        <h3>Scope</h3>
                        <p>
                          The NSK America Corporation (NSK) Guarantee Trial
                          Offer (GTO) program is the purchase of NSK products
                          from NSK, by an authorized NSK Distributor, sold to an
                          NSK End User, guaranteeing the performance of NSK
                          products. The guarantee is based upon the acknowledged
                          and agreed upon parameters by all parties detailed
                          below. The Distributor will create and submit a
                          purchase order for the spindle package once parameters
                          are agreed upon and acknowledged. The GTO expires on
                          the date of the test. This date must be within 30 days
                          of invoice of the complete spindle package. NSK
                          guarantees the performance of the NSK products. If the
                          NSK spindle package does not meet the agreed upon
                          parameters, NSK will accept the return, if that is
                          what the customer ultimately decides. NSK does not
                          guarantee the performance of the perishable tools used
                          during the trial, nor will NSK reimburse the
                          Distributor or End User for any perishable tooling
                          used during the GTO. NSK is not responsible for any or
                          all damages to NSK products or End Users equipment due
                          to improper installation or improper use. All returns
                          are subject to terms of the standard NSK return policy
                          outlined at the bottom of the last page of the current
                          NSK catalog.
                        </p>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.guarantee"
                                type="text"
                                label="Guarantee *"
                                :required="true"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0">
                  <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Contact Information</h3>
                      </div>
                      <div class="px-4 sm:px-0">
                        <p>Distributor Details</p>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.distributorDetails.distributor"
                                type="text"
                                label="Distributor *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.distributorDetails.name"
                                type="text"
                                label="Distributor Name *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.distributorDetails.title"
                                type="text"
                                label="Distributor Title *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6 md:col-span-5">
                              <!-- Email type -->
                              <UiAppFormField
                                v-model="form.distributorDetails.email"
                                type="email"
                                label="Distributor Email *"
                                :required="true"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-5">
                  <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <p>End User Details</p>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <template v-if="viewIs(1)">
                        <div class="overflow-hidden shadow">
                          <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="form.endUserDetails.endUser"
                                  type="text"
                                  label="End User *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="form.endUserDetails.name"
                                  type="text"
                                  label="End User Name *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="form.endUserDetails.title"
                                  type="text"
                                  label="End User Title *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6 md:col-span-4">
                                <UiAppFormField
                                  v-model="form.endUserDetails.phone"
                                  type="text"
                                  label="End User Phone *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6 md:col-span-5">
                                <!-- Email type -->
                                <UiAppFormField
                                  v-model="form.endUserDetails.email"
                                  type="email"
                                  label="End User Email *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="form.endUserDetails.address.street"
                                  type="text"
                                  label="End User Street *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="form.endUserDetails.address.cityStateZip"
                                  type="text"
                                  label="End User City, State, Zip Code *"
                                  :required="true"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                      
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                  <div class="md:col-span-3">
                    <div class="px-4 py-3 bg-gray-50 sm:px-6">
                      <div class="mt-5">
                        <!--<h3 id="lorem-ipsum">lorem ipsum</h3>-->
                      </div>
                      <dl class="space-y-8 sm:space-y-0">
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Test Date
                          </dt>
                          <dd class="details-dd">
                            {{ form.testDate }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Distributor
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributor }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUser }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Guarantee
                          </dt>
                          <dd class="details-dd">
                            {{ form.guarantee }}
                          </dd>
                        </div>
                      </dl>
                      <div class="mt-5">
                        <h3 id="contact-information">Contact Information</h3>
                      </div>
                      <div class="mt-5">
                        <p id="distributor-details" class="font-semibold">Distributor Details</p>
                      </div>
                      <dl class="space-y-8 sm:space-y-0">
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Distributor
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributorDetails.distributor }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Distributor Name
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributorDetails.name }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Distributor Title
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributorDetails.title }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Distributor Email
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributorDetails.email }}
                          </dd>
                        </div>
                      </dl>
                      <div class="mt-5">
                        <p id="end-user-details" class="font-semibold">End User Details</p>
                      </div>
                      <dl class="space-y-8 sm:space-y-0">
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserDetails.endUser }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Name
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserDetails.name }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Title
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserDetails.title }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Email
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserDetails.email }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Street
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserDetails.address.street }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User City, State, Zip Code
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserDetails.address.cityStateZip }}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </template>
              <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <UiAppFormSubmit
                  class="mr-4"
                  className="tertiary"
                  :label="viewIs(1) ? 'Next' : 'Back'"
                  :disabled="submitting"
                  @click="isToggle = true"
                />
                <UiAppFormSubmit
                  v-if="viewIs(2)"
                  className="primary"
                  :label="submitting ? 'Submitting' : 'Submit'"
                  :disabled="submitting"
                />
              </div>

              
            </form>
          </div>
        </div>
      </div>
      <div class="relative p-4 text-center md:w-3/4 md:mx-auto sm:px-6 sm:py-8">
        <p class="text-gray-200">NSK America Corporation</p>
        <p class="text-gray-200">1800 Global Parkway</p>
        <p class="text-gray-200">Hoffman Estates, IL 60192</p>
        <p class="text-gray-200">PH: (800) 585-4675, FX: (800) 838-9328</p>
        <p class="text-gray-200">info@nskamericacorp.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  INSERT_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM,
  FETCH_FORM_NOTIFICATION
} from "~/graphql/dashboard/forms/guarantee-trial-offer-program";
import { UPDATE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM } from "~/graphql/dashboard/guarantee-trial-offer-program/guarantee-trial-offer-program";
import { FETCH_ONE_COUNTER, UPDATE_ONE_COUNTER } from "~/graphql/counter";
export default {
  data() {
    return {
      notification: {
        show: false,
        title: "Sent!",
        content: "Your form has been submitted and you should receive an email confirmation shortly",
        type: ""
      },
      form: {
        initialDate: "",
        testDate: "",
        distributor: "",
        endUser: "",
        guarantee: "",
        distributorDetails: {
          distributor: "",
          name: "",
          title: "",
          email: "",
          date: ""
        },
        endUserDetails: {
          endUser: "",
          name: "",
          title: "",
          phone: "",
          email: "",
          address: {
            street: "",
            cityStateZip: "",
          },
          date: ""
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "Pending Response",
        approved: "Pending"
      },

      // CD (JE on 20210504): view should be input or preview
      view: "input",
      submitting: false,
      isToggle: false,
      // CD (JE on 20210505): Panel for wizard form
      steps: [
        {
          step: 1,
          title: "Guarantee Trial Offer Program"
        },
        {
          step: 2,
          title: "Preview"
        }
      ],
      panel: 1
    };
  },
  methods: {
    // CD (EV on 20210302): onClick function for UiAppButton
    async formSubmit() {
      if (this.isToggle) {
        this.isToggle = false;
        return this.toggle();
      }

      // CD (JE on 20210621): get the latest technical question formId
      // GUARANTEE_TRIAL_OFFER_PROGRAM_ID_PREFIX
      const {
        data: { counter }
      } = await this.$apollo.query({
        query: FETCH_ONE_COUNTER,
        variables: { query: { field: "Guarantee Trial Offer Program" } },
        fetchPolicy: "no-cache",
        nextFetchPolicy: "no-cache"
      });

      this.form.formId = `${
        process.env.GUARANTEE_TRIAL_OFFER_PROGRAM_ID_PREFIX
      }-0000${counter.count + 1}`;

      const mutation = INSERT_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM;

      try {
        this.submitting = true;
        this.form.createdBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
        this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
        var variables = {
          data: this.form
        };
        const response = await this.$apollo.mutate({ mutation, variables });
        await this.$apollo.mutate({
          mutation: UPDATE_ONE_COUNTER,
          variables: {
            query: {
              field: "Guarantee Trial Offer Program"
            },
            set: { count_inc: 1 }
          }
        });
        if (response.data.insertOneGuarantee_trial_offer_program) {
          /* CD (EV on 20210429): Declare query variable*/
          const query = FETCH_FORM_NOTIFICATION;
          /* CD (EV on 20210429): Declare variable for query where form name is Technical Questions*/
          const variables = {
            /* CD (EV on 20210429): name of technical question to be fetch*/
            query: {
              name: "Guarantee Trial Offer Program"
            }
          };

          /* CD (EV on 20210429): Fetch form notification*/
          const form_notification = await this.$apollo.query({
            query,
            variables
          });

          /* CD (EV on 20210429): if fetching of form notification is done, send email to endUser and distributor*/
          if (form_notification.data.form_notification) {
            const filename = `guarantee-trial-offer-program-${
              this.form.distributorDetails.name
            }-${Date.now()}.pdf`;
            const uploaded = await this.$axios.$post(
              "/api/v1/dashboard/forms/send-email/guarantee-trial-offer-program",
              {
                filename,
                email: this.form.distributorDetails.email,
                form_notification: form_notification.data.form_notification,
                gtop: this.form
              }
            );

            await this.$apollo.mutate({
              mutation: UPDATE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM,
              variables: {
                query: {
                  _id: response.data.insertOneGuarantee_trial_offer_program._id
                },
                set: {
                  pdf: { location: uploaded.Location, filename: uploaded.Key }
                }
              }
            });

            this.notification = {
              show: true,
              title: "Sent!",
              content: "Your form has been submitted and you should receive an email confirmation shortly"
            };

            this.form = {
              ...this.form,
              initialDate: "",
              testDate: "",
              distributor: "",
              endUser: "",
              guarantee: "",
              distributorDetails: {
                distributor: "",
                name: "",
                title: "",
                email: "",
                date: ""
              },
              endUserDetails: {
                endUser: "",
                name: "",
                title: "",
                phone: "",
                email: "",
                address: {
                  street: "",
                  cityStateZip: "",
                },
                date: ""
              },
              createdAt: new Date(),
              updatedAt: new Date()
            };
            this.panel = 1;
            this.submitting = false;
          }
        }
      } catch (err) {
        console.error(err);
        this.notification = {
          show: true,
          title: "Failed",
          content: "An error occured while sending your request"
        };
      }
    },
    // CD (JE on 20210504): toggle view between input or preview
    toggle() {
      this.panel = this.panel === 1 ? 2 : 1;
    },
    viewIs(number) {
      return this.panel === number;
    }
  }
};
</script>
