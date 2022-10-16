import gql from "graphql-tag";
const FETCH_DEMONSTRATION_REQUESTS = gql`
  query($query: Demonstration_requestQueryInput) {
    demonstration_requests(query: $query, limit:100000000, sortBy:CREATEDAT_DESC) {
      _id
      cse
      handToolsOrSpindle
      formId
      createdAt
      createdBy
      updatedAt
      updatedBy
      cuttingTool
      pdf {
        filename
        location
      }
      csePdf {
        filename
        location
      }
      currentState {
        cutDepth
        cutLength
        feed
        spindleSpeed
      }
      date
      demonstrationDate
      distributorDetails {
        cityStateZip
        distributor
        email
        name
        street
        title
      }
      distributor
      email
      endUser
      endUserCompanyDetails {
        cityStateZip
        email
        endUserCompany
        name
        phone
        title
      }
      futureState {
        cutDepth
        cutLength
        feed
        spindleSpeed
      }
      material
      name
      nskSalesRep
      productDetails {
        catalogOrModel
        description
        quantity
      }
      shippingOption
      status
      successfulTest
      timeToClose
      title
      value
    }
  }
`;

const DELETE_ONE_DEMONSTRATION_REQUEST = gql`
  mutation($query: Demonstration_requestQueryInput!) {
    deleteOneDemonstration_request(query: $query) {
      _id
    }
  }
`;

const UPDATE_ONE_DEMONSTRATION_REQUEST = gql`
  mutation(
    $query: Demonstration_requestQueryInput
    $set: Demonstration_requestUpdateInput!
  ) {
    updateOneDemonstration_request(query: $query, set: $set) {
      status
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
  FETCH_DEMONSTRATION_REQUESTS,
  DELETE_ONE_DEMONSTRATION_REQUEST,
  UPDATE_ONE_DEMONSTRATION_REQUEST,
  FETCH_FORM_NOTIFICATION,
};
