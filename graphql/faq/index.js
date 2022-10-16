import gql from "graphql-tag";

const FETCH_FAQS = gql`
  query($query: FaqQueryInput) {
    faqs(query: $query) {
      _id
      answer
      question
      tags {
        title
        _id
        slug
      }
    }
  }
`;

export { FETCH_FAQS };
