<template>
  <div>
    <UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="deleteDistributorshipApplication"
      title="Are you sure you want to delete this item?"
      content="Items deleted cannot be recovered."
    />

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Distributorship Application Form</h1>
                <p>#{{distributorship_application.formId}}</p>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <UiAppBadge
                  :className="statusColor(distributorship_application.status)"
                  :label="distributorship_application.status"
                />
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="py-5">
                  <div class="mt-5">
                    <h3 id="company-details">Company Details</h3>
                  </div>
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company Legal Name and d/b/a (if applicable)
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.legalName }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company Address (principle place of business)
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.address }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company Phone Number
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.phone }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Principal Contact Name and Title
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.principalContact.nameAndTitle }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Principal Contact Phone Number
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.principalContact.phone }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Principal Contact Email
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.principalContact.email }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Name and Title of Officers Or Owners
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.nameAndTitleOfficersOrOwners }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Legal Name and Address of Headquarters or Parent Company (principal place of business) (if applicable)
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.legalNameAndAddressHeadquartersParentCompany }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Geographic Concentration
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.geographicConcentration }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Primary Industries Served
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.primaryIndustriesServed }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor Type
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.distributorType | distributorType }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Primary Product Lines Distributed
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.companyInformation.primaryProductLinesDistributed }}
                      </dd>
                    </div>

                    <div class="mt-5">
                      <h3 id="sales-information">Sales Information</h3>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        What CRM do you use?
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesInformation.crm }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        How do you track sales opportunities?
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesInformation.trackSalesOpportunites }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        How do you show value?
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesInformation.showValue }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        How do you track success stories?
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesInformation.trackSuccessStories }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        What is your annual sales commitment to NSK?
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesInformation.annualSalesCommitment }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        What percentage of sales is metalworking?
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesInformation.percentageSalesMetalworking }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Do you require cost savings tracking of your salespeople?
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesInformation.costSavingsTracking | yesOrNo}}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Will NSK be allowed to make joint sales calls with your personnel?
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesInformation.jointSalesCalls | yesOrNo}}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Are you interested in joint marketing success stories?
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesInformation.jointMarketingSuccessStories | yesOrNo }}
                      </dd>
                    </div>
                    <div class="mt-5">
                      <h3 id="sales_repo">Sales Representation</h3>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Quantity Inside Sales
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesRepresentation.quantityInsideSales }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Quantity Outside Sales
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.salesRepresentation.quantityOutsideSales }}
                      </dd>
                    </div>
                    <div class="mt-5">
                      <h3 id="product-details">Salesperson Contact Information</h3>
                    </div>
                    <div class="space-y-8 sm:space-y-0">
                      <div class="overflow-x-auto">
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
                          <tr v-for="(salesDetail, i) in distributorship_application.salesRepresentation.salesDetails" :key="`sales-details-${i}`" class="trClass">
                            <td class="tdClass">{{salesDetail.name}}</td>
                            <td class="tdClass">{{salesDetail.title}}</td>
                            <td class="tdClass">{{salesDetail.email}}</td>
                            <td class="tdClass">{{salesDetail.phone}}</td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </div>

                    <div class="mt-5">
                      <h3 id="credit-information">Credit Information</h3>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company Legal Name and d/b/a
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.legalName }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company Address
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.address }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company Website
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.website }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        AP Contact Name
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.apContact.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        AP Contact Name
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.apContact.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        AP Contact Phone
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.apContact.phone }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        AP Contact Email
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.apContact.email }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Names and Titles of Officers and Owners
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.nameAndTitleOfficersOrOwners }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Legal Name and Address of Headquarters or Parent Company
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.legalNameAndAddressHeadquartersParentCompany }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Credit Line Requested
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.creditLineRequested }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Amount Requested
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.amountRequested }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Existing Customer
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.isExistingCustomer }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Federal ID
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.federalId }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        DUNS ID
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.dunsId }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Years In Business
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.yearsInBusiness }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Description of Business
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.companyInformation.descriptionOfBusiness }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Type of Company
                      </dt>
                      <dd class="details-dd">
                        {{ 
                          (distributorship_application.creditInformation.companyInformation.companyType.isCorporation ? 'Corporation, ' : '') +
                          (distributorship_application.creditInformation.companyInformation.companyType.isLLC ? 'LLC, ' : '') +
                          (distributorship_application.creditInformation.companyInformation.companyType.isPartnership ? 'Partnership, ' : '') +
                          (distributorship_application.creditInformation.companyInformation.companyType.isSoleProprietorship ? 'Sole Proprietorship, ' : '') +
                          (distributorship_application.creditInformation.companyInformation.companyType.isNonProfit ? 'Non Profit, ' : '') +
                          (distributorship_application.creditInformation.companyInformation.companyType.isPrivatelyHeld ? 'Privately Held, ' : '') +
                          (distributorship_application.creditInformation.companyInformation.companyType.isPubliclyTraded ? 'Publicly Traded, ' : '') +
                          (distributorship_application.creditInformation.companyInformation.companyType.isOther ? distributorship_application.creditInformation.companyInformation.ifOther : '')
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Invoice Biling Address
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.invoiceBillingAddress }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Preferred Method of Invoice Submission
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isEmail ? 'Email' : '' }}
                        {{ distributorship_application.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isEmail && distributorship_application.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isMailToPhysicalAddress ? 'and' : ''}}
                        {{ distributorship_application.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isMailToPhysicalAddress ? 'Mail To Phisical Address' : '' }}                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Email
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.email }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Primary Ship to Address
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.email }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Preferred Shipping Company
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.preferredShippingCompany }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Preferred Shipping Company Account Number
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.preferredShippingCompanyAccountNumber }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Additional Ship to Addresses
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.additionalShipToAddress }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Exempt from Sales and Use Tax
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.isExemptFromSalesAndUseTax }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        States Exempt In
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.statesExemptIn }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Attachments
                      </dt>
                      <dd class="details-dd">
                        <div v-for="(attachment, i) in distributorship_application.creditInformation.addressInformation.attachments" :key="i">
                          <a :href="attachment" target="_blank">{{attachment | fileName}}  <UiIconCloudDownload class="inline-block"/></a>
                        </div>
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        States Exempt In
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.addressInformation.statesExemptIn }}
                      </dd>
                    </div>
                    <h3 id="sales-information">Reference Information</h3>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Bank Name
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.referenceInformation.bankReference.bankName }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Bank Contact Name
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.referenceInformation.bankReference.bankContactName }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Bank Direct Phone
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.referenceInformation.bankReference.bankDirectPhone }}
                      </dd>
                    </div>
                    <div class="space-y-8 sm:space-y-0">
                      <div class="overflow-x-auto">
                      <table class="table min-w-full mt-1 border border-b border-gray-200 divide-y divide-blueGray-200 sm:mt-4">
                        <thead>
                          <tr class="trClass">
                            <th scope="col" class="thClass">Company Legal Name</th>
                            <th scope="col" class="thClass">Phone</th>
                            <th scope="col" class="thClass">Email</th> 
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(reference, i) in distributorship_application.creditInformation.referenceInformation.tradeReference.companyDetails" :key="i" class="trClass">
                            <td class="tdClass">{{reference.companyLegalName}}</td>
                            <td class="tdClass">{{reference.phone}}</td>
                            <td class="tdClass">{{reference.email}}</td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Print Name and Title
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.referenceInformation.tradeReference.nameAuthorizedRepresentative }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Title of Authorized Representative
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.referenceInformation.tradeReference.titleAuthorizedRepresentative}}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company Legal Name
                      </dt>
                      <dd class="details-dd">
                        {{ distributorship_application.creditInformation.referenceInformation.tradeReference.CompanyLegalName}}
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
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{distributorship_application.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{distributorship_application.createdAt | formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{distributorship_application.updatedAt | formatDate}}</time></span>
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
  UPDATE_ONE_DISTRIBUTORSHIP_APPLICATION,
  DELETE_ONE_DISTRIBUTORSHIP_APPLICATION,
  FETCH_FORM_NOTIFICATION
} from "./../../../graphql/dashboard/distributorship-application/distributorship-application";
export default {
  computed: mapGetters({
    /* CD (EV on 20210329): get the selected gtop (to be updated or deleted)*/
    distributorship_application:
      "dashboard/distributorship-application/distributorshipApplication"
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
      // CD (JE on 20150505): approved options
      approveOptions: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
        { label: "Pending", value: "Pending" }
      ]
    };
  },
  created() {
    this.form.status = this.distributorship_application.status;
    this.form.approved = this.distributorship_application.approved
  },

  methods: {
    async formSubmit() {
      this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      /* CD (EV on 20210329): Get the updated status*/
      // const status = this.selectedStatus;
      /* CD (EV on 20210329): Get _id of the gtop*/
      const _id = this.distributorship_application._id;
      // CD (JE on 20210505): set updateAt on current timestamp
      this.form.updatedAt = new Date();
      /* CD (EV on 20210329): Declare variable for query and set (query what data to update [_id] ) (set what field to update [status])*/
      const variables = {
        /* CD (EV on 20210329): _id of gtop to be updated*/
        query: {
          _id: _id
        },
        /* CD (EV on 20210329): field of gtop want to update*/
        set: this.form
      };

      /* CD (EV on 20210329): Declare mutation*/
      const mutation = UPDATE_ONE_DISTRIBUTORSHIP_APPLICATION;
      /* CD (EV on 20210329): Update the gtop*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210329): If update is success*/
      if (mutatate.data.updateOneDistributorship_application) {
        /* CD (JE on 20210511): Declare query variable*/
        const query = FETCH_FORM_NOTIFICATION;
        /* CD (JE on 20210511): Declare variable for query notification name is Distributorship Application*/
        const variables = {
          query: {
            name: "Distributorship Application"
          }
        };

        /* CD (JE on 20210511): Fetch form notification*/
        const form_notification = await this.$apollo.query({
          query,
          variables
        });

        // CD (JE on 20210511): send email notification for status if change
        if (
          this.distributorship_application.status !==
            mutatate.data.updateOneDistributorship_application.status ||
          this.distributorship_application.approved !==
            mutatate.data.updateOneDistributorship_application.approved
        ) {
          await this.$axios.$post(
            "/api/v1/dashboard/send-email/distributorship-application",
            {
              initial_status: this.distributorship_application.status,
              distributorship_application: {
                ...this.distributorship_application,
                ...mutatate.data.updateOneDistributorship_application
              },
              form_notification: form_notification.data.form_notification,
              email: this.distributorship_application.companyInformation.principalContact.email
            }
          );
        }

        /* CD (EV on 20210329): update the selected gtop*/
        this.$store.dispatch(
          "dashboard/distributorship-application/updateDistributorshipApplication",
          mutatate.data.updateOneDistributorship_application
        );
        /* CD (EV on 20210329): close the slider*/
        this.$store.dispatch(
          "dashboard/distributorship-application/hideSlider"
        );
        /* CD (EV on 20210329): Show notification of success update*/
        this.$store.dispatch(
          "dashboard/distributorship-application/showNotificationUpdate",
          {
            type: "success",
            title: "Update Successful",
            content: "",
            show: true
          }
        );
      }
    },
    async deleteDistributorshipApplication() {
      /* CD (EV on 20210329): Get _id of the gtop*/
      const _id = this.distributorship_application._id;
      const variables = {
        /* CD (EV on 20210329): _id of gtop to be deleted*/
        query: {
          _id: _id
        }
      };
      /* CD (EV on 20210329): Declare mutation*/
      const mutation = DELETE_ONE_DISTRIBUTORSHIP_APPLICATION;
      /* CD (EV on 20210329): Delete the gtop*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210329): If delete is success*/
      if (mutatate.data.deleteOneDistributorship_application) {
        /* CD (EV on 20210329): Remove the selected gtop from gtops (will also reflect on table)*/
        this.$store.dispatch(
          "dashboard/distributorship-application/deleteDistributorshipApplication"
        );
        /* CD (EV on 20210329): Hide slider*/
        this.$store.dispatch(
          "dashboard/distributorship-application/hideSlider"
        );
        /* CD (EV on 20210329): Show notification of success delete*/
        this.$store.dispatch(
          "dashboard/distributorship-application/showNotificationUpdate",
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
  filters: {
    // CD (JE on 20150505): date filters to format raw string date format
    formatDate(value) {
      return new Date(value).toLocaleString();
    },
    // CD (JE on 20210510): format distributor types
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
    yesOrNo(boolean){
      return boolean ? 'Yes' : 'No'
    }
  }
};
</script>
