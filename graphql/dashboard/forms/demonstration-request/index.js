import gql from "graphql-tag";

const INSERT_ONE_DEMONSTRATION_REQUEST = gql`
  mutation($data: Demonstration_requestInsertInput!) {
    insertOneDemonstration_request(data: $data) {
      _id
    }
  }
`;

const FETCH_FORM_NOTIFICATION = gql`
  query($query: Form_notificationQueryInput) {
    form_notification(query: $query) {
      name
      createdBy
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

export { INSERT_ONE_DEMONSTRATION_REQUEST, FETCH_FORM_NOTIFICATION };
