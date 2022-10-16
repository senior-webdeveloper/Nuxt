// CD (KO on 20210330): component used in only "/pages/support/index.vue"

<template>
  <div>
    <div>
      <div class="relative text-center md:w-3/4 md:mx-auto">
        <h1>Warranty Registration Form</h1>
        <p>Please register your high speed spindle or hand tool for faster
          warranty and support processing.</p>
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
                            <UiAppFormField
                              v-model="form.title"
                              type="text"
                              label="Title *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.company"
                              type="text"
                              label="Company *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-5">
                            <UiAppFormField
                              v-model="form.email"
                              type="email"
                              label="Email *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.phone"
                              type="text"
                              label="Phone *"
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
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Mailing Address</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.mailingAddress.street"
                                type="text"
                                label="Street"
                              />
                            </div>
                            <div class="col-span-6 lg:col-span-5">
                              <UiAppFormField
                                v-model="form.mailingAddress.city"
                                type="text"
                                label="City"
                              />
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                              <UiAppFormField
                                v-model="form.mailingAddress.state"
                                type="text"
                                label="State"
                              />
                            </div>
                            <div class="col-span-6 lg:col-span-2">
                              <UiAppFormField
                                v-model="form.mailingAddress.zip"
                                type="text"
                                label="Zip"
                              />
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                              <UiAppFormField
                                v-model="form.mailingAddress.country"
                                type="text"
                                label="Country"
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
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Primary Industries Served</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <UiAppFormTextArea
                                v-model="form.primaryIndustriesServed"
                                label="Primary Industries Served"
                                required
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
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="mt-5 md:mt-0 md:col-span-3">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="px-4 sm:px-0">
                              <h3>Product Details</h3>
                          </div>
                          <UiAppTable :headers="productDetailsHeaders" :sort="false">
                            <tbody>
                              <tr
                                v-for="(productDetail,
                                index) in form.productDetails"
                                :key="index"
                                class="trClass"
                              >
                                <td class="tdClass">
                                  <UiAppFormDate
                                    v-model="productDetail.orderDate"
                                  />
                                </td>
                                <td class="tdClass">
                                  <UiAppFormField
                                    v-model="productDetail.modelNumber"
                                    type="text"
                                    :required="true"
                                  />
                                </td>
                                <td class="tdClass">
                                  <UiAppFormField
                                    v-model="productDetail.serialNumber"
                                    type="text"
                                    :required="true"
                                  />
                                </td>
                                <td class="tdClass">
                                  <UiAppFormField
                                    v-model="productDetail.distributorPurchaseForm"
                                    type="text"
                                  />
                                </td>
                                <td class="tdClass">
                                  <UiAppFormField
                                    v-model="productDetail.productDescription"
                                    type="text"
                                    required
                                  />
                                </td>
                                <td class="tdClass">
                                  <!-- Class should be the icon for these 2 buttons -->
                                  <div class="flex flex-col space-y-2">
                                    <UiAppButton
                                      v-if="form.productDetails.length > 1"
                                      @click="deleteProductDetails(index)"
                                      label="DELETE"
                                      className="text-only"
                                    />
                                    <UiAppButton
                                      v-if="index == form.productDetails.length - 1"
                                      label="ADD"
                                      className="text-only"
                                      @click="addProductDetails"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </UiAppTable>
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
              <template v-if="wizard.step === 2">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                  <div class="mt-5 md:mt-0 md:col-span-3">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-3 bg-gray-50 sm:px-6">
                        <div class="mt-5">
                          <h3 id="contact-information">Contact Information</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
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
                              Title
                            </dt>
                            <dd class="details-dd">
                              {{ form.title }}
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
                        </dl>

                        <div class="mt-5">
                          <h3 id="mailing-address">Mailing Address</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Street
                            </dt>
                            <dd class="details-dd">
                              {{ form.mailingAddress.street }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              State
                            </dt>
                            <dd class="details-dd">
                              {{ form.mailingAddress.state }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              City
                            </dt>
                            <dd class="details-dd">
                              {{ form.mailingAddress.city }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Zip
                            </dt>
                            <dd class="details-dd">
                              {{ form.mailingAddress.zip }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Country
                            </dt>
                            <dd class="details-dd">
                              {{ form.mailingAddress.country }}
                            </dd>
                          </div>
                        </dl>

                        <div class="mt-5">
                          <h3 id="mailing-address">Primary Industries Served</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Primary Industries Served
                            </dt>
                            <dd class="details-dd">
                              {{ form.primaryIndustriesServed }}
                            </dd>
                          </div>
                        </dl>

                        <div class="mt-5">
                          <h3 id="product-details">Product Details</h3>
                        </div>
                        <div class="space-y-8 sm:space-y-0">
                          <div class="overflow-x-auto">
                          <table class="table min-w-full mt-1 border border-b border-gray-200 divide-y divide-blueGray-200 sm:mt-4">
                            <thead>
                              <tr class="trClass">
                                <th scope="col" class="thClass">Order Date</th>
                                <th scope="col" class="thClass">Model Number *</th>
                                <th scope="col" class="thClass">Serial Number *</th>
                                <th scope="col" class="thClass">Distributor Purchase Form</th>
                                <th scope="col" class="thClass">Product Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(productDetail, i) in form.productDetails" :key="`product-details-${i}`" class="trClass">
                                <td class="tdClass">{{productDetail.orderDate}}</td>
                                <td class="tdClass">{{productDetail.modelNumber}}</td>
                                <td class="tdClass">{{productDetail.serialNumber}}</td>
                                <td class="tdClass">{{productDetail.distributorPurchaseForm}}</td>
                                <td class="tdClass">{{productDetail.productDescription}}</td>
                              </tr>
                            </tbody>
                          </table>
                          </div>
                        </div>

                      </div>
                      <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <UiAppFormSubmit
                          className="tertiary"
                          label="Back"
                          @click="toggle"
                        />
                        <UiAppFormSubmit className="primary" label="Submit" />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  INSERT_ONE_WARRANTY_REGISTRATION,
  FETCH_FORM_NOTIFICATION,
  UPDATE_ONE_WARRANTY_REGISTRATION
} from "~/graphql/support/warranty-registration/index";
import { FETCH_ONE_COUNTER, UPDATE_ONE_COUNTER } from "~/graphql/counter";
import notificationMixin from "~/mixins/notification";

export default {
  mixins: [notificationMixin],
  data() {
    return {
      // CD (JE on 20210514): wizard form state
      wizard: {
        toggle: false,
        step: 1,
        steps: [
          {
            step: 1,
            title: "Warranty Registration"
          },
          {
            step: 2,
            title: "Preview"
          }
        ]
      },
      // CD (EV on 20210427): email sending state
      email: {
        submitting: false,
        isSubmitted: false,
        error: false
      },
      form: {
        name: "",
        title: "",
        company: "",
        email: "",
        phone: "",
        primaryIndustriesServed: "",
        mailingAddress: {
          street: "",
          city: "",
          state: "",
          zip: "",
          country: ""
        },
        productDetails: [
          {
            modelNumber: "",
            serialNumber: "",
            orderDate: "",
            distributorPurchaseForm: "",
            productDescription: ""
          }
        ]
      },
      productDetailsHeaders: ["Order Date", "Model Number *", "Serial Number *", "Distributor Purchase From", "Product Description *", "Actions"],
      productDetailsHeadersPreview: ["Order Date", "Model Number *", "Serial Number *", "Distributor Purchase From", "Product Description *"]
    };
  },
  methods: {
    // CD (EV on 20210302): onClick function for UiAppButton
    async formSubmit() {

      // CD (AN on 20220110): validation.
      if(!this.form.productDetails.length){
        this.setNotification({
          show: true,
          title: "Error",
          content: "You need to add at least one product"
        });
        return;
      }
      if(this.form.productDetails.some(product => {
        return product.modelNumber.length > 15 || product.serialNumber.length > 20
      })){
        this.setNotification({
          show: true,
          title: "Error",
          content: "Model number is 15 chars max, serial number is 20 chars max"
        });
        return;
      }

      if (this.wizard.toggle) {
        this.wizard.step = this.wizard.step === 1 ? 2 : 1;
        this.wizard.toggle = false;
        return;
      }


      // CD (JE on 20210621): get the latest technical question formId
      // WARRANTY_REGISTRATION_ID_PREFIX
      const {
        data: { counter }
      } = await this.$apollo.query({
        query: FETCH_ONE_COUNTER,
        variables: { query: { field: "Warranty Registration" } },
        fetchPolicy: 'no-cache',
        nextFetchPolicy: 'no-cache'
      });

      this.form.formId = `${
        process.env.WARRANTY_REGISTRATION_ID_PREFIX
      }-0000${counter.count + 1}`;

      const mutation = INSERT_ONE_WARRANTY_REGISTRATION;

      this.form.createdAt = this.form.updatedAt = new Date();

      var variables = {
        data: this.form
      };

      const mutatate = await this.$apollo.mutate({ mutation, variables });
      await this.$apollo.mutate({
        mutation: UPDATE_ONE_COUNTER,
        variables: {
          query: {
            field: "Warranty Registration"
          },
          set: { count_inc: 1 }
        }
      });

      if (mutatate.data.insertOneWarranty_registration) {
        /* CD (EV on 20210429): Declare query variable*/
        const query = FETCH_FORM_NOTIFICATION;
        /* CD (EV on 20210429): Declare variable for query where form name is Technical Questions*/
        const variables = {
          /* CD (EV on 20210429): name of technical question to be fetch*/
          query: {
            name: "Warranty Registration"
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

            const filename = `warranty-registration-${
              this.form.name
            }-${Date.now()}.pdf`;
            const uploaded = await this.$axios.$post(
              "/api/v1/support/send-email/warranty-registration",
              {
                filename,
                email: this.form.email,
                form_notification: form_notification.data.form_notification,
                warranty_registration: this.form
              }
            );
            // CD (JE on 20210524): set pdf location, filename after sending notification
            await this.$apollo.mutate({
              mutation: UPDATE_ONE_WARRANTY_REGISTRATION,
              variables: {
                query: {
                  _id: mutatate.data.insertOneWarranty_registration._id
                },
                set: {
                  pdf: { filename: uploaded.Key, location: uploaded.Location }
                }
              }
            });

            // CD (EV on 20210427): if success sending email update email state
            this.email.submitting = false;
            this.email.isSubmitted = true;

            this.setNotification({
              show: true,
              title: "Sent!",
              content: "Your form has been submitted and you should receive an email confirmation shortly",
            });

            // CD (JE on 20210514): reset to wizard form initial state
            this.wizard.step = 1;

            // CD (EV on 20210427): clear the form
            this.form = {
              name: "",
              title: "",
              company: "",
              email: "",
              phone: "",
              primaryIndustriesServed: "",
              mailingAddress: {
                street: "",
                city: "",
                state: "",
                zip: "",
                country: ""
              },
              productDetails: [
                {
                  modelNumber: "",
                  serialNumber: "",
                  orderDate: "",
                  distributorPurchaseForm: "",
                  productDescription: ""
                }
              ]
            };
          } catch (e) {
            // CD (EV on 20210427): if error sending email update email state
            this.email.submitting = false;
            this.email.error = true;
            console.error(e);
          }
        }
      }
    },
    // CD (JE on 20210514): onClick function for back/next
    toggle() {
      this.wizard.toggle = true;
    },
    deleteProductDetails(index){
      this.form.productDetails.splice(index, 1)
    },
    addProductDetails(){
      this.form.productDetails.push({
        modelNumber: "",
        serialNumber: "",
        orderDate: "",
        distributorPurchaseForm: "",
        productDescription: ""
      })
    }
  }
};
</script>

<style scoped>
.tdCustomClass{
  width: 100px;
  padding: 10px;
  padding-left: 25px;
}
</style>
