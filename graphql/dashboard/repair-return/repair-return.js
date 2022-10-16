import gql from 'graphql-tag'

export const FETCH_REPAIR_RETURNS = gql`
  query($query: Repair_returnQueryInput) {
    repair_returns(query: $query, limit:100000000, sortBy:CREATEDAT_DESC) {
      _id
      formId
      updatedBy
      name
      company
      email
      phone
      address {
        street
        city
        state
        zip
      }
      claimDetails {
        productModel
        serialNumber
        estimateWarranty
        issueDescription
      }
      optionsBeyondRepair {
        sendItemsBack
        destroyItems
      }
      authorizedDistributor {
        name
        branch
        cityStateZip
        distributorContactDetails {
          name
          email
          phone
        }
      }
      repairOrReturn
      status
      pdf {
        filename
        location
      }
      createdAt
      updatedAt
    }
  }
`

export const DELETE_ONE_REPAIR_RETURN = gql`
  mutation($query: Repair_returnQueryInput!) {
    deleteOneRepair_return(query: $query) {
      _id
    }
  }
`;

export const UPDATE_ONE_REPAIR_RETURN = gql`
  mutation(
    $query: Repair_returnQueryInput
    $set: Repair_returnUpdateInput!
  ) {
    updateOneRepair_return(query: $query, set: $set) {
      _id
      status
      repairOrReturn
      updatedAt
      updatedBy
    }
  }
`;

export
const FETCH_FORM_NOTIFICATION = gql`
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
`;
