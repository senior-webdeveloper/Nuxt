import gql from "graphql-tag";

const INSERT_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM = gql`
  mutation($data: Guarantee_trial_offer_programInsertInput!) {
    insertOneGuarantee_trial_offer_program(data: $data) {
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

export { INSERT_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM, FETCH_FORM_NOTIFICATION }
