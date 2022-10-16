import gql from "graphql-tag";

export const INSERT_ONE_AD = gql`
  mutation($data: AdInsertInput!) {
    insertedAd: insertOneAd(data: $data) {
      _id
    }
  }
`;

export const FETCH_ALL_AD = gql`
  query {
    ads(limit: 10000000, sortBy: CREATEDAT_DESC) {
      _id
      title
      description
      image
      url
      isActive {
        startDate
        endDate
      }
      createdAt
      updatedAt
      slug
      tags {
        _id
        title
        slug
      }
    }
  }
`;

export const UPDATE_ONE_AD = gql`
  mutation($query: AdQueryInput, $set: AdUpdateInput!) {
    updatedAd: updateOneAd(query: $query, set: $set) {
      _id
      updatedAt
      tags {
        _id
        title
        slug
      }
    }
  }
`;

export const DELETE_ONE_AD = gql`
  mutation($query: AdQueryInput!) {
    deletedAd: deleteOneAd(query: $query) {
      _id
    }
  }
`;

export const FETCH_ONE_AD = gql`
  query($query: AdQueryInput!) {
    ad(query: $query) {
      _id
      title
      description
      image
      url
      isActive {
        startDate
        endDate
      }
      createdAt
      updatedAt
      slug
      tags {
        _id
        title
        slug
      }
    }
  }
`;
