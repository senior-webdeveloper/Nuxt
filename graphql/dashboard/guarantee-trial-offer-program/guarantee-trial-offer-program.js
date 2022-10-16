import gql from 'graphql-tag'

// CD (JE on 20120504): dashboard gtop graphql mutations and queries

const UPDATE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM = gql`
  mutation(
    $query: Guarantee_trial_offer_programQueryInput
    $set: Guarantee_trial_offer_programUpdateInput!
  ) {
    updateOneGuarantee_trial_offer_program(query: $query, set: $set) {
      _id
      status
      approved
      updatedAt
      updatedBy
    }
  }
`;

const DELETE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM = gql`
  mutation($query: Guarantee_trial_offer_programQueryInput!) {
    deleteOneGuarantee_trial_offer_program(query: $query) {
      _id
    }
  }
`;

const FETCH_GUARANTEE_TRIAL_OFFER_PROGRAM = gql`
  query($query: Guarantee_trial_offer_programQueryInput) {
    guarantee_trial_offer_programs(query: $query, limit:100000000, sortBy:CREATEDAT_DESC) {
      _id
      formId
      createdAt
      createdBy
      updatedBy
      updatedAt
      distributor
      distributorDetails {
        date
        distributor
        email
        name
        title
      }
      endUser
      endUserDetails {
        address {
          cityStateZip
          street
        }
        date
        email
        endUser
        name
        phone
        title
      }
      guarantee
      initialDate
      status
      testDate
      updatedAt
      approved
      pdf {
        filename
        location
      }
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

export {
  UPDATE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM,
  DELETE_ONE_GUARANTEE_TRIAL_OFFER_PROGRAM,
  FETCH_GUARANTEE_TRIAL_OFFER_PROGRAM,
  FETCH_FORM_NOTIFICATION,
};
