import gql from "graphql-tag";

const INSERT_ONE_TECHNICAL_QUESTION = gql`
  mutation($data: Technical_questionInsertInput!) {
    insertOneTechnical_question(data: $data) {
      _id
      application
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

export const FETCH_LATEST_TECHNICAL_QUESTION_FORMID = gql`
  query {
    latestTechnicalQuestion: technical_questions(
      limit: 1
      sortBy: CREATEDAT_DESC
    ) {
      formId
    }
  }
`;

export { INSERT_ONE_TECHNICAL_QUESTION, FETCH_FORM_NOTIFICATION };
