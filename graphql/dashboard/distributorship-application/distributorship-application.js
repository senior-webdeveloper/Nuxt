import gql from 'graphql-tag'

export const FETCH_DISTRIBUTORSHIP_APPLICATIONS = gql`
  query($query: Distributorship_applicationQueryInput) {
    distributorship_applications(query: $query, limit:100000000, sortBy:CREATEDAT_DESC) {
      _id
      formId
      approved
      status
      createdAt
      updatedAt
      updatedBy
      pdf {
        filename
        location
      }
      companyInformation {
        address
        applicationDate
        distributorType {
          isJewelry
          isMachineTools
          isManufacturing
          isWoodworking
        }
        geographicConcentration
        legalName
        legalNameAndAddressHeadquartersParentCompany
        nameAndTitleOfficersOrOwners
        phone
        primaryIndustriesServed
        primaryProductLinesDistributed
        principalContact {
          email
          nameAndTitle
          phone
        }
      }
      salesInformation {
        annualSalesCommitment
        crm
        showValue
        trackSalesOpportunites
        trackSuccessStories
        percentageSalesMetalworking
        costSavingsTracking
        jointSalesCalls
        jointMarketingSuccessStories
      }
      salesRepresentation {
        quantityInsideSales
        quantityOutsideSales
        salesDetails {
          email
          name
          phone
          title
        }
      }
      creditInformation {
        companyInformation {
            legalName
            address
            website
            apContact {
                name
                phone
                email
              }
            nameAndTitleOfficersOrOwners
            legalNameAndAddressHeadquartersParentCompany
            creditLineRequested
            amountRequested
            isExistingCustomer
            federalId
            dunsId
            yearsInBusiness
            descriptionOfBusiness
            companyType {
              isCorporation
              isLLC
              isPartnership
              isSoleProprietorship
              isNonProfit
              isPrivatelyHeld
              isPubliclyTraded
              isOther
            }
            ifOther
          }
        addressInformation {
            invoiceBillingAddress
            preferredMethodInvoiceSubmission {
              isEmail
              isMailToPhysicalAddress
            }
            email
            primaryShipToAddress
            preferredShippingCompany
            preferredShippingCompanyAccountNumber
            additionalShipToAddress
            isExemptFromSalesAndUseTax
            statesExemptIn
            attachments
          },
        referenceInformation {
          bankReference {
            bankName
            bankContactName
            bankDirectPhone
          },
          tradeReference {
              companyDetails {
                companyLegalName
                phone
                email
              }
              nameAuthorizedRepresentative
              titleAuthorizedRepresentative
              CompanyLegalName
              date
          }
        },
      },
    }
  }
`



export const DELETE_ONE_DISTRIBUTORSHIP_APPLICATION = gql`
  mutation($query: Distributorship_applicationQueryInput!) {
    deleteOneDistributorship_application(query: $query) {
      _id
    }
  }
`;

export const UPDATE_ONE_DISTRIBUTORSHIP_APPLICATION = gql`
  mutation(
    $query: Distributorship_applicationQueryInput
    $set: Distributorship_applicationUpdateInput!
  ) {
    updateOneDistributorship_application(query: $query, set: $set) {
      status
      approved
      updatedAt
      updatedBy
    }
  }
`;

export const FETCH_FORM_NOTIFICATION = gql`
  query($query: Form_notificationQueryInput) {
    form_notification(query: $query) {
      name
      updatedBy
      toUser {
        bcc {
          text
        }
        cc {
          text
        }
        emailContent {
          body
          subject
        }
        from
      }
      toNsk {
        bcc {
          text
        }
        cc {
          text
        }
        emailContent {
          body
          subject
        }
        to
        from
      }
    }
  }
`
