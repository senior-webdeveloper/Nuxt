import gql from "graphql-tag";

const FETCH_WARRANTY_REGISTRATIONS = gql`
  query($query: Warranty_registrationQueryInput) {
    warranty_registrations(query: $query, limit:100000000, sortBy:CREATEDAT_DESC) {
      _id
      formId
      company
      email
      updatedBy
      primaryIndustriesServed
      mailingAddress {
        city
        country
        state
        street
        zip
      }
      name
      phone
      productDetails {
        distributorPurchaseForm
        modelNumber
        productDescription
        serialNumber
        orderDate
      }
      title
      pdf {
        filename
        location
      }
      createdAt
      updatedAt
    }
  }
`;

const DELETE_ONE_WARRANTY_REGISTRATION = gql`
  mutation($query: Warranty_registrationQueryInput!) {
    deleteOneWarranty_registration(query: $query) {
      _id
    }
  }
`;

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

export { FETCH_WARRANTY_REGISTRATIONS, DELETE_ONE_WARRANTY_REGISTRATION, FETCH_FORM_NOTIFICATION };
