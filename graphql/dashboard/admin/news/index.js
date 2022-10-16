import gql from "graphql-tag";

export const INSERT_ONE_NEWS = gql`
  mutation($data: NewsInsertInput!) {
    insertOneNews(data: $data) {
      _id
    }
  }
`;

export const FETCH_ALL_NEWS = gql`
  query {
    news: newss(limit: 10000000, sortBy: CREATEDAT_DESC) {
      _id
      headline
      datePublished
      author
      preview
      articleBody
      image
      url
      status
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

export const UPDATE_ONE_NEWS = gql`
  mutation($query: NewsQueryInput, $set: NewsUpdateInput!) {
    updatedNews: updateOneNews(query: $query, set: $set) {
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

export const DELETE_ONE_NEWS = gql`
  mutation($query: NewsQueryInput!) {
    deleteOneNews(query: $query) {
      _id
    }
  }
`;

export const FETCH_ONE_NEWS = gql`
  query($query: NewsQueryInput!) {
    news(query: $query) {
      _id
      headline
      datePublished
      author
      preview
      articleBody
      image
      url
      status
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
