import gql from 'graphql-tag'

export const INSERT_ONE_RESOURCE = gql`
  mutation InsertOneResource($data: ResourceInsertInput!) {
    insertedResource: insertOneResource(data: $data) {
      _id
    }
  }
`

export const FETCH_ALL_RESOURCES = gql`
  query FetchAllResources($query: ResourceQueryInput) {
    resources(query: $query, limit:1000000, sortBy: CREATEDAT_ASC) {
      _id
      title
      category
      fileUpload
      description
      status
      fileURL
      createdAt
      updatedAt
      createdBy
      updatedBy
    }
  }
`

export const UPDATE_ONE_RESOURCE = gql`
  mutation UpdateOneResource($query: ResourceQueryInput!, $set: ResourceUpdateInput!) {
    updatedResource: updateOneResource(query: $query, set: $set) {
      _id
    }
  }
`

export const DELETE_ONE_RESOURCE = gql`
  mutation DeleteOneResource($query: ResourceQueryInput!) {
    deletedResource: deleteOneResource(query: $query) {
      _id
    }
  }
`
