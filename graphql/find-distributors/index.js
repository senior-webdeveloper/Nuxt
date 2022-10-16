import gql from "graphql-tag";

export const FETCH_DISTRIBUTOR_SALES_REP_MAP = gql`
  query(
    $query: Distributors_and_sales_representativeQueryInput,
  ) {
    distributors_and_sales_representatives(query: $query, limit: 100000) {
      _id
      company
      categoryType
      isNationalDistributor
      isTopSpeed
      address {
        addressLocality
        addressRegion
        country
        postalCode
        streetAddress
      }
      category
      name
      url
      telephone
      email
      faxNumber
      _geoloc {
        lat
        lng 
      }
    }
  } 
`;

export const FETCH_PAGINATED_DISTRIBUTORS = gql`
query GetPaginatedDistributors($PaginatedDistributorsInput: PaginatedDistributorsInput!){
  paginatedDistributors(input: $PaginatedDistributorsInput) {
    company
  }
}
`;
