import gql from 'graphql-tag'

export const INSERT_ONE_REPAIR_RETURN = gql`
  mutation($data: Repair_returnInsertInput!) {
    insertOneRepair_return(data: $data) {
      _id
    }
  }
`

export const FETCH_FORM_NOTIFICATION = gql`
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
