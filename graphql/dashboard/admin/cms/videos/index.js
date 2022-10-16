import gql from "graphql-tag";

export const INSERT_ONE_VIDEO = gql`
  mutation($data: VideoInsertInput!) {
    insertOneVideo(data: $data) {
      _id
      tags {
        _id
        title
        slug
      }
    }
  }
`;

export const FETCH_ALL_VIDEOS = gql`
  query {
    videos: videos(limit: 10000000) {
      _id
      title
      slug
      description
      uploadName
      filename
      provider
      streamHls
      streamDash
      streamPreview
      streamThumbnail
      streamCustomThumbnail
      youtubeThumbnail
      videoEmbedId
      thumbnail
      tags {
        _id
        title
        slug
      }
      createdAt
      updatedAt
      createdBy
      updatedBy
    }
  }
`;

export const UPDATE_ONE_VIDEOS = gql`
  mutation($query: VideoQueryInput, $set: VideoUpdateInput!) {
    updatedVideos: updateOneVideo(query: $query, set: $set) {
      _id
      title
      slug
      description
      uploadName
      filename
      provider
      streamHls
      streamDash
      streamPreview
      streamThumbnail
      streamCustomThumbnail
      youtubeThumbnail
      videoEmbedId
      thumbnail
      tags {
        _id
        title
        slug
      }
      updatedAt
      createdBy
      updatedBy
    }
  }
`;

export const DELETE_ONE_VIDEOS = gql`
  mutation($query: VideoQueryInput!) {
    deleteOneVideo(query: $query) {
      _id
    }
  }
`;

export const FETCH_ONE_VIDEOS = gql`
  query($query: VideoQueryInput!) {
    videos(query: $query) {
      _id
      title
      slug
      description
      provider
      filename
      uploadName
      streamHls
      streamDash
      streamPreview
      streamThumbnail
      streamCustomThumbnail
      youtubeThumbnail
      videoEmbedId
      thumbnail
      tags {
        _id
        title
        slug
      }
      createdAt
      updatedAt
      createdBy
      updatedBy
    }
  }
`;
