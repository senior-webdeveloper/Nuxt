import gql from "graphql-tag";

const UPDATE_ONE_TECHNICAL_QUESTION = gql`
  mutation(
    $query: Technical_questionQueryInput
    $set: Technical_questionUpdateInput!
  ) {
    updateOneTechnical_question(query: $query, set: $set) {
      application
      company
      email
      _id
      machineType
      name
      phone
      product
      question
      status
      title
      updatedBy
    }
  }
`;

const DELETE_ONE_TECHNICAL_QUESTION = gql`
  mutation($query: Technical_questionQueryInput!) {
    deleteOneTechnical_question(query: $query) {
      application
      company
      email
      _id
      machineType
      name
      phone
      product
      question
      status
      title
    }
  }
`;

const FETCH_TECHNICAL_QUESTIONS = gql`
  query($query: Technical_questionQueryInput) {
    technical_questions(query: $query, limit:100000000, sortBy:CREATEDAT_DESC) {
      formId
      application
      company
      email
      _id
      machineType
      name
      phone
      product
      question
      status
      title
      pdf {
        filename
        location
      }
      createdAt
      updatedAt
      updatedBy
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
  UPDATE_ONE_TECHNICAL_QUESTION,
  DELETE_ONE_TECHNICAL_QUESTION,
  FETCH_TECHNICAL_QUESTIONS,
  FETCH_FORM_NOTIFICATION,
};
