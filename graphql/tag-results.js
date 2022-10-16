import gql from 'graphql-tag'

export const FETCH_ALL_TAGS = gql`
  query {
    tags: tags(limit: 10000000) {
      _id
      title
      slug
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_ALL_ADS = gql`
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

export const FETCH_ALL_VIDEOS = gql`
  query {
    videos: videos(limit: 10000000) {
      _id
      title
      description
      filename
      provider
      streamHls
      streamDash
      streamPreview
      streamThumbnail
      streamCustomThumbnail
      youtubeThumbnail
      videoEmbedId
      tags {
        _id
        title
        slug
      }
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_ALL_EVENTS = gql`
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
      slug
      tags {
        _id
        title
        slug
      }
    }
  }
`;

export const FETCH_ALL_FAQS = gql`
  query($query: FaqQueryInput) {
    faqs(query: $query) {
      _id
      answer
      question
      tags {
        _id
        title
        slug
      }
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
      slug
      tags {
        _id
        title
        slug
      }
    }
  }
`;