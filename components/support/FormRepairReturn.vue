// CD (CT on 202210331): component used in only "/pages/support/index.vue"

<template>
  <div>
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="notification.show = false"
    />

    <div>
      <div class="relative text-center md:w-3/4 md:mx-auto">
        <h1>Repair Return Form</h1>
      </div>
      <div class="relative py-4 mt-4 bg-blueGray-100 lg:w-3/4 md:mx-auto sm:p-6">
        <div class="container mx-auto sm:px-4">
          <!-- <UiAppForm :formInput="formInput"  /> -->
          <div>
            <UiAppPanel v-model="wizard.step" :steps="wizard.steps" />
            <form @submit.prevent="formSubmit" class="mt-10">
              <template v-if="wizard.step === 1">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                  <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                      <h3>Contact Information</h3>
                    </div>
                  </div>
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.name"
                              type="text"
                              label="Name *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.company"
                              label="Company *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.address.street"
                              label="Street *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-5">
                            <UiAppFormField
                              v-model="form.address.city"
                              type="text"
                              label="City *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-5">
                            <UiAppFormField
                              v-model="form.address.state"
                              type="text"
                              label="State *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <UiAppFormField
                              v-model="form.address.zip"
                              type="text"
                              label="Zip *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.phone"
                              type="text"
                              label="Direct Phone Number *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-5">
                            <UiAppFormField
                              v-model="form.email"
                              type="email"
                              label="E-mail *"
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
                <!--  <div class="px-6 py-4 mb-5 text-center">
                    <p>Please ship products for estimate to:</p>
                    <p>NSK AMERICA CORPORATION</p>
                    <p>ATTN: INDUSTRIAL REPAIRS</p>
                    <p>1800 GLOBAL PARKWAY</p>
                    <p>HOFFMAN ESTATES, IL 60192</p>
                  </div>
                  <div class="px-6 py-4 mb-5">
                    <p>
                      NSK America Corporation will evaluate your claim and
                      provide a quotation through an Authorized Distributor of
                      your choice. if you would like.
                    </p>
                  </div>-->
                </div>

                <div class="mt-10 sm:mt-0">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Please ship products for estimate to:</h3>
                        <p></p>
                        <div>
                          <p>NSK AMERICA CORPORATION</p>
                          <p>ATTN: INDUSTRIAL REPAIRS</p>
                          <p>1800 GLOBAL PARKWAY</p>
                          <p>HOFFMAN ESTATES, IL 60192</p>
                        </div>
                        <div class="mt-5">
                          <p>
                            NSK America Corporation will evaluate your claim and
                            provide a free estimation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div>                 
                              <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6">
                                <UiAppFormField
                                  v-model="claimDetail.productModel"
                                  type="text"
                                  label="Product Model *"
                                />
                                </div>
                                <div class="col-span-6">
                                <UiAppFormField
                                  v-model="claimDetail.serialNumber"
                                  type="text"
                                  label="Serial Number *"
                                />
                                </div>
                                <div class="col-span-6">
                                <UiAppFormSelect
                                  v-model="claimDetail.estimateWarranty"
                                  :options="[{ label: 'Warranty', value: 'warranty' }, { label: 'Estimate', value: 'estimate' }]"
                                  label="Review Type *"
                                />
                                </div>
                                <div class="col-span-6">
                                <UiAppFormField
                                  v-model="claimDetail.issueDescription"
                                  type="text"
                                  label="Description of Issue *"
                                />
                                </div>
                                <div class="col-span-6">
                                  <button @click.prevent="addClaimDetails" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add</button>
                                </div>
                              </div>
                            <UiAppTable :headers="headers" :sort="false">
                              <tbody>
                                <tr v-for="(productDetail, index) in form.claimDetails" :key="index" class="trClass">
                                  <td class="tdClass">
                                    {{ productDetail.productModel }}
                                  </td>
                                  <td class="tdClass">
                                    {{ productDetail.serialNumber }}
                                  </td>
                                  <td class="tdClass">
                                    {{ productDetail.estimateWarranty }}
                                  </td>
                                  <td class="tdClass">
                                    {{ productDetail.issueDescription }}
                                  </td>
                                  <td class="tdClass">
                                    <UiAppButton @click="deleteClaimDetails(index)" label="DELETE" className="text-only" />
                                  </td>
                                </tr>
                              </tbody>
                            </UiAppTable>
                            <p class="mt-5 note">
                              *Warranty claim must include valid copy of purchase or repair invoice.
                            </p>

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
                  <div class="px-6 py-4 mb-5 bg-blue-600">
                    <p class="text-white">
                      If you would like your repair estimate to go through an NSK Authorized Distributor, please fill out the fields below:
                    </p>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Contact Information</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.authorizedDistributor.name"
                                type="text"
                                label="NSK Authorized Distributor"
                                :required="false"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.authorizedDistributor.branch"
                                type="text"
                                label="Distributor Branch Location"
                                :required="false"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.authorizedDistributor.cityStateZip"
                                type="text"
                                label="Distributor City, State, Zip Code"
                                :required="false"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.authorizedDistributor.distributorContactDetails.name"
                                type="text"
                                label="Distributor Contact Name"
                                :required="false"
                              />
                            </div>
                            <div class="col-span-6 lg:col-span-4">
                              <UiAppFormField
                                v-model="form.authorizedDistributor.distributorContactDetails.email"
                                type="email"
                                label="Distributor Contact E-mail Address"
                                :required="false"
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                v-model="form.authorizedDistributor.distributorContactDetails.phone"
                                type="text"
                                label="Distributor Contact Direct Phone Number"
                                :required="false"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                          <UiAppFormSubmit
                            className="tertiary"
                            label="Next"
                            @click="toggle"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="mt-10 sm:mt-0">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="mt-5 md:mt-0 md:col-span-3">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-3 bg-gray-50 sm:px-6">
                          <dl class="space-y-8 sm:space-y-0">
                            <div class="mt-5">
                              <h3>Contact Information</h3>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Name
                              </dt>
                              <dd class="details-dd">
                                {{ form.name }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Company
                              </dt>
                              <dd class="details-dd">
                                {{ form.company }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Email
                              </dt>
                              <dd class="details-dd">
                                {{ form.email }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Phone
                              </dt>
                              <dd class="details-dd">
                                {{ form.phone }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Address
                              </dt>
                              <dd class="details-dd">
                                {{ form.address | address }}
                              </dd>
                            </div>
                            <div class="mt-5">
                              <h3>Claim Details</h3>
                            </div>
                            <div class="sm:py-5">
                              <p class="details-dt">Principal Contact</p>
                              <div class="overflow-x-auto">
                                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                  <div>
                                    <table class="table mt-1 border border-b border-gray-200 divide-y divide-blueGray-200 sm:mt-4">
                                      <thead>
                                        <tr class="trClass">
                                          <th scope="col" class="thClass">Product Model</th>
                                          <th scope="col" class="thClass">Serial Number</th>
                                          <th scope="col" class="thClass">Estimate Warranty</th>
                                          <th scope="col" class="thClass">Issue Description</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <template v-for="(data, i) in form.claimDetails">
                                          <tr :key="`beyond-repair-preview-${i}`">
                                            <td class="tdClass">{{ data.productModel }}</td>
                                            <td class="tdClass">{{ data.serialNumber }}</td>
                                            <td class="tdClass">{{ data.estimateWarranty }}</td>
                                            <td class="tdClass">{{ data.issueDescription }}</td>
                                          </tr>
                                        </template>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="mt-5">
                              <h3>Distributor Contact Information</h3>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                NSK Authorized Distributor
                              </dt>
                              <dd class="details-dd">
                                {{ form.authorizedDistributor.name }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Distributor Branch Location
                              </dt>
                              <dd class="details-dd">
                                {{ form.authorizedDistributor.branch }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Distributor City, State, Zip Code
                              </dt>
                              <dd class="details-dd">
                                {{ form.authorizedDistributor.cityStateZip }}
                              </dd>
                            </div>
                            <!-- CD (CT on 20211231) - START: As per client These fields only need to be filled out if the "NSK Authorized Distributor" field is filled, otherwise, these fields can be blank. -->
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Distributor Company Information
                              </dt>
                              <dd class="details-dd">
                                {{ form.authorizedDistributor.distributorContactDetails.name }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Distributor Contact Email
                              </dt>
                              <dd class="details-dd">
                                {{ form.authorizedDistributor.distributorContactDetails.email }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Distributor Contact Phone
                              </dt>
                              <dd class="details-dd">
                                {{ form.authorizedDistributor.distributorContactDetails.phone }}
                              </dd>
                            </div>
                            <!-- END -->
                          </dl>
                        </div>
                        <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                          <UiAppFormSubmit
                            className="tertiary"
                            label="Back"
                            @click="toggle"
                          />
                          <UiAppFormSubmit
                            className="primary"
                            label="Submit"
                            class="ml-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </form>
          </div>
        </div>
      </div>
      <div class="relative p-4 text-center md:w-3/4 md:mx-auto sm:px-6 sm:py-8" aria-hidden="true">
        <div class="py-5">
          <p class="mt-2 font-bold">A COPY OF THIS FORM WILL BE SENT TO YOUR EMAIL. PLEASE PRINT THE PDF AND SEND IT BACK WITH YOUR PRODUCT(S).</p>
          <p class="mt-2">Please retain a copy for your records.</p>
          <p class="mt-5">PLEASE NOTE: In the event that we are unable to garner a repair response in 30 days, we will return your items to you unrepaired.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- CD (CT on 20210327): Required fields not yet set as per requirements. Refer to card for correct values. -->
<script>
import {
  INSERT_ONE_REPAIR_RETURN,
  FETCH_FORM_NOTIFICATION
} from "~/graphql/support/repair-return/repair-return";
import { UPDATE_ONE_REPAIR_RETURN } from "~/graphql/dashboard/repair-return/repair-return";
import { FETCH_ONE_COUNTER, UPDATE_ONE_COUNTER } from "~/graphql/counter";
export default {
  data() {
    return {
      // CD (JE on 20210512): wizard form state
      wizard: {
        toggle: false,
        step: 1,
        steps: [
          {
            step: 1,
            title: "Repair Return"
          },
          {
            step: 2,
            title: "Preview"
          }
        ]
      },
      headers: [
        "Product Model",
        "Serial Number",
        "Estimate or Warranty",
        "Description of issue",
        "Action"
      ],
      notification: {
        show: false,
        title: "Lorem ipsum",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.",
        type: ""
      },
      form: {
        name: "",
        company: "",
        email: "",
        phone: "",
        address: {
          street: "",
          city: "",
          state: "",
          zip: ""
        },
        claimDetails: [],
        authorizedDistributor: {
          name: "",
          branch: "",
          cityStateZip: "",
          distributorContactDetails: {
            name: "",
            email: "",
            phone: ""
          }
        },
        repairOrReturn: "Pending",
        status: "Pending",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      claimDetail: {
        productModel: "",
        serialNumber: "",
        estimateWarranty: "",
        issueDescription: ""
      },
      beyondRepair: false
    };
  },
  methods: {
    // CD (EV on 20210302): onClick function for UiAppButton
    async formSubmit() {
      if (this.wizard.toggle) {
        this.wizard.step = this.wizard.step === 1 ? 2 : 1;
        this.wizard.toggle = false;
        return;
      }

      // CD (JE on 20210621): get the latest technical question formId
      // REPAIRS_RETURNS_ID_PREFIX
      const {
        data: { counter }
      } = await this.$apollo.query({
        query: FETCH_ONE_COUNTER,
        variables: { query: { field: "Repair Return" } },
        fetchPolicy: 'no-cache',
        nextFetchPolicy: 'no-cache'
      });

      this.form.formId = `${
        process.env.REPAIRS_RETURNS_ID_PREFIX
      }-0000${counter.count + 1}`;

      // CD (JE on 20210511): save a local reference for email

      const mutation = INSERT_ONE_REPAIR_RETURN;

      var variables = {
        data: this.form
      };

      let response = await this.$apollo.mutate({ mutation, variables });
      await this.$apollo.mutate({
        mutation: UPDATE_ONE_COUNTER,
        variables: {
          query: {
            field: "Repair Return"
          },
          set: { count_inc: 1 }
        }
      });
      const repair_return_id = response.data.insertOneRepair_return._id;
      if (response.data.insertOneRepair_return) {
        // CD (JE on 20210513): send email notification to nsk and user
        const query = FETCH_FORM_NOTIFICATION;
        const variables = {
          query: {
            name: "Repair Return"
          }
        };
        response = await this.$apollo.query({ variables, query });
        if (response.data.form_notification) {
          const { email, name } = this.form;
          const filename = `repair-return-${name}-${Date.now()}.pdf`;
          const uploaded = await this.$axios.$post(
            "/api/v1/support/send-email/repair-return",
            {
              filename,
              email,
              form_notification: response.data.form_notification,
              repair_return: this.form
            }
          );

          await this.$apollo.mutate({
            mutation: UPDATE_ONE_REPAIR_RETURN,
            variables: {
              query: { _id: repair_return_id },
              set: {
                pdf: { filename: uploaded.Key, location: uploaded.Location }
              }
            }
          });

          // CD (JE on 20210513): show notification
          this.notification = {
            show: true,
            title: "Sent!",
            content: "Your form has been submitted and you should receive an email confirmation shortly"
          };

          // CD (JE on 20210513): reset form
          this.form = {
            ...this.form,
            name: "",
            company: "",
            email: "",
            phone: "",
            address: {
              street: "",
              city: "",
              state: "",
              zip: ""
            },
            claimDetails: [],
            authorizedDistributor: {
              name: "",
              branch: "",
              cityStateZip: "",
              distributorContactDetails: {
                name: "",
                email: "",
                phone: ""
              }
            },
            createdAt: new Date(),
            updatedAt: new Date()
          };

          // reset beyond repair
          this.beyondRepair = false;

          // CD (JE on 20210513): back to input step
          this.wizard.step = 1;
        }
      }
    },
    // CD (JE on 20210521): onClick for back/next
    toggle() {
      this.wizard.toggle = true;
    },
    // CD (JE on 20210521): onClick for Claim details Add
    addClaimDetails() {
      //validate
      if(!this.claimDetail.productModel || !this.claimDetail.serialNumber || !this.claimDetail.estimateWarranty || !this.claimDetail.issueDescription){
        this.notification = {
          show: true,
          title: "Validation Error",
          content: "Please fill all fields of the claim detail"
        };
        return
      }

      this.form.claimDetails.push(this.claimDetail);
      this.claimDetail = {
        productModel: "",
        serialNumber: "",
        estimateWarranty: "",
        issueDescription: ""
      };
    },
    // CD (JE on 20210521): onClick for Claim details DELETE
    deleteClaimDetails(index) {
      this.$delete(this.form.claimDetails, index);
    }
  },
  filters: {
    // CD (JE on 20210521): format address
    address(address) {
      return [address.street, address.city, address.state, address.zip].join(
        ", "
      );
    }
  }
};
</script>
