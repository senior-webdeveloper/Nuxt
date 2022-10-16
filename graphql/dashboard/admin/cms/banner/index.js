import gql from "graphql-tag";

export const FETCH_ONE_BANNER = gql`
  query($query: BannerQueryInput!) {
    banners(query: $query) {
      _id
      text
      textColor
      bannerColor
      url
      status
      updatedAt
      updatedBy
    }
  }
`;

// export const FETCH_ALL_TAGS = gql`
//   query {
//     : tags(limit: 1) {
//       _id
//       text
//       textColor
//       bannerColor
//       url
//       status
//       updatedAt
//       updatedBy
//     }
//   }
// `;

export const UPDATE_ONE_BANNER = gql`
  mutation($query: BannerQueryInput, $set: BannerUpdateInput!) {
    updatedbanners: updateOneBanner(query: $query, set: $set) {
      _id
      text
      textColor
      bannerColor
      url
      status
      updatedAt
      updatedBy
    }
  }
`;
