import gql from "graphql-tag";

const INSERT_ONE_WARRANTY_REGISTRATION = gql`
  mutation($data: Warranty_registrationInsertInput!) {
    insertOneWarranty_registration(data: $data) {
      _id
    }
  }
`;

const FETCH_FORM_NOTIFICATION = gql`
  query($query: Form_notificationQueryInput) {
    form_notification(query: $query) {
      name
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

export const UPDATE_ONE_WARRANTY_REGISTRATION = gql`
  mutation(
    $query: Warranty_registrationQueryInput
    $set: Warranty_registrationUpdateInput!
  ) {
    updateOneWarranty_registration(query: $query, set: $set) {
      _id
    }
  }
`

export { INSERT_ONE_WARRANTY_REGISTRATION, FETCH_FORM_NOTIFICATION };
