import gql from "graphql-tag";

const FETCH_FAQS = gql`
  query($query: FaqQueryInput) {
    faqs(query: $query) {
      _id
      answer
      question
      tags {
        _id
        title
        slug
      }
    }
  }
`;

const UPDATE_ONE_FAQ = gql`
  mutation($query: FaqQueryInput, $set: FaqUpdateInput!) {
    updateOneFaq(query: $query, set: $set) {
      _id
      tags {
        _id
        title
        slug
      }
    }
  }
`;

const INSERT_ONE_FAQ = gql`
  mutation($data: FaqInsertInput!) {
    insertOneFaq(data: $data) {
      _id
      tags {
        _id
        title
        slug
      }
    }
  }
`;

const DELETE_ONE_FAQ = gql`
  mutation($query: FaqQueryInput!) {
    deleteOneFaq(query: $query) {
      _id
    }
  }
`

export { FETCH_FAQS, UPDATE_ONE_FAQ, INSERT_ONE_FAQ, DELETE_ONE_FAQ };
