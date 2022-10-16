<template>
  <!-- CD (CT on 20210329): no field can be edited here. just put all the details in the list. then add cancel button. -->
  <div>
    <UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="deleteWarrantyRegistration"
      title="Are you sure you want to delete this item?"
      content="Items deleted cannot be recovered."
    />


    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Warranty Registration</h1>
                <p>#{{warranty_registration.formId}}</p>
              </div>
              <!--<div class="flex mt-4 space-x-3 md:mt-0">
                <UiAppBadge
                  :className="statusColor(technical_question.status)"
                  :label="technical_question.status"
                />
              </div>-->
            </div>

            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="py-5">

                  <div class="mt-5">
                    <h3 id="contact-information">Contact Information</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Name
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Title
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.title }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.company }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Email
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.email }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Phone
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.phone }}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-5">
                    <h3 id="mailing-address">Mailing Address</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Street
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.mailingAddress.street }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        State
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.mailingAddress.state }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        City
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.mailingAddress.city }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Zip
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.mailingAddress.zip }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Country
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.mailingAddress.country }}
                      </dd>
                    </div>
                  </dl>
                  
                  <div class="mt-5">
                    <h3 id="mailing-address">Primary Industries Served</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Primary Industries Served
                      </dt>
                      <dd class="details-dd">
                        {{ warranty_registration.primaryIndustriesServed }}
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
                          <th scope="col" class="thClass">Model Number</th>
                          <th scope="col" class="thClass">Serial Number</th>
                          <th scope="col" class="thClass">Distributor Purchase From</th>
                          <th scope="col" class="thClass">Product Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(productDetail, index) in warranty_registration.productDetails" :key="index" class="trClass">
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
              </div>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Status and Submission Details</h2>
            <div>
              <!-- CD (CT on 20210412): This form has no status -->
              <!--<div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <div class="space-y-6">
                  <h3 class="text-sm font-medium text-gray-500">Status</h3>-->
                  <!-- CD (EV on 20210329): form for status dropdown and submit button using AppForm-->
                  <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                  <!--<form @submit.prevent="formSubmit">
                    <div>
                      <UiAppFormSelect
                        :options="options"
                        v-model="form.status"
                        :required="true"
                      />
                    </div>
                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save" />
                    </div>
                  </form>
                </div>
              </div>-->
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <!-- CT (CD on 20220112): Show the name of the one who submitted if not login. If logged in, show username of the logged in person -->
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Submitted by [name of sales rep]</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{warranty_registration.createdAt|formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{warranty_registration.updatedAt|formatDate}}</time></span>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <!-- CD (CT on 20210412): Delete button-->
              <UiAppButton className="secondary-full" @click="modal = true" label="DELETE" />
            </div>
            <!--<div class="mt-6">-->
              <!-- CD (CT on 20210413): Cancel button-->
              <!--<UiAppButton className="tertiary" @click="$store.dispatch('dashboard/warranty-registration/hideSlider')" label="Cancel" />
            </div>-->
          </aside>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { DELETE_ONE_WARRANTY_REGISTRATION } from "../../../graphql/dashboard/warranty-registration/warranty-registration";
export default {
  computed: mapGetters({
    /* CD (EV on 20210329): get the selected technical question (to be updated or deleted)*/
    warranty_registration:
      "dashboard/warranty-registration/warrantyRegistration"
  }),
  data() {
    return {
      modal: false,
      productDetailsHeadersPreview: ["Order Date", "Model Number *", "Serial Number *", "Distributor Purchase From", "Product Description *"]
    };
  },
  methods: {
    async deleteWarrantyRegistration() {
      /* CD (EV on 20210329): Get _id of the technical question*/
      const _id = this.warranty_registration._id;
      const variables = {
        /* CD (EV on 20210329): _id of technical question to be deleted*/
        query: {
          _id: _id
        }
      };
      // /* CD (EV on 20210329): Declare mutation*/
      const mutation = DELETE_ONE_WARRANTY_REGISTRATION;
      /* CD (EV on 20210329): Delete the technical question*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210329): If delete is success*/
      if (mutatate.data.deleteOneWarranty_registration) {
        this.modal = false;
        /* CD (EV on 20210329): Remove the selected warranty registration from warranty registrations (will also reflect on table)*/
        this.$store.dispatch(
          "dashboard/warranty-registration/deleteWarrantyRegistration"
        );
        /* CD (EV on 20210329): Hide slider*/
        this.$store.dispatch("dashboard/warranty-registration/hideSlider");
        /* CD (EV on 20210329): Show notification of success delete*/
        this.$store.dispatch(
          "dashboard/warranty-registration/showNotificationUpdate",
          {
            title: "Success",
            type: "success",
            content: "Deleted",
            show: true
          }
        );
      }
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString()
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
