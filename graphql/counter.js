import gql from 'graphql-tag'

export const FETCH_ONE_COUNTER = gql`
  query FetchOneCounter($query: CounterQueryInput!) {
    counter(query: $query) {
      field
      count
    }
  }
`

export const UPDATE_ONE_COUNTER = gql`
  mutation UpdateOneCounter($query: CounterQueryInput, $set: CounterUpdateInput!) {
    updatedCounter: updateOneCounter(query: $query, set: $set) {
      _id
    }
  }
`
