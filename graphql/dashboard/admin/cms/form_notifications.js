import gql from "graphql-tag";

const FETCH_FORM_NOTIFICATIONS = gql`
  {
    form_notifications {
      _id
      name
      toNsk {
        bcc {
          text
          tiClasses
        }
        cc {
          text
          tiClasses
        }
        emailContent {
          body
          subject
        }
        from
        to
      }
      toUser {
        bcc {
          text
          tiClasses
        }
        cc {
          text
          tiClasses
        }
        emailContent {
          body
          subject
        }
        from
      }
      createdBy
      updatedBy
    }
  }
`;

const UPDATE_ONE_FORM_NOTIFICATION = gql`
  mutation(
    $query: Form_notificationQueryInput
    $set: Form_notificationUpdateInput!
  ) {
    updateOneForm_notification(query: $query, set: $set) {
      _id
    }
  }
`;
export { FETCH_FORM_NOTIFICATIONS, UPDATE_ONE_FORM_NOTIFICATION };
