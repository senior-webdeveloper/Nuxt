import gql from "graphql-tag";

export const INSERT_MANY_TAGS = gql`
  mutation($data: [TagInsertInput!]!) {
    insertManyTags(data: $data) {
      insertedIds
    }
  }
`;

export const FETCH_ALL_TAGS = gql`
  query {
    tags: tags(limit: 10000000) {
      _id
      title
      slug
      createdAt
      updatedAt
      createdBy
      updatedBy
    }
  }
`;

export const FETCH_ONE_TAGS = gql`
  query($query: tagQueryInput!) {
    tags(query: $query) {
      _id
      title
      slug
      createdAt
      updatedAt
      createdBy
      updatedBy
    }
  }
`;

export const UPDATE_ONE_TAGS = gql`
  mutation($query: TagQueryInput, $set: TagUpdateInput!) {
    updatedtags: updateOneTag(query: $query, set: $set) {
      _id
      title
      slug
      updatedAt
      updatedBy
    }
  }
`;

export const DELETE_ONE_TAGS = gql`
  mutation($query: TagQueryInput!) {
    deleteOneTag(query: $query) {
      _id
    }
  }
`;
