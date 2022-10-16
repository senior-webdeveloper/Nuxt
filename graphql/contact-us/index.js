import gql from "graphql-tag";

export const INSERT_ONE_CONTACT = gql`
  mutation($data: ContactInsertInput!) {
    insertOneContact(data: $data) {
      _id
    }
  }
`;

export const FETCH_ALL_CONTACT = gql`
  query {
    contacts: contacts(limit: 10000000) {
      _id
      firstName
      lastName
      email
      phone
      company
      status
      message
      createdAt
      updatedAt
      updatedBy
    }
  }
`;

export const UPDATE_ONE_CONTACT = gql`
  mutation($query: ContactQueryInput, $set: ContactUpdateInput!) {
    updatedContacts: updateOneContact(query: $query, set: $set) {
        _id
        firstName
        lastName
        email
        phone
        company
        status
        message
        createdAt
        updatedAt
        updatedBy
    }
  }
`;

export const DELETE_ONE_CONTACT = gql`
  mutation($query: ContactQueryInput!) {
    deleteOneContact(query: $query) {
      _id
    }
  }
`;

export const FETCH_ONE_CONTACT = gql`
  query($query: ContactQueryInput!) {
    contact(query: $query) {
        _id
        firstName
        lastName
        email
        phone
        company
        status
        message
        createdAt
        updatedAt
        updatedBy
    }
  }
`;
