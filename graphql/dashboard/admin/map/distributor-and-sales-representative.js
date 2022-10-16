import gql from 'graphql-tag'

export const FETCH_DISTRIBUTOR_AND_SALES_REP = gql`
  query($query: Distributors_and_sales_representativeQueryInput) {
    distributors_and_sales_representatives(query: $query, limit:100000000, sortBy:CREATEDAT_DESC) {
      _id
      name
      company
      category
      categoryType
      address {
        streetAddress
        addressRegion
        addressLocality
        country
        postalCode
      }
      _geoloc {
        lat
        lng
      }
      status
      email
      telephone
      faxNumber
      territoryTitle
      territoryState
      url
      isNationalDistributor
      isTopSpeed
      createdAt
      updatedAt
      createdBy
      updatedBy
    }
  }
`

export const INSERT_ONE_DISTRIBUTOR_AND_SALES_REP = gql`
  mutation($data: Distributors_and_sales_representativeInsertInput!){
    mutate: insertOneDistributors_and_sales_representative(data: $data) {
      _id
    }
  }
`


export const UPDATE_ONE_DISTRIBUTOR_AND_SALES_REP = gql`
  mutation(
    $query: Distributors_and_sales_representativeQueryInput,
    $data: Distributors_and_sales_representativeUpdateInput!
  ){
    mutate: updateOneDistributors_and_sales_representative(query: $query, set: $data) {
      _id
    }
  }
`

export const DELETE_ONE_DISTRIBUTOR_AND_SALES_REP = gql`
 mutation( $query: Distributors_and_sales_representativeQueryInput! ){
    mutate: deleteOneDistributors_and_sales_representative(query: $query) {
      _id
    }
  }
`
