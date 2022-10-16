import gql from "graphql-tag";

export const INSERT_ONE_EVENT = gql`
  mutation($data: EventInsertInput!) {
    insertedEvent: insertOneEvent(data: $data) {
      _id
    }
  }
`;

export const FETCH_ALL_EVENT = gql`
  query {
    events(limit: 10000000, sortBy: CREATEDAT_DESC) {
      _id
      name
      startDate
      endDate
      description
      location
      image
      isActive {
        startDate
        endDate
      }
      createdAt
      updatedAt
      createdBy
      updatedBy
      slug
      tags {
        _id
        title
        slug
      }
    }
  }
`;

export const UPDATE_ONE_EVENT = gql`
  mutation($query: EventQueryInput, $set: EventUpdateInput!) {
    updatedEvent: updateOneEvent(query: $query, set: $set) {
      _id
      updatedAt
      updatedBy
      tags {
        _id
        title
        slug
      }
    }
  }
`;

export const DELETE_ONE_EVENT = gql`
  mutation($query: EventQueryInput!) {
    deletedEvent: deleteOneEvent(query: $query) {
      _id
    }
  }
`;

export const FETCH_ONE_EVENT = gql`
  query($query: EventQueryInput!) {
    event(query: $query) {
      _id
      name
      startDate
      endDate
      description
      location
      image
      isActive {
        startDate
        endDate
      }
      createdAt
      updatedAt
      createdBy
      updatedBy
      slug
      tags {
        _id
        title
        slug
      }
    }
  }
`;
