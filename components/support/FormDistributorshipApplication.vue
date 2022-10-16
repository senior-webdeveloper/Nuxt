// CD (CT on 20210330): component used in only
"/pages/dashboard/forms/distributorship-application.vue" // CD (CT on
202210331): component used in only "/pages/support/index.vue"

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
        <h1>Application for Distributorship Form</h1>
      </div>
      <div class="relative py-4 mt-4 bg-blueGray-100 lg:w-3/4 md:mx-auto sm:p-6">
        <div class="container mx-auto sm:px-4">
          <!-- <UiAppForm :formInput="formInput"  /> -->

          <div>
            <UiAppPanel v-model="wizard.step" :steps="wizard.steps" />
            <form @submit.prevent="formSubmit" class="w-full mt-10">
              <template v-if="wizard.step === 1">
                <div class="md:grid md:grid-cols-3">
                  <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                      <h3>Company Information</h3>
                    </div>
                  </div>
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.companyInformation.legalName"
                              label="Company Legal Name and d/b/a (if applicable)"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.companyInformation.address"
                              type="text"
                              label="Company Address (principle place of business) *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.companyInformation.phone"
                              type="text"
                              label="Company Phone Number *"
                              placeholder="000-000-0000 or 0000000000"
                              :isNaValidPhone="true"
                              :required="true"
                            />
                            <p class="note">For locations outside of the US and Canada please contact us at info@nskamericacorp.com</p>
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.companyInformation.principalContact.nameAndTitle"
                              type="text"
                              label="Principal Contact Name and Title *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.companyInformation.principalContact.phone"
                              :isNaValidPhone="true"
                              type="text"
                              label="Principal Contact's Direct Phone Number *"
                              placeholder="000-000-0000 or 0000000000"
                              :required="true"
                            />
                            <p class="note">For locations outside of the US and Canada please contact us at info@nskamericacorp.com</p>
                          </div>
                          <div class="col-span-6 sm:col-span-5">
                            <UiAppFormField
                              v-model="form.companyInformation.principalContact.email"
                              type="email"
                              label="Principal Contact Email *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.companyInformation.nameAndTitleOfficersOrOwners"
                              type="text"
                              label="Names and Titles of Officers or Owners *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.companyInformation.legalNameAndAddressHeadquartersParentCompany"
                              label="Legal Name and Address of Headquarters or Parent Company (principal place of business) (if applicable)"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.companyInformation.geographicConcentration"
                              label="Geographic Concentration *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.companyInformation.primaryIndustriesServed"
                              label="Primary Industries Served *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <p class="block text-sm font-medium text-blueGray-700">
                              Distributor Type
                            </p>
                            <fieldset class="mt-4">
                              <legend class="sr-only">Distributor Type</legend>
                                <div class="relative z-0 space-y-4">
                                  <div class="relative flex items-start">
                                    <input
                                      type="checkbox"
                                      id="isManufacturing"
                                      name="isManufacturing"
                                      class="checkbox"
                                      v-model="form.companyInformation.distributorType.isManufacturing"
                                    />
                                    <label for="isManufacturing" class="block ml-3 text-sm font-medium text-blueGray-700">Industrial
                                    </label>
                                  </div>
                                  <div class="relative flex items-start">
                                    <input
                                        type="checkbox"
                                        id="isWoodworking"
                                        name="isWoodworking"
                                        class="checkbox"
                                        v-model="form.companyInformation.distributorType.isWoodworking"
                                      />
                                    <label for="isWoodworking" class="block ml-3 text-sm font-medium text-blueGray-700">Woodworking</label>
                                  </div>
                                  <div class="relative flex items-start">
                                    <input
                                        type="checkbox"
                                        id="isJewelry"
                                        name="isJewelry"
                                        class="checkbox"
                                        v-model="form.companyInformation.distributorType.isJewelry"
                                      />
                                    <label for="isJewelry" class="block ml-3 text-sm font-medium text-blueGray-700">Jewelry</label>
                                  </div>
                                  <div class="relative flex items-start">
                                    <input
                                        type="checkbox"
                                        id="isMachineTools"
                                        name="isMachineTools"
                                        class="checkbox"
                                        v-model="form.companyInformation.distributorType.isMachineTools"
                                      />
                                    <label for="isMachineTools" class="block ml-3 text-sm font-medium text-blueGray-700">Machine Tools</label>
                                  </div>
                                </div>
                            </fieldset>
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.companyInformation.primaryProductLinesDistributed"
                              label="Primary Product Lines Distributed *"
                              :required="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <template v-if="wizard.step === 2">
                <div class="md:grid md:grid-cols-3">
                  <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                      <h3>Sales Information</h3>
                    </div>
                  </div>
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.salesInformation.crm"
                              label="What CRM do you use? *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.salesInformation.trackSalesOpportunites"
                              label="How do you track sales opportunities? *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.salesInformation.showValue"
                              label="How do you show value? *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.salesInformation.trackSuccessStories"
                              label="How do you track success stories? *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 lg:col-span-4">
                            <label class="block text-sm font-medium text-blueGray-700">
                              What is your annual sales commitment to NSK? *
                              <vue-numeric 
                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                currency="$" 
                                separator=","
                                required 
                                v-model="form.salesInformation.annualSalesCommitment"
                                placeholder="$">
                              </vue-numeric>
                            </label>
                          </div>
                          <!-- CD (CT on 20220303): Start of additional fields -->
                          <div class="col-span-6 sm:col-span-5">
                            <UiAppFormFieldExtended
                              v-model="form.salesInformation.percentageSalesMetalworking"
                              type="text"
                              label="What percentage of sales is metalworking? *"
                              :required="true"
                            >
                              <template v-slot:left-symbol>
                                <div class="anything"></div>
                                  </template>
                                  <template v-slot:right-symbol>
                                    %
                              </template>
                            </UiAppFormFieldExtended>
                          </div>
                          <div class="col-span-6">
                            <label class="block mb-2 text-sm font-medium text-blueGray-700">
                              Do you require cost savings tracking of your salespeople? *
                            </label>
                            <input
                              type="checkbox"
                              id="costSavingsTracking"
                              name="costSavingsTracking"
                              class="checkbox"
                              v-model="form.salesInformation.costSavingsTracking"
                            />
                          </div>
                          <div class="col-span-6">
                            <label class="block mb-2 text-sm font-medium text-blueGray-700">
                              Will NSK be allowed to make joint sales calls with your personnel? *
                            </label>
                            <input
                              type="checkbox"
                              id="jointSalesCalls"
                              name="jointSalesCalls"
                              class="checkbox"
                              v-model="form.salesInformation.jointSalesCalls"
                            />
                          </div>
                          <div class="col-span-6">
                            <label class="block mb-2 text-sm font-medium text-blueGray-700">
                              Are you interested in joint marketing success stories? *
                            </label>
                            <input
                              type="checkbox"
                              id="jointMarketingSuccessStories"
                              name="jointMarketingSuccessStories"
                              class="checkbox"
                              v-model="form.salesInformation.jointMarketingSuccessStories"
                            />
                          </div>
                          <!-- End of additional fields -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <template v-if="wizard.step === 3">
                <div class="md:grid md:grid-cols-3">
                  <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                      <h3>Sales Representation</h3>
                    </div>
                  </div>
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.salesRepresentation.quantityOutsideSales"
                              type="text"
                              label="Quantity Outside Sales *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.salesRepresentation.quantityInsideSales"
                              type="text"
                              label="Quantity Inside Sales *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <p class="text-sm font-medium text-blueGray-700">
                              Salesperson Contact Information 
                            </p>
                            <form @submit.prevent.stop="addSalesDetails">
                              <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="salesDetails.name"
                                  type="text"
                                  label="Name"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="salesDetails.title"
                                  type="text"
                                  label="Title"
                                />
                              </div>
                              <div class="col-span-6 sm:col-span-5">
                                <UiAppFormField
                                  v-model="salesDetails.email"
                                  type="email"
                                  label="Email"
                                />
                              </div>
                              <div class="col-span-6 sm:col-span-4">
                                <UiAppFormField
                                  v-model="salesDetails.phone"
                                  :isNaValidPhone="true"
                                  type="text"
                                  label="Phone"
                                  placeholder="000-000-0000 or 0000000000"
                                />
                                <p class="note">For locations outside of the US and Canada please contact us at info@nskamericacorp.com</p>
                              </div>
                              <div class="col-span-6">  
                                <UiAppFormSubmit
                                  className="secondary"
                                  label="Add"
                                  class="mt-2"
                                />
                              </div>
                              </div>
                            </form>

                          </div>
                          <div class="col-span-6">
                            <div class="overflow-hidden">
                              <!-- CD (CT on 20210417): @ed Remove the title part of the table. it's creating some unncessary space on the form -->
                              <div>
                                <UiAppTable :headers="headers" :sort="false">
                                  <tbody>
                                    <tr v-for="(salesDetail, index) in form.salesRepresentation.salesDetails" :key="index" class="trClass">
                                      <td class="tdClass">{{ salesDetail.name }}</td>
                                      <td class="tdClass">{{ salesDetail.title }}</td>
                                      <td class="tdClass">{{ salesDetail.email }}</td>
                                      <td class="tdClass">{{ salesDetail.phone }}</td>
                                      <td class="tdClass">
                                        <UiAppButton @click="removeSalesDetails(index)" label="DELETE" className="text-only" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </UiAppTable>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <template v-if="wizard.step === 4">
                <div>
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>Company Information</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <UiAppFormField
                                type="text"
                                label="Company Legal Name and d/b/a (if applicable)"
                                :required="true"
                                isPreview
                                v-model="form.creditInformation.companyInformation.legalName"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                type="text"
                                label="Company Address (Principal Place of Business)"
                                :required="true"
                                isPreview
                                v-model="form.creditInformation.companyInformation.address"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                type="text"
                                label="Company Website *"
                                :required="true"
                                v-model="form.creditInformation.companyInformation.website"
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                type="text"
                                label="AP Contact Name *"
                                :required="false"
                                v-model="form.creditInformation.companyInformation.apContact.name"
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                :isNaValidPhone="true"
                                type="text"
                                label="AP Contact Phone *"
                                placeholder="000-000-0000 or 0000000000"
                                :required="true"
                                v-model="form.creditInformation.companyInformation.apContact.phone"
                              />
                              <p class="note">For locations outside of the US and Canada please contact us at info@nskamericacorp.com</p>
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                type="email"
                                label="AP Contact Email *"
                                :required="false"
                                v-model="form.creditInformation.companyInformation.apContact.email"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                type="text"
                                label="Names and Titles of Officers and Owners"
                                :required="true"
                                isPreview
                                v-model="form.creditInformation.companyInformation.nameAndTitleOfficersOrOwners"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                type="text"
                                label="Legal Name and Address of Headquarters or Parent Company (principal place of business) (if applicable) "
                                :required="true"
                                isPreview
                                v-model="form.creditInformation.companyInformation.legalNameAndAddressHeadquartersParentCompany"
                              />
                            </div>
                            <div class="col-span-6">
                              <p class="block text-sm font-medium text-blueGray-700">
                                Credit Line Requested
                              </p>
                              <fieldset class="mt-4">
                                <legend class="sr-only">Credit Line Requested</legend>
                                  <div class="relative z-0 space-y-4">
                                    <div class="relative flex items-start">
                                      <input
                                          type="checkbox"
                                          class="checkbox"
                                          v-model="form.creditInformation.companyInformation.creditLineRequested"
                                        />
                                      <label class="block ml-3 text-sm font-medium text-blueGray-700">Request Credit Line</label>
                                    </div>
                                    <div class="col-span-3 mr-4" v-if="form.creditInformation.companyInformation.creditLineRequested">
                                      <label class="block text-sm font-medium text-blueGray-700">
                                        Credit Amount
                                        <vue-numeric 
                                          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                          currency="$" 
                                          separator="," 
                                          v-model="form.creditInformation.companyInformation.amountRequested"
                                          placeholder="$">
                                        </vue-numeric>
                                      </label>
                                    </div>
                                  </div>
                              </fieldset>
                            </div>
                            <div class="col-span-6">
                              <p class="block text-sm font-medium text-blueGray-700">
                                Existing Customer
                              </p>
                              <fieldset class="mt-4">
                                <legend class="sr-only">Existing Customer</legend>
                                  <div class="relative z-0 space-y-4">
                                    <div class="relative flex items-start">
                                      <input
                                          type="checkbox"
                                          id="isMachineTools"
                                          name="isExistingCustomer"
                                          class="checkbox"
                                          v-model="form.creditInformation.companyInformation.isExistingCustomer"
                                        />
                                      <label for="isExistingCustomer" class="block ml-3 text-sm font-medium text-blueGray-700">
                                        Company Is An Existing Customer
                                      </label>
                                    </div>
                                  </div>
                              </fieldset>
                            </div>
                            <div class="col-span-3">
                              <UiAppFormField
                                type="text"
                                label="Federal ID Number *"
                                v-model="form.creditInformation.companyInformation.federalId"
                                :required="false"
                              />
                            </div>
                            <div class="col-span-3">
                              <UiAppFormField
                                type="text"
                                label="DUNS ID Number *"
                                v-model="form.creditInformation.companyInformation.dunsId"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-3">
                              <UiAppFormField
                                type="text"
                                label="Years in Business *"
                                v-model="form.creditInformation.companyInformation.yearsInBusiness"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormTextArea
                                label="Description of Business *"
                                v-model="form.creditInformation.companyInformation.descriptionOfBusiness"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <p class="block text-sm font-medium text-blueGray-700">
                                Type of Company (Check all that may apply)
                              </p>
                              <fieldset class="mt-4">
                                <legend class="sr-only">Type of Company</legend>
                                  <div class="relative z-0 space-y-4">
                                    <div class="relative flex items-start">
                                      <input
                                        type="checkbox"
                                        id="isCorporation"
                                        name="isCorporation"
                                        class="checkbox"
                                        v-model="form.creditInformation.companyInformation.companyType.isCorporation"
                                      />
                                      <label for="isCorporation" class="block ml-3 text-sm font-medium text-blueGray-700">Corporation
                                      </label>
                                    </div>
                                    <div class="relative flex items-start">
                                      <input
                                          type="checkbox"
                                          id="isLLC"
                                          name="isLLC"
                                          class="checkbox"
                                          v-model="form.creditInformation.companyInformation.companyType.isLLC"
                                        />
                                      <label for="isLLC" class="block ml-3 text-sm font-medium text-blueGray-700">LLC</label>
                                    </div>
                                    <div class="relative flex items-start">
                                      <input
                                          type="checkbox"
                                          id="isPartnership"
                                          name="isPartnership"
                                          class="checkbox"
                                          v-model="form.creditInformation.companyInformation.companyType.isPartnership"
                                        />
                                      <label for="isPartnership" class="block ml-3 text-sm font-medium text-blueGray-700">Partnership</label>
                                    </div>
                                    <div class="relative flex items-start">
                                      <input
                                          type="checkbox"
                                          id="isSoleProprietorship"
                                          name="isSoleProprietorship"
                                          class="checkbox"
                                          v-model="form.creditInformation.companyInformation.companyType.isSoleProprietorship"
                                        />
                                      <label for="isSoleProprietorship" class="block ml-3 text-sm font-medium text-blueGray-700">Sole Proprietorship</label>
                                    </div>
                                    <div class="relative flex items-start">
                                      <input
                                          type="checkbox"
                                          id="isNonProfit"
                                          name="isNonProfit"
                                          class="checkbox"
                                          v-model="form.creditInformation.companyInformation.companyType.isNonProfit"
                                        />
                                      <label for="isNonProfit" class="block ml-3 text-sm font-medium text-blueGray-700">Non-Profit</label>
                                    </div>
                                    <div class="relative flex items-start">
                                      <input
                                          type="checkbox"
                                          id="isPrivatelyHeld"
                                          name="isPrivatelyHeld"
                                          class="checkbox"
                                          v-model="form.creditInformation.companyInformation.companyType.isPrivatelyHeld"
                                        />
                                      <label for="isPrivatelyHeld" class="block ml-3 text-sm font-medium text-blueGray-700">Privately Held</label>
                                    </div>
                                    <div class="relative flex items-start">
                                      <input
                                          type="checkbox"
                                          id="isPubliclyTraded"
                                          name="isPubliclyTraded"
                                          class="checkbox"
                                          v-model="form.creditInformation.companyInformation.companyType.isPubliclyTraded"
                                        />
                                      <label for="isPubliclyTraded" class="block ml-3 text-sm font-medium text-blueGray-700">Publicly Traded</label>
                                    </div>
                                    <div class="relative flex items-start">
                                      <input
                                          type="checkbox"
                                          id="isOther"
                                          name="isOther"
                                          class="checkbox"
                                          v-model="form.creditInformation.companyInformation.companyType.isOther"
                                        />
                                      <label for="isOther" class="block ml-3 text-sm font-medium text-blueGray-700">Other</label>
                                    </div>
                                    <div class="col-span-3" v-if="form.creditInformation.companyInformation.companyType.isOther">
                                      <UiAppFormField
                                        type="text"
                                        :required="true"
                                        v-model="form.creditInformation.companyInformation.ifOther"
                                      />
                                    </div>
                                  </div>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                        <!-- button -->
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
                          <h3>Address Information</h3>
                        </div>
                      </div>
                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <div class="overflow-hidden shadow">
                          <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6">
                                <UiAppFormTextArea
                                  label="Invoice Billing Address *"
                                  :required="true"
                                  v-model="form.creditInformation.addressInformation.invoiceBillingAddress"
                                />
                              </div>
                              <div class="col-span-6">
                                <p class="block text-sm font-medium text-blueGray-700">
                                  Preferred Method of Invoice Submission
                                </p>
                                <fieldset class="mt-4">
                                  <legend class="sr-only">Preferred Method of Invoice Submission</legend>
                                    <div class="relative z-0 space-y-4">
                                      <div class="relative flex items-start">
                                        <input
                                          type="checkbox"
                                          class="checkbox"
                                          v-model="form.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isMailToPhysicalAddress"
                                        />
                                        <label class="block ml-3 text-sm font-medium text-blueGray-700">Mail To Physical Address</label>
                                      </div>
                                      <div class="relative flex items-start">
                                          <input
                                            type="checkbox"
                                            class="checkbox"
                                            v-model="form.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isEmail"
                                          />
                                          <label class="block ml-3 text-sm font-medium text-blueGray-700">Mail To Email Address</label>
                                      </div>
                                      <div class="col-span-6">
                                        <UiAppFormTextArea
                                          label="Comma Separated Email Address(es)"
                                          :required="false"
                                          v-model="form.creditInformation.addressInformation.email"
                                        />
                                      </div>
                                    </div>
                                </fieldset>
                              </div>
                              <div class="col-span-6">
                                <UiAppFormTextArea
                                  v-model="form.creditInformation.addressInformation.primaryShipToAddress"
                                  label="Primary Ship to Address *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormTextArea
                                  v-model="form.creditInformation.addressInformation.preferredShippingCompany"
                                  label="Preferred Shipping Company *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormTextArea
                                  v-model="form.creditInformation.addressInformation.preferredShippingCompanyAccountNumber"
                                  label="Preferred Shipping Company Account Number *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormTextArea
                                  v-model="form.creditInformation.addressInformation.additionalShipToAddress"
                                  label="Additional Ship to Addresses (if applicable)"
                                  :required="false"
                                />
                              </div>
                              <div class="col-span-6">
                                <p class="block text-sm font-medium text-blueGray-700">
                                  Exempt from Sales and Use Tax
                                </p>
                                <fieldset class="mt-4">
                                  <legend class="sr-only">Exempt from Sales and Use Tax</legend>
                                    <div class="relative z-0 space-y-4">
                                      <div class="relative flex items-start">
                                        <input
                                            type="checkbox"
                                            id="isExemptFromSalesAndUseTax"
                                            name="isExemptFromSalesAndUseTax"
                                            class="checkbox"
                                            v-model="form.creditInformation.addressInformation.isExemptFromSalesAndUseTax"
                                          />
                                        <label for="isExemptFromSalesAndUseTax" class="block ml-3 text-sm font-medium text-blueGray-700">Yes</label>
                                      </div>
                                      <div class="col-span-3 mr-4">
                                        <UiAppFormTextArea
                                          v-if="form.creditInformation.addressInformation.isExemptFromSalesAndUseTax"
                                          label="States Exempt In (if applicable)"
                                          :required="false"
                                          v-model="form.creditInformation.addressInformation.statesExemptIn"
                                        />
                                      </div>
                                    </div>
                                </fieldset>
                              </div>
                              <div class="col-span-6">
                                <p class="block mb-2 text-sm font-medium text-blueGray-700">Please attach copies of all applicable Sales and Use Tax Exemptions as well as the following documents. *
                                  <ul class="list-disc list-inside">
                                    <li>Credit References</li>
                                    <li>W9 (for US) or W8-BEN (for Canada)</li>
                                    <li>Sales Tax Exemption Form (for every state you sell in)</li>
                                  </ul>
                                </p>
                                <p class="block mb-2 note">Applicant agrees to pay all applicable sales tax as per each state's regulations unless a valid resale or exemption certificate is received. Certificate must be in compliance and acceptable to each state's taxing authority.</p>
                                <section>
                                    <UiAppUploadBuefy v-model="files" multiple ref="files"/>
                                  <div class="tags">
                                      <span v-for="(file, index) in files"
                                          :key="index"
                                          class="flex items-center justify-start" >
                                          {{file.name}}
                                          <button class="delete is-small" type="button" @click="files.splice(index, 1)">
                                              <UiIconClose />
                                          </button>
                                      </span>
                                  </div>
                                </section>
                              </div>
                              <div class="flex col-span-6">
                                <input
                                    type="checkbox"
                                    id="creditReference"
                                    name="creditReference"
                                    class="checkbox"
                                    v-model="creditReference"
                                  />
                                <label for="creditReference" class="ml-3">If you don't have a Credit Reference to upload above, please check here and provide reference details.</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="hidden sm:block" aria-hidden="true" v-if="creditReference">
                    <div class="py-5">
                      <div class="border-t border-gray-200"></div>
                      <div class="px-4 sm:px-0">
                        <h3>Reference Information</h3>
                      </div>
                    </div>
                  </div>

                  <div class="mt-10 sm:mt-0" v-if="creditReference">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                      <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                          <h3>Bank Reference</h3>
                        </div>
                      </div>
                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <div class="overflow-hidden shadow">
                          <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6">
                                <UiAppFormTextArea
                                  v-model="form.creditInformation.referenceInformation.bankReference.bankName"
                                  label="Bank Name *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="form.creditInformation.referenceInformation.bankReference.bankContactName"
                                  type="text"
                                  label="Bank Contact Name *"
                                  :required="false"
                                />
                              </div>
                              <div class="col-span-6 sm:col-span-4">
                                <UiAppFormField
                                  :isNaValidPhone="true"
                                  type="text"
                                  label="Direct Phone Number *"
                                  placeholder="000-000-0000 or 0000000000"
                                  :required="false"
                                  v-model="form.creditInformation.referenceInformation.bankReference.bankDirectPhone"
                                />
                                <p class="note">For locations outside of the US and Canada please contact us at info@nskamericacorp.com</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="creditReference">
                    <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                      <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                          <h3>Trade Reference</h3>
                          <p>Please provide 3 current references that we may contact to obtain payment history. Do not include property management or utiities.</p>
                          <p class="mt-2 note">For locations outside of the US and Canada please contact us at info@nskamericacorp.com</p> 
                        </div>
                      </div>
                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <UiAppTable :headers="tradeReferenceHeaders" :sort="false">
                          <tbody>
                            <!-- CD (EV on 20210302): Render table row -->
                            <tr v-for="(companyDetail, index) in form.creditInformation.referenceInformation.tradeReference.companyDetails" :key="index" class="trClass">
                              <td class="w-1/4 tdClass">
                                <UiAppFormField
                                  v-model="form.creditInformation.referenceInformation.tradeReference.companyDetails[index].companyLegalName"
                                  type="text"
                                  :required="true"
                                />
                              </td>
                              <td class="w-1/4 tdClass">
                                <UiAppFormField
                                  v-model="form.creditInformation.referenceInformation.tradeReference.companyDetails[index].phone"
                                  :isNaValidPhone="true"
                                  type="text"
                                  :required="true"
                                />
                              </td>
                              <td class="w-1/4 tdClass">
                                <UiAppFormField
                                  v-model="form.creditInformation.referenceInformation.tradeReference.companyDetails[index].email"
                                  type="text"
                                  :required="true"
                                />
                              </td>
                              <td class="tdClass">
                                <!-- Class should be the icon for these 2 buttons -->
                                <div class="flex flex-col space-y-2">
                                  <UiAppButton
                                    @click="deleteTradeReference(index)"
                                    label="DELETE"
                                    className="text-only"
                                  />
                                  <UiAppButton
                                    label="ADD"
                                    className="text-only"
                                    @click="addTradeReference"
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </UiAppTable>
                      </div>
                    </div>
                  </div>

                  <div class="mt-10">
                    <div class="md:grid md:grid-cols-3 md:gap-6" v-if="creditReference">
                      <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                          <h3></h3>                       
                        </div>
                      </div>
                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <div class="overflow-hidden shadow">
                          <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="form.creditInformation.referenceInformation.tradeReference.nameAuthorizedRepresentative"
                                  type="text"
                                  label="Print Name and Title *"
                                  :required="false"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="form.creditInformation.referenceInformation.tradeReference.titleAuthorizedRepresentative"
                                  type="text"
                                  label="Title of Authorized Representative *"
                                  :required="true"
                                />
                              </div>
                              <div class="col-span-6">
                                <UiAppFormField
                                  v-model="form.creditInformation.referenceInformation.tradeReference.CompanyLegalName"
                                  type="text"
                                  label="Company Legal Name *"
                                  :required="true"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 mt-10 bg-gray-50 sm:px-6">
                      <div>
                        <fieldset class="mt-4">
                          <legend class="sr-only">Accept Legal</legend>
                            <div class="relative z-0 space-y-4">
                              <div class="relative flex items-start">
                                <input
                                    type="checkbox"
                                    id="isAcceptLegal"
                                    name="isAcceptLegal"
                                    class="checkbox"
                                    required="true"
                                    
                                  />
                                <label for="isAcceptLegal" class="block ml-3"><p class="text-sm italic">Applicant certifies that the information above and all information accompanying this application is true and accurate. Applicant authorizes NSK America Corp. (NSK) and any of NSK's subsidiaries to solicit and obtain credit information from the references above and from any other source at any time. All information reasonably considered confidential, at the discretion of NSK, will be treated as such. Should credit be granted by NSK, all decisions with respect to the extension or continuation of credit shall be at the sole discretion of NSK. NSK may terminate any credit granted within its sole discretion. Our standard terms are Net Thirty (30) Days. Any terms beyond the standard must be approved prior to shipment. Any questions or concerns, please contact the Finance Manager, phone: (847) 843-7664 ext. 207. Thank you for your cooperation.</p></label>
                              </div>
                            </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <template v-if="wizard.step === 5">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                  <div class="mt-5 md:mt-0 md:col-span-3">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-3 bg-gray-50 sm:px-6">
                        <div class="mt-5">
                          <h3 id="company-information">Company Information</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Legal name
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.legalName || "N/A" }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Address
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.address }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Phone
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.phone }}
                            </dd>
                          </div>
                        </dl>
                        <div class="mt-5">
                          <h3 id="principal-contact">Principal Contact</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Name and Title
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.principalContact.nameAndTitle }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Phone
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.principalContact.phone }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Email
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.principalContact.email }}
                            </dd>
                          </div>
                          <hr class="invisible mb-px" />
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Name and Title Officers or Owners
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.nameAndTitleOfficersOrOwners }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Legal name and address headquarters parent company
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.legalNameAndAddressHeadquartersParentCompany || "NA" }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Geographic Concentration
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.geographicConcentration }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Primary Industries Served
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.primaryIndustriesServed }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Primary ProductLines Distributed
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.primaryProductLinesDistributed }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Distributor Type
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyInformation.distributorType | distributorType }}
                            </dd>
                          </div>
                        </dl>
                        <div class="mt-5">
                          <h3 id="sales-information">Sales Information</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              What CRM do you use?
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesInformation.crm }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              How do you track sales opportunities?
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesInformation.trackSalesOpportunites }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              How do you show value?
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesInformation.showValue }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              How do you show value?
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesInformation.trackSuccessStories }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              What is your annual sales commitment to NSK?
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesInformation.annualSalesCommitment | formatNumber }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              What percentage of sales is metalworking?
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesInformation.percentageSalesMetalworking }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Do you require cost savings tracking of your salespeople?
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesInformation.costSavingsTracking | yesOrNo }} 
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Will NSK be allowed to make joint sales calls with your personnel?
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesInformation.jointSalesCalls | yesOrNo}}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Are you interested in joint marketing success stories?
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesInformation.jointMarketingSuccessStories | yesOrNo}}
                            </dd>
                          </div>
                        </dl>
                        <div class="mt-5">
                          <h3 id="sales-representation">Sales Representation</h3>
                        </div>
                        <dl class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Quantity Outside Sales
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesRepresentation.quantityOutsideSales }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Quantity Inside Sales
                            </dt>
                            <dd class="details-dd">
                              {{ form.salesRepresentation.quantityInsideSales }}
                            </dd>
                          </div>
                          <div class="sm:py-5">
                            <p class="details-dt">Principal Contact</p>
                            <p class="note">For locations outside of the US and Canada please contact us at info@nskamericacorp.com</p>
                            <div class="overflow-x-auto">
                              <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table class="table min-w-full mt-1 border border-b border-gray-200 divide-y divide-blueGray-200 sm:mt-4">
                                  <thead>
                                    <tr class="trClass">
                                      <th scope="col" class="thClass">Name</th>
                                      <th scope="col" class="thClass">Title</th>
                                      <th scope="col" class="thClass">Email</th>
                                      <th scope="col" class="thClass">Phone</th> 
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <template v-for="(sales, i) in form.salesRepresentation.salesDetails">
                                      <tr :key="`sales-${i}`">
                                        <td class="tdClass">{{ sales.name }}</td>
                                        <td class="tdClass">{{ sales.title }}</td>
                                        <td class="tdClass">{{ sales.email }}</td>
                                        <td class="tdClass">{{ sales.phone }}</td>
                                      </tr>
                                    </template>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </dl>
                        <div class="mt-5">
                          <h3 id="credit-information">Credit Information</h3>
                          <dl class="space-y-8 sm:space-y-0">
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Company Legal Name and d/b/a
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.legalName }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Company Address
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.address }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Company Website
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.website }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                AP Contact Name
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.apContact.name }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                AP Contact Phone
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.apContact.phone }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                AP Contact Email
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.apContact.email }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Names and Titles of Officers and Owners
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.nameAndTitleOfficersOrOwners }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Legal Name and Address of Headquarters or Parent Company
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.legalNameAndAddressHeadquartersParentCompany }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Credit Line Requested
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.creditLineRequested }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Credit Amount Requested
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.amountRequested | formatNumber }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Existing Customer
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.isExistingCustomer }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Federal ID Number
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.federalId }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                DUNS ID Number
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.dunsId }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Years In Business
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.yearsInBusiness }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Description of Business
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.companyInformation.descriptionOfBusiness }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Type of Company
                              </dt>
                              <dd class="details-dd">
                                {{ 
                                    (form.creditInformation.companyInformation.companyType.isCorporation ? 'Corporation, ' : '') +
                                    (form.creditInformation.companyInformation.companyType.isLLC ? 'LLC, ' : '') +
                                    (form.creditInformation.companyInformation.companyType.isPartnership ? 'Partnership, ' : '') +
                                    (form.creditInformation.companyInformation.companyType.isSoleProprietorship ? 'Sole Proprietorship, ' : '') +
                                    (form.creditInformation.companyInformation.companyType.isNonProfit ? 'Non Profit, ' : '') +
                                    (form.creditInformation.companyInformation.companyType.isPrivatelyHeld ? 'Privately Held, ' : '') +
                                    (form.creditInformation.companyInformation.companyType.isPubliclyTraded ? 'Publicly Traded, ' : '') +
                                    (form.creditInformation.companyInformation.companyType.isOther ? form.creditInformation.companyInformation.ifOther : '')
                                 }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Invoice Billing Address
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.addressInformation.invoiceBillingAddress }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Preferred Method of Invoice Submission
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isEmail ? 'Email' : '' }}
                                {{ form.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isEmail && form.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isMailToPhysicalAddress ? 'and' : ''}}
                                {{ form.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isMailToPhysicalAddress ? 'Mail To Physical Address' : '' }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Email Address(es)
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.addressInformation.email }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Primary Ship to Address
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.addressInformation.primaryShipToAddress }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Preferred Shipping Company
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.addressInformation.preferredShippingCompany }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Preferred Shipping Company Account Number
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.addressInformation.preferredShippingCompanyAccountNumber }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Additional Ship to Addresses
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.addressInformation.additionalShipToAddress }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Exempt from Sales and Use Tax
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.addressInformation.isExemptFromSalesAndUseTax }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                States Exempt In
                              </dt>
                              <dd class="details-dd">
                                {{ form.creditInformation.addressInformation.statesExemptIn }}
                              </dd>
                            </div>
                            <div class="sm:flex sm:py-5">
                              <dt class="details-dt">
                                Attachments
                              </dt>
                              <dd class="details-dd">
                                {{ filenames }}
                              </dd>
                            </div>
                            <div v-if="creditReference">
                              <h3 id="reference-information">Reference Information</h3>
                              <div class="sm:flex sm:py-5">
                                <dt class="details-dt">
                                  Bank Name
                                </dt>
                                <dd class="details-dd">
                                  {{ form.creditInformation.referenceInformation.bankReference.bankName }}
                                </dd>
                              </div>
                              <div class="sm:flex sm:py-5">
                                <dt class="details-dt">
                                  Bank Contact Name
                                </dt>
                                <dd class="details-dd">
                                  {{ form.creditInformation.referenceInformation.bankReference.bankContactName }}
                                </dd>
                              </div>
                              <div class="sm:flex sm:py-5">
                                <dt class="details-dt">
                                  Bank Direct Phone Number
                                </dt>
                                <dd class="details-dd">
                                  {{ form.creditInformation.referenceInformation.bankReference.bankDirectPhone }}
                                </dd>
                              </div>
                              <h3 id="reference-information">Trade Reference</h3>
                              <div class="overflow-x-auto">
                                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                  <table class="table min-w-full mt-1 border border-b border-gray-200 divide-y divide-blueGray-200 sm:mt-4">
                                    <thead>
                                      <tr class="trClass">
                                        <th scope="col" class="thClass">Company</th>
                                        <th scope="col" class="thClass">Phone</th>
                                        <th scope="col" class="thClass">Email</th> 
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <template v-for="(item, i) in form.creditInformation.referenceInformation.tradeReference.companyDetails">
                                        <tr :key="i">
                                          <td class="tdClass">{{ item.companyLegalName }}</td>
                                          <td class="tdClass">{{ item.phone }}</td>
                                          <td class="tdClass">{{ item.email }}</td>
                                        </tr>
                                      </template>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div class="sm:flex sm:py-5">
                                <dt class="details-dt">
                                  Print Name and Title
                                </dt>
                                <dd class="details-dd">
                                  {{ form.creditInformation.referenceInformation.tradeReference.nameAuthorizedRepresentative }}
                                </dd>
                              </div>
                              <div class="sm:flex sm:py-5">
                                <dt class="details-dt">
                                  Title of Authorized Representative
                                </dt>
                                <dd class="details-dd">
                                  {{ form.creditInformation.referenceInformation.tradeReference.titleAuthorizedRepresentative }}
                                </dd>
                              </div>
                              <div class="sm:flex sm:py-5">
                                <dt class="details-dt">
                                  Company Legal Name
                                </dt>
                                <dd class="details-dd">
                                  {{ form.creditInformation.referenceInformation.tradeReference.CompanyLegalName }}
                                </dd>
                              </div>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <div class="mt-10 text-right">
                <UiAppButton
                  v-if="wizard.step > 1"
                  className="tertiary"
                  @click="wizard.step--"
                  class="ml-2"
                >Back</UiAppButton>
                <UiAppFormSubmit
                  v-if="wizard.step < 5"
                  className="tertiary"
                  label="Next"
                  @click="wizard.isNext = true"
                  class="ml-2"
                />
                <UiAppFormSubmit
                  v-else
                  className="primary"
                  label="Submit"
                  class="ml-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  INSERT_ONE_DISTRIBUTORSHIP_APPLICATION,
  FETCH_FORM_NOTIFICATION
} from "~/graphql/support/distributorship-application/distributorship-application";
import { UPDATE_ONE_DISTRIBUTORSHIP_APPLICATION } from "~/graphql/dashboard/distributorship-application/distributorship-application";
import { FETCH_ONE_COUNTER, UPDATE_ONE_COUNTER } from "~/graphql/counter";
import VueNumeric from 'vue-numeric'
export default {
  components: {VueNumeric},
  data() {
    return {
      // CD (JE on 20210508): Wizard form data
      wizard: {
        back: false,
        next: false,
        step: 1,
        steps: [
          {
            step: 1,
            title: "Company Information"
          },
          {
            step: 2,
            title: "Sales Information"
          },
          {
            step: 3,
            title: "Sales Representation"
          },
          {
            step: 4,
            title: "Credit Information"
          },
          {
            step: 5,
            title: "Preview"
          }
        ]
      },
      creditReference: false,
      files: [],
      headers: ["Name", "Title", "Email", "Phone number", "Action"],
      tradeReferenceHeaders: ["Company Legal Name", "Phone", "Email Address", "Action" ],
      notification: {
        show: false,
        title: "Sent!",
        content: "Your form has been submitted and you should receive an email confirmation shortly"
      },
      form: {
        companyInformation: {
          legalName: "",
          address: "",
          phone: "",
          nameAndTitleOfficersOrOwners: "",
          legalNameAndAddressHeadquartersParentCompany: "",
          geographicConcentration: "",
          primaryIndustriesServed: "",
          primaryProductLinesDistributed: "",
          distributorType: {
            isManufacturing: "",
            isWoodworking: "",
            isJewelry: "",
            isMachineTools: ""
          },
          principalContact: {
            nameAndTitle: "",
            phone: "",
            email: ""
          }
        },
        salesInformation: {
          crm: "",
          trackSalesOpportunites: "",
          showValue: "",
          trackSuccessStories: "",
          annualSalesCommitment: 0,
          percentageSalesMetalworking: "",
          costSavingsTracking: false,
          jointSalesCalls: false,
          jointMarketingSuccessStories: false,
        },
        salesRepresentation: {
          quantityOutsideSales: "",
          quantityInsideSales: "",
          salesDetails: []
        },
        creditInformation: {
          companyInformation: {
              legalName: "",
              address: "",
              website: "",
              apContact: {
                  name: "",
                  phone: "",
                  email: ""
                },
              nameAndTitleOfficersOrOwners: "",
              legalNameAndAddressHeadquartersParentCompany: "",
              creditLineRequested: "",
              amountRequested: 0,
              isExistingCustomer: "",
              federalId: "",
              dunsId: "",
              yearsInBusiness: "",
              descriptionOfBusiness: "",
              companyType: {
                isCorporation: "",
                isLLC: "",
                isPartnership: "",
                isSoleProprietorship: "",
                isNonProfit: "",
                isPrivatelyHeld: "",
                isPubliclyTraded: "",
                isOther: ""
              },
              ifOther: ""
            },
          addressInformation: {
              invoiceBillingAddress: "",
              preferredMethodInvoiceSubmission: {
                isEmail: true,
                isMailToPhysicalAddress: false,
              },
              email: "",
              primaryShipToAddress: "",
              preferredShippingCompany: "",
              preferredShippingCompanyAccountNumber: "",
              additionalShipToAddress: "",
              isExemptFromSalesAndUseTax: "",
              statesExemptIn: "",
              attachments: []
            },
          referenceInformation: {
            bankReference: {
              bankName: "",
              bankContactName: "",
              bankDirectPhone: ""
            },
            tradeReference: {
                companyDetails: [
                  {
                    companyLegalName: "",
                    phone: "",
                    email: ""
                  },
                  {
                    companyLegalName: "",
                    phone: "",
                    email: ""
                  },
                  {
                    companyLegalName: "",
                    phone: "",
                    email: ""
                  }
                ],
              nameAuthorizedRepresentative: "",
              titleAuthorizedRepresentative: "",
              CompanyLegalName: "",
            }
          },
        },
        approved: "Pending",
        status: "Pending Response",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      salesDetails: {
        name: "",
        title: "",
        email: "",
        phone: ""
      }
    };
  },
  methods: {
    // CD (EV on 20210302): onClick function for UiAppButton
    async formSubmit() {
      try {
        // Prefill Credit Information
        if (this.wizard.step === 3){
          this.form.creditInformation.companyInformation.legalName = this.form.companyInformation.legalName
          this.form.creditInformation.companyInformation.address = this.form.companyInformation.legalNameAndAddressHeadquartersParentCompany
          this.form.creditInformation.companyInformation.nameAndTitleOfficersOrOwners = this.form.companyInformation.nameAndTitleOfficersOrOwners
          this.form.creditInformation.companyInformation.legalNameAndAddressHeadquartersParentCompany = this.form.companyInformation.legalNameAndAddressHeadquartersParentCompany
        }

        if (this.wizard.isBack) {
          this.wizard.step -= 1;
          this.wizard.isBack = false;
          return;
        }

        if (this.wizard.isNext) {
          this.wizard.step += 1;
          this.wizard.isNext = false;
          return;
        }

        // Upload Files
        const fd = new FormData();
        for (var i = 0; i < this.files.length; i++) {
          fd.append(this.files[i].name, this.files[i]);
        }
        const { data } = await this.$axios.post("api/v1/upload", fd)
        this.form.creditInformation.addressInformation.attachments = data

        // CD (JE on 20210621): get the latest technical question formId
        // DISTRIBUTORSHIP_APPLICATION_ID_PREFIX

        const {
          data: { counter }
        } = await this.$apollo.query({
          query: FETCH_ONE_COUNTER,
          variables: { query: { field: "Distributorship Application" } },
          fetchPolicy: "no-cache",
          nextFetchPolicy: "no-cache"
        });

        this.form.formId = `${
          process.env.DISTRIBUTORSHIP_APPLICATION_ID_PREFIX
        }-0000${counter.count + 1}`;

        const mutation = INSERT_ONE_DISTRIBUTORSHIP_APPLICATION;
        var variables = {
          data: this.form
        };

        // CD (JE on 20210511): save a local reference for email
        const {
          email,
          nameAndTitle
        } = this.form.companyInformation.principalContact;

        let response = await this.$apollo.mutate({ mutation, variables });
        await this.$apollo.mutate({
        mutation: UPDATE_ONE_COUNTER,
        variables: {
          query: {
            field: "Distributorship Application"
          },
          set: { count_inc: 1 }
        }
      });
        if (response.data.insertOneDistributorship_application) {
          const dist_app_id =
            response.data.insertOneDistributorship_application._id;
          // CD (JE on 20210511): send email notification to nsk and user
          const query = FETCH_FORM_NOTIFICATION;
          const variables = {
            query: {
              name: "Distributorship Application"
            }
          };
          response = await this.$apollo.query({ variables, query });
          if (response.data.form_notification) {
            const filename = `distributorship-application-${nameAndTitle}-${Date.now()}.pdf`;
            const uploaded = await this.$axios.$post(
              "/api/v1/support/send-email/distributorship-application",
              {
                filename,
                email,
                form_notification: response.data.form_notification,
                distributorship_application: this.form
              }
            );

            await this.$apollo.mutate({
              mutation: UPDATE_ONE_DISTRIBUTORSHIP_APPLICATION,
              variables: {
                query: { _id: dist_app_id },
                set: {
                  pdf: { filename: uploaded.Key, location: uploaded.Location }
                }
              }
            });

            this.notification = {
              show: true,
              title: "Sent!",
              content: "Your form has been submitted and you should receive an email confirmation shortly"
            };
            this.form = {
              companyInformation: {
                applicationDate: "",
                legalName: "",
                address: "",
                phone: "",
                nameAndTitleOfficersOrOwners: "",
                legalNameAndAddressHeadquartersParentCompany: "",
                geographicConcentration: "",
                primaryIndustriesServed: "",
                primaryProductLinesDistributed: "",
                distributorType: {
                  isManufacturing: "",
                  isWoodworking: "",
                  isJewelry: "",
                  isMachineTools: ""
                },
                principalContact: {
                  nameAndTitle: "",
                  phone: "",
                  email: ""
                }
              },
              salesInformation: {
                crm: "",
                trackSalesOpportunites: "",
                showValue: "",
                trackSuccessStories: "",
                annualSalesCommitment: "",
                percentageSalesMetalworking: "",
                costSavingsTracking: false,
                jointSalesCalls: false,
                jointMarketingSuccessStories: false,
              },
              salesRepresentation: {
                quantityOutsideSales: "",
                quantityInsideSales: "",
                salesDetails: []
              },
              creditInformation: {
                companyInformation: {
                    legalName: "",
                    address: "",
                    website: "",
                    apContact: {
                        name: "",
                        phone: "",
                        email: ""
                      },
                    nameAndTitleOfficersOrOwners: "",
                    legalNameAndAddressHeadquartersParentCompany: "",
                    creditLineRequested: "",
                    amountRequested: "",
                    isExistingCustomer: "",
                    federalId: "",
                    dunsId: "",
                    yearsInBusiness: "",
                    descriptionOfBusiness: "",
                    companyType: {
                      isCorporation: "",
                      isLLC: "",
                      isPartnership: "",
                      isSoleProprietorship: "",
                      isNonProfit: "",
                      isPrivatelyHeld: "",
                      isPubliclyTraded: "",
                      isOther: ""
                    },
                    ifOther: ""
                  },
                addressInformation: {
                    invoiceBillingAddress: "",
                    preferredMethodInvoiceSubmission: {
                      isEmail: true,
                      isMailToPhysicalAddress: false,
                    },                    
                    email: "",
                    primaryShipToAddress: "",
                    preferredShippingCompany: "",
                    preferredShippingCompanyAccountNumber: "",
                    additionalShipToAddress: "",
                    isExemptFromSalesAndUseTax: "",
                    statesExemptIn: "",
                    attachments: []
                  },
                referenceInformation: {
                  bankReference: {
                    bankName: "",
                    bankContactName: "",
                    bankDirectPhone: ""
                  },
                  tradeReference: {
                      companyDetails: [
                        {
                          companyLegalName: "",
                          phone: "",
                          email: ""
                        },
                        {
                          companyLegalName: "",
                          phone: "",
                          email: ""
                        },
                        {
                          companyLegalName: "",
                          phone: "",
                          email: ""
                        }
                      ],
                    nameAuthorizedRepresentative: "",
                    titleAuthorizedRepresentative: "",
                    CompanyLegalName: "",
                    date: ""
                  }
                },
              },
              approved: "Pending",
              status: "Pending Response",
              createdAt: new Date(),
              updatedAt: new Date()
            };
            this.wizard.step = 1;
          }
        }
      } catch (err) {
        this.notification = {
          show: true,
          title: "Error",
          content: err.message || "Internal Server Error"
        };
      }
    },
    addSalesDetails() {
      // CD (JE on 20210508): try to check if atleast 1 field is filled
      if (Object.values(this.salesDetails).filter(Boolean).length === 0) return;
      this.form.salesRepresentation.salesDetails.push(this.salesDetails);
      this.salesDetails = {
        name: "",
        title: "",
        email: "",
        phone: ""
      };
    },
    removeSalesDetails(index) {
      this.$delete(this.form.salesRepresentation.salesDetails, index);
    },
    addTradeReference(){
      this.form.creditInformation.referenceInformation.tradeReference.companyDetails.push({
        companyLegalName: "",
        phone: "",
        email: ""
      })
    },
    deleteTradeReference(index){
      this.form.creditInformation.referenceInformation.tradeReference.companyDetails.splice(index, 1)
    },
    changeFiles(e){
      this.files = e.target.files
    },
  },
  filters: {
    // CD (JE on 20210508): flatten selected distributor types
    distributorType(value) {
      const types = [
        "Manufacturing",
        "Woodworking",
        "Jewelry",
        "Machine Tools"
      ];
      return Object.values(value)
        .map((selected, i) => (selected ? types[i] : false))
        .filter(Boolean)
        .join(", ");
    },
    formatNumber(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(number)
    },
    yesOrNo(boolean){
      return boolean ? 'Yes' : 'No'
    }
  },
  computed: {
    filenames(){
      if(!this.files.length) return
      const filenames = []
      for (var i = 0; i < this.files.length; i++) {
          filenames.push(this.files[i].name);
      }
      return filenames.join(", ")
    }
  },
};
</script>
