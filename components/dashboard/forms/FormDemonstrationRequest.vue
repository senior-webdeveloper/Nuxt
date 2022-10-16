// CD (CT on 20210330): component used in only
"/pages/dashboard/forms/demonstration-request.vue"

<template>
  <div>
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="notification.show = false"
    />

    <div class="mb-10">
      <!-- Header -->
      <div class="relative p-4 md:w-3/4 md:mx-auto sm:px-6 sm:py-8">
        <h1 class="text-center text-gray-200">Demonstration Request Form</h1>
        <h2 class="mt-8 text-center text-gray-200">Scope</h2>
        <p class="mt-4 text-gray-200">
          The NSK America Corporation (NSK) demonstration (Demo) program is the
          use of NSK-owned products on a singular Customers’ (End User) machine,
          under supervision of an NSK Sales Representative (Sales Rep,
          responsible party), along with an authorized NSK Distributor Sales
          Representative (Distributor), to demonstrate the effectiveness of NSK
          products.
        </p>
        <h2 class="mt-8 text-center text-gray-200">Guidelines</h2>
        <p class="mt-4 text-gray-200">
          The demo request will require the full completion of this form.
          Partial submissions will not be accepted. Please understand that the
          equipment is shipped on a first come, first serve basis. Please allow
          up to 48 hours to ship the equipment.
        </p>
        <p class="mt-4 text-gray-200">
          NSK will ship the demonstration product to an agreed location, listed
          below, via UPS ground. The Sales Rep will be responsible to return the
          product with all components along with the original paperwork shipped
          with the demo the following day as well as with a completed results
          section below.
        </p>
        <p class="mt-4 text-gray-200">
          NSK does not guarantee the performance of the perishable tools used
          during the demo, nor will NSK reimburse the Distributor or End User
          for any perishable tooling used during the demo.
        </p>
        <p class="mt-4 text-gray-200">
          NSK is not responsible for any or all damages to NSK products or End
          Users equipment due to improper installation or improper use. Any demo
          product returned damaged, tampered with or used outside manufacturers
          recommendation may be subject to a repair charge invoiced to the Sales
          Rep. Additionally, missing parts are subject to charge for each item
          missing, invoiced to the responsible party, the Sales Rep.
        </p>
        <p class="mt-4 text-gray-200">
          The demo is a same day demo. Leaving NSK products at an End User
          overnight is prohibited, unless approved by an NSK Industrial Manager.
          Demo equipment not received within 5 business days of the
          demonstration date is subject to invoice in full, for all products,
          without warranty, to Sales Rep.
        </p>
      </div>
      <!-- Form -->
      <div class="relative py-4 bg-blueGray-100 lg:w-3/4 md:mx-auto sm:p-6">
        <div class="container mx-auto sm:px-4">
          <!-- <UiAppForm :formInput="formInput"  /> -->

          <div class="mt-5 md:mt-10 sm:mt-0">
            <UiAppPanel v-model="wizard.step" :steps="wizard.steps" />
            <form @submit.prevent="formSubmit" class="mt-10">
              <div v-show="wizard.step === 1">
                <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                  <div class="lg:col-span-1">
                    <div class="px-4 sm:px-0">
                      <h3>Opportunity Details</h3>
                    </div>
                  </div>
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 lg:col-span-4">
                            <UiAppFormSelect
                              v-model="form.handToolsOrSpindle"
                              label="Hand Tools or Spindle"
                              :options="[{label: 'Hand Tools', value: 'hand-tools'}, {label: 'Spindle', value: 'spindle'}]"
                              required
                            />
                          </div>
                          <div class="col-span-6 lg:col-span-4">

                            <label class="block text-sm font-medium text-blueGray-700">
                              Opportunity Value *
                              <vue-numeric 
                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                currency="$" 
                                separator=","
                                required 
                                v-model="form.value"
                                placeholder="$">
                              </vue-numeric>
                            </label>

                          </div>
                          <div class="col-span-6 lg:col-span-4">
                            <UiAppFormField
                              v-model="form.timeToClose"
                              type="text"
                              label="Time to Close (days)*"
                              :required="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true" v-if="form.handToolsOrSpindle === 'spindle'">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0" v-if="form.handToolsOrSpindle === 'spindle'">
                  <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Tooling Details</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.cuttingTool"
                                type="text"
                                label="Cutting Tool Diameter and Type (ex. 0.008 Carbide Drill) *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.material"
                                type="text"
                                label="Material *"
                                :required="true"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true" v-if="form.handToolsOrSpindle === 'spindle'">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0" v-if="form.handToolsOrSpindle === 'spindle'">
                  <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Current State</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 lg:col-span-3">
                              <label class="block text-sm font-medium text-blueGray-700">
                                Length of Cut (in) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="" 
                                  separator=","
                                  required 
                                 :precision="3"
                                  v-model="form.currentState.cutLength">
                                </vue-numeric>
                              </label>
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                              <label class="block text-sm font-medium text-blueGray-700">
                                Depth of Cut (in) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="" 
                                  separator=","
                                  required 
                                 :precision="3"
                                  v-model="form.currentState.cutDepth">
                                </vue-numeric>
                              </label>
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                              <label class="block text-sm font-medium text-blueGray-700">
                                Spindle (RPM) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="" 
                                  separator=","
                                  required 
                                 :precision="2"
                                  v-model="form.currentState.spindleSpeed">
                                </vue-numeric>
                              </label>
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                              <label class="block text-sm font-medium text-blueGray-700">
                                Feed (IPR) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="" 
                                  separator=","
                                  required 
                                 :precision="5"
                                  v-model="form.currentState.feed">
                                </vue-numeric>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true" v-if="form.handToolsOrSpindle === 'spindle'">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0" v-if="form.handToolsOrSpindle === 'spindle'">
                  <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Future State</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 lg:col-span-3">
                              <label class="block text-sm font-medium text-blueGray-700">
                                Length of Cut (in) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="" 
                                  separator=","
                                  required 
                                 :precision="3"
                                  v-model="form.futureState.cutLength">
                                </vue-numeric>
                              </label>
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                              <label class="block text-sm font-medium text-blueGray-700">
                                Depth of Cut (in) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="" 
                                  separator=","
                                  required 
                                 :precision="3"
                                  v-model="form.futureState.cutDepth">
                                </vue-numeric>
                              </label>
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                              <label class="block text-sm font-medium text-blueGray-700">
                                Spindle (RPM) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="" 
                                  separator=","
                                  required 
                                 :precision="2"
                                  v-model="form.futureState.spindleSpeed">
                                </vue-numeric>
                              </label>
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                              <label class="block text-sm font-medium text-blueGray-700">
                                Feed (IPR) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="" 
                                  separator=","
                                  required 
                                 :precision="5"
                                  v-model="form.futureState.feed">
                                </vue-numeric>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true" v-if="form.handToolsOrSpindle === 'spindle'">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0" v-if="form.handToolsOrSpindle === 'spindle'">
                  <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Attach an existing CSA file?</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 lg:col-span-3">
                              <UiAppFormSelect
                                v-model="attachCse"
                                label="Attach an existing CSA file?"
                                :options="[{label: 'Yes', value: true}, {label: 'No', value: false}]"
                                required
                              />
                            </div>
                            <div class="col-span-6 lg:col-span-3" v-if="attachCse === 'true'">
                              <p class="block mb-2 text-sm font-medium text-blueGray-700">What is the name of the CSA file that you'd like to attach?</p>
                              <vue-tags-input
                                placeholder="Select Cost Savings Analysis"
                                class="z-10"
                                v-model="cse"
                                :tag="cse"
                                :tags="form.cse"
                                :autocomplete-items="filteredItems"
                                :add-only-from-autocomplete="true"
                                :max-tags="1"
                                @tags-changed="newTags => (form.cse = newTags)"
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
                        <h3>Additional Details</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">

                            <div class="col-span-6">
                              <UiAppFormTextArea
                                v-model="form.successfulTest"
                                label="What will qualify as a successful test? *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                              <UiAppFormDate
                                v-model="form.demonstrationDate"
                                label="Demonstration Date *"
                                :required="true"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- table here with fields Quality, Catalog# or Model#, Description -->

                      <!-- CD (EV on 20210401): :sort="false" to hide sort button, thClass is the class of the headers, remove if we want the default -->
                      <!-- CD (EV on 20210401): EXAMPLE OF WITH TH CLASS DEFAULT HEADER <UiAppTable :headers="headers" :sort="false" thClass="" > -->
                      <UiAppTable :headers="headers" :sort="false">
                        <tbody>
                          <!-- CD (EV on 20210302): Render table row -->
                          <tr
                            v-for="(productDetail,
                            index) in form.productDetails"
                            :key="index"
                            class="trClass"
                          >
                            <td class="tdClass">
                              <UiAppFormField
                                v-model="productDetail.quantity"
                                type="text"
                                :required="true"
                              />
                            </td>
                            <td class="tdClass">
                              <UiAppFormField
                                v-model="productDetail.catalogOrModel"
                                type="text"
                                :required="true"
                              />
                            </td>
                            <td class="tdClass">
                              <!-- Can we make this a textarea instead of text? -->
                              <UiAppFormField
                                v-model="productDetail.description"
                                type="text"
                                :required="true"
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
                                  label="Add Another Item"
                                  className="text-only"
                                  @click="addProductDetails"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </UiAppTable>
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
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.nskSalesRep"
                                type="text"
                                label="IMR Company *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.name"
                                type="text"
                                label="IMR Name *"
                                disabled
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6 lg:col-span-4">
                              <UiAppFormField
                                v-model="form.email"
                                type="email"
                                label="IMR Email *"
                                disabled
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
                        <h3></h3>
                        <p></p>
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
                                v-model="form.distributorDetails.street"
                                type="text"
                                label="Distributor Street *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.distributorDetails.cityStateZip"
                                type="text"
                                label="Distributor City, State, Zip Code *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.distributorDetails.name"
                                type="text"
                                label="Distributor Sales Rep Name *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.distributorDetails.title"
                                type="text"
                                label="Distributor Sales Rep Title *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                v-model="form.distributorDetails.email"
                                type="email"
                                label="Distributor Sales Rep Email *"
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
                        <h3></h3>
                        <p></p>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.endUserCompanyDetails.endUserCompany"
                                type="text"
                                label="End User Company Name *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.endUserCompanyDetails.cityStateZip"
                                type="text"
                                label="End User Address *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.endUserCompanyDetails.name"
                                type="text"
                                label="End User Contact Name *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.endUserCompanyDetails.title"
                                type="text"
                                label="End User Contact Title *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                v-model="form.endUserCompanyDetails.phone"
                                type="text"
                                label="End User Direct Phone Number *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                v-model="form.endUserCompanyDetails.email"
                                type="email"
                                label="End User Email Address *"
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
                        <h3></h3>
                        <p></p>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">

                              <label class="block mb-2 text-sm font-medium text-blueGray-700">
                                Shipping Options (Choose One) *
                              </label>
                              <div class="col-span-6">
                                <UiAppFormRadio
                                  name="shippingOptions"
                                  label="Ship to sales representative"
                                  :value="form.shippingOption"
                                  @change="changeValue"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormRadio
                                  name="shippingOptions"
                                  label="Ship to distributor"
                                  :value="form.shippingOption"
                                  @change="changeValue"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                          <UiAppFormSubmit
                            className="tertiary"
                            label="Next"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="wizard.step === 3">
                <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                  <div class="md:col-span-3">
                    <div class="px-4 py-3 bg-gray-50 sm:px-6">
                      <div class="mt-5">
                        <h3 id="opportunity-details">Opportunity Details</h3>
                      </div>
                      <dl class="space-y-8 sm:space-y-0">
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Hand Tools or Spindle
                          </dt>
                          <dd class="details-dd">
                            {{ form.handToolsOrSpindle === 'spindle' ? 'Spindle' : 'Hand Tools' }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Opportunity Value
                          </dt>
                          <dd class="details-dd">
                            {{ form.value }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Time to Close (days)
                          </dt>
                          <dd class="details-dd">
                            {{ form.timeToClose }}
                          </dd>
                        </div>
                      </dl>

                      <div v-if="form.handToolsOrSpindle === 'spindle'">
                        <div class="mt-5">
                          <h3 id="tooling-details">Tooling Details</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cutting Tool Diameter and Type (ex. 0.008 Carbide Drill)
                            </dt>
                            <dd class="details-dd">
                              {{ form.cuttingTool }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Material
                            </dt>
                            <dd class="details-dd">
                              {{ form.material }}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div v-if="form.handToolsOrSpindle === 'spindle'">
                        <div class="mt-5">
                          <h3 id="current-state">Current State</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Length of Cut (IN)
                            </dt>
                            <dd class="details-dd">
                              {{ form.currentState.cutLength | formatNumberThreeDecimals }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Depth of Cut (IN)
                            </dt>
                            <dd class="details-dd">
                              {{ form.currentState.cutDepth | formatNumberThreeDecimals }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Spindle Speed (RPM)
                            </dt>
                            <dd class="details-dd">
                              {{ form.currentState.spindleSpeed | formatNumber }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Feed (IPR)
                            </dt>
                            <dd class="details-dd">
                              {{ form.currentState.feed | formatNumberFiveDecimals }}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div v-if="form.handToolsOrSpindle === 'spindle'">
                        <div class="mt-5">
                          <h3 id="future-state">Future State</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Length of Cut (IN)
                            </dt>
                            <dd class="details-dd">
                              {{ form.futureState.cutLength | formatNumberThreeDecimals }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Depth of Cut (IN)
                            </dt>
                            <dd class="details-dd">
                              {{ form.futureState.cutDepth | formatNumberThreeDecimals }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Spindle Speed (RPM)
                            </dt>
                            <dd class="details-dd">
                              {{ form.futureState.spindleSpeed | formatNumber }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Feed (IPR)
                            </dt>
                            <dd class="details-dd">
                              {{ form.futureState.feed | formatNumberFiveDecimals }}
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div class="mt-5">
                        <h3 id="additional-details">Additional Details</h3>
                      </div>
                      <dl class="space-y-8 sm:space-y-0">
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            What will qualify as a successful test?
                          </dt>
                          <dd class="details-dd">
                            {{ form.successfulTest }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Demonstration Date
                          </dt>
                          <dd class="details-dd">
                            {{ form.demonstrationDate }}
                          </dd>
                        </div>
                      </dl>

                      <div class="space-y-8 sm:space-y-0">
                        <div class="overflow-x-auto">
                        <table class="table min-w-full mt-1 border border-b border-gray-200 divide-y divide-blueGray-200 sm:mt-4">
                          <thead>
                            <tr class="trClass">
                              <th scope="col" class="thClass">Quantity</th>
                              <th scope="col" class="thClass">Catalog Model</th>
                              <th scope="col" class="thClass">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(productDetail, i) in form.productDetails" :key="`product-details-${i}`" class="trClass">
                              <td class="tdClass">{{productDetail.quantity}}</td>
                              <td class="tdClass">{{productDetail.catalogOrModel}}</td>
                              <td class="tdClass">{{productDetail.description}}</td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                      </div>

                      <!--<UiAppTable :headers="headers">
                        <tbody>
                          <tr v-for="(productDetail,index) in form.productDetails" :key="index" class="trClass">
                            <td class="tdClass">{{ productDetail.quantity }}</td>
                            <td class="tdClass">{{ productDetail.catalogOrModel }}</td>
                            <td class="tdClass">{{ productDetail.description }}</td>
                          </tr>
                        </tbody>
                      </UiAppTable>-->

                      <div class="mt-5">
                        <h3 id="contact-details">Company Information</h3>
                      </div>
                      <dl class="space-y-8 sm:space-y-0">
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            IMR Company
                          </dt>
                          <dd class="details-dd">
                            {{ form.nskSalesRep }}
                          </dd>
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
                            Email
                          </dt>
                          <dd class="details-dd">
                            {{ form.email }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Date
                          </dt>
                          <dd class="details-dd">
                            {{ form.date }}
                          </dd>
                        </div>
                      </dl>

                      <div class="mt-5">
                        <h3 id=""></h3>
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
                            Distributor Street
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributorDetails.street }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Distributor City, State, Zip Code
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributorDetails.cityStateZip }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Distributor Sales Rep Name
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributorDetails.name }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Distributor Sales Rep Title
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributorDetails.title }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Distributor Sales Rep Email
                          </dt>
                          <dd class="details-dd">
                            {{ form.distributorDetails.email }}
                          </dd>
                        </div>
                      </dl>

                      <div class="mt-5">
                        <h3 id=""></h3>
                      </div>
                      <dl class="space-y-8 sm:space-y-0">
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Company Name
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserCompanyDetails.endUserCompany }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Direct Phone Number
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserCompanyDetails.phone }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Email Address
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserCompanyDetails.email }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Address
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserCompanyDetails.cityStateZip }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Contact Name
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserCompanyDetails.name }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            End User Contact Title
                          </dt>
                          <dd class="details-dd">
                            {{ form.endUserCompanyDetails.title }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Shipping Option
                          </dt>
                          <dd class="details-dd">
                            {{ form.shippingOption }}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <SupportCostSavingsEvaluationResultsCostSavingsEvaluation v-if="form.handToolsOrSpindle === 'spindle' && wizard.step === 3" :value="cseValues"/>
                    <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                      <UiAppFormSubmit
                        @click.prevent="backFromPreview"
                        className="tertiary"
                        label="Back"
                      />
                      <UiAppFormSubmit className="primary" label="Submit" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div v-show="wizard.step === 2">
              <SupportCostSavingsEvaluationFormCostSavingsEvaluation :attached="true" @saveCse="saveCse($event)" @back="backFromCse"/>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
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
  FETCH_FORM_NOTIFICATION,
  INSERT_ONE_DEMONSTRATION_REQUEST
} from "~/graphql/dashboard/forms/demonstration-request";
import { UPDATE_ONE_DEMONSTRATION_REQUEST } from "~/graphql/dashboard/demonstration-request/demonstration-request";
import { FETCH_ONE_COUNTER, UPDATE_ONE_COUNTER } from "~/graphql/counter";
import { FETCH_COST_SAVINGS_EVALUATIONS } from '~/graphql/dashboard/cost-savings-evaluation';

import VueNumeric from 'vue-numeric'
export default {
  components: {VueNumeric},
  data() {
    return {
      // CD (JE on 20210514): wizard form state
      wizard: {
        step: 1,
        steps: [
          {
            step: 1,
            title: "Demonstration Request"
          },
          {
            step: 2,
            title: "Cost Savings Analysis Worksheet"
          },
          {
            step: 3,
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
      headers: ["Quantity", "Catalog # or Model #", "Description", ""],
      notification: {
        show: false,
        title: "Sent!",
        content: "Your form has been submitted and you should receive an email confirmation shortly",
        type: ""
      },
      cse: "",
      cseOptions: [],
      cseValues: {},
      attachCse: null,
      cost_savings_evaluations: [],
      form: {
        handToolsOrSpindle: "",
        cse: [],
        csePdf: null,
        value: "",
        timeToClose: "",
        cuttingTool: "",
        material: "",
        currentState: {
          cutLength: "",
          cutDepth: "",
          spindleSpeed: "",
          feed: ""
        },
        futureState: {
          cutLength: "",
          cutDepth: "",
          spindleSpeed: "",
          feed: ""
        },
        successfulTest: "",
        demonstrationDate: "",
        productDetails: [
          {
            quantity: "",
            catalogOrModel: "",
            description: ""
          }
        ],
        nskSalesRep: "",
        name: "",
        email: "",
        date: (+new Date()),
        distributorDetails: {
          distributor: "",
          street: "",
          cityStateZip: "",
          name: "",
          title: "",
          email: ""
        },
        endUserCompanyDetails: {
          endUserCompany: "",
          phone: "",
          email: "",
          cityStateZip: "",
          name: "",
          title: ""
        },
        shippingOption: ""
      }
    };
  },
  async fetch(){
    const query = FETCH_COST_SAVINGS_EVALUATIONS;
    const { data } = await this.$apollo.query({ query });
    this.cost_savings_evaluations = data.cost_savings_evaluations

    let options = this.cost_savings_evaluations.map(cse => {
        return {text: cse.label, id: cse._id}
      })
    this.cseOptions = options.filter(option => option.text)
    this.form.name =  this.$store.state.auth.user.given_name + ' ' +  this.$store.state.auth.user.family_name
    this.form.email = this.$store.state.auth.user.email
  },
  methods: {
    // CD (JE on 20210514): onClick function for next/back
    backFromCse(){
      this.wizard.step--
    },
    backFromPreview(){
      if(this.form.handToolsOrSpindle === 'spindle'){
        this.wizard.step--;
      } else {
        this.wizard.step = 1;
      }
    },
    changeValue: function(newValue) {
      this.form.shippingOption = newValue;
    },
    // CD (EV on 20210302): onClick function for UiAppButton
    async formSubmit() {
      if (this.wizard.step === 1) {
        if(this.form.handToolsOrSpindle === 'spindle' && this.attachCse === 'false'){
          this.wizard.step = 2
          return
        } else {
          if(this.form.handToolsOrSpindle === 'spindle') this.cseValues = this.cost_savings_evaluations.filter(cse => cse._id === this.form.cse[0].id)[0]
          this.wizard.step = 3
          return
        }
      } else if (this.wizard.step === 2){
        this.wizard.step = 3
        return
      }


      if (this.form.handToolsOrSpindle === 'spindle' && this.attachCse === 'true'){
        if(this.form.cse.length) {
          this.attachCse = null
          this.form.cse = this.form.cse[0].id
          this.form.csePdf = this.cost_savings_evaluations.filter(cse => cse._id === this.form.cse)[0].pdf
        } else {            
          this.notification = {
            show: true,
            title: "Error",
            content: "Please specify Cost Savings Analysis file",
            type: ""
          }
          return
        }
      }

        const {
          data: { counter }
        } = await this.$apollo.query({
          query: FETCH_ONE_COUNTER,
          variables: { query: { field: "Demonstration Request" } },
          fetchPolicy: "no-cache",
          nextFetchPolicy: "no-cache"
        });

        this.form.formId = `${
          process.env.DEMONSTRATION_REQUEST_ID_PREFIX
        }-0000${counter.count + 1}`;

      const mutation = INSERT_ONE_DEMONSTRATION_REQUEST;
      this.form.createdAt = this.form.updatedAt = new Date();
      this.form.createdBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      this.form.status = "Pending";
      var variables = {
        data: this.form
      };

      const mutatate = await this.$apollo.mutate({ mutation, variables });
      await this.$apollo.mutate({
        mutation: UPDATE_ONE_COUNTER,
        variables: {
          query: {
            field: "Demonstration Request"
          },
          set: { count_inc: 1 }
        }
      });
      if (mutatate.data.insertOneDemonstration_request) {
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
            console.log(form_notification.data)
            this.email.submitting = true;
            this.email.error = false;
            const filename = `demo-request-${this.form.name}-${Date.now()}.pdf`;
            const uploaded = await this.$axios.$post(
              "/api/v1/dashboard/forms/send-email/demonstration-request",
              {
                filename,
                email: this.form.email,
                form_notification: form_notification.data.form_notification,
                demonstration_request: this.form,
                cse_pdf: this.form.csePdf,
                cse_label: this.cseValues ? this.cseValues.label : null
              }
            );

            await this.$apollo.mutate({
              mutation: UPDATE_ONE_DEMONSTRATION_REQUEST,
              variables: {
                query: {
                  _id: mutatate.data.insertOneDemonstration_request._id
                },
                set: {
                  pdf: { filename: uploaded.Key, location: uploaded.Location }
                }
              }
            });

            // CD (EV on 20210427): if success sending email update email state
            this.email.submitting = false;
            this.email.isSubmitted = true;

            // CD (EV on 20210427): show notification
            this.notification = {
              show: true,
              title: "Sent!",
              content: "Your form has been submitted and you should receive an email confirmation shortly",
              type: ""
            },

            // CD (EV on 20210427): clear the form
            this.form = {
        handToolsOrSpindle: "",
        cse: [],
        csePdf: null,
        value: "",
        timeToClose: "",
        cuttingTool: "",
        material: "",
        currentState: {
          cutLength: "",
          cutDepth: "",
          spindleSpeed: "",
          feed: ""
        },
        futureState: {
          cutLength: "",
          cutDepth: "",
          spindleSpeed: "",
          feed: ""
        },
        successfulTest: "",
        demonstrationDate: "",
        productDetails: [
          {
            quantity: "",
            catalogOrModel: "",
            description: ""
          }
        ],
        nskSalesRep: "",
        name: "",
        email: "",
        date: (+new Date()),
        distributorDetails: {
          distributor: "",
          street: "",
          cityStateZip: "",
          name: "",
          title: "",
          email: ""
        },
        endUserCompanyDetails: {
          endUserCompany: "",
          phone: "",
          email: "",
          cityStateZip: "",
          name: "",
          title: ""
        },
        shippingOption: ""
      };

            // CD (EV on 20210427): reset wizard form step
            this.wizard.step = 1;
          } catch (e) {
            // CD (EV on 20210427): if error sending email update email state
            this.email.submitting = false;
            this.email.error = true;
            console.error(e);
          }
        }
      }
    },
    deleteProductDetails(index) {
      this.form.productDetails.splice(index, 1);
    },
    addProductDetails() {
      var object = {
        quantity: "",
        catalogOrModel: "",
        description: ""
      };
      this.form.productDetails.push(object);
    },
    saveCse(data){
      data.owner = {firstName: this.$store.state.auth.user.given_name, lastName: this.$store.state.auth.user.family_name, email: this.$store.state.auth.user.email}
      this.cseValues = data;
      this.form.cse = data.id;
      this.form.csePdf = data.pdf;
      this.wizard.step = 3;
    }
  },
  computed: {
    filteredItems() {
      return this.cseOptions.filter(i => {
        return i.text.toLowerCase().indexOf(this.cse.toLowerCase()) !== -1;
      });
    }
  },
  filters: {
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

<style>
.ti-autocomplete{
  position: relative !important;
}
</style>
