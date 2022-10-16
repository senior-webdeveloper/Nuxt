const graphql_url = `https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/${process.env.REALM_APP_ID}/graphql`;

// export default (context) => {
//   return {
//     link: '',
//     httpEndpoint: graphql_url,
//     inMemoryCacheOptions: {
//       addTypename: false,
//     },
//   };
// };


import getErrorLink from './geterrorlink';


export default (ctx) => {
  const refreshHandlers = {
    AUTH_ACCESS_TIMEOUT () {
      return ctx.app.$auth.strategy.refresh()
    }
  }
  const errorHandlers = {
    AUTH_REFRESH_TIMEOUT () {
      ctx.app.$auth.strategy.logout('refresh token expired')
    },
    AUTH_FAILED () {
      ctx.app.$auth.strategy.logout('no access / refresh token')
    },
    UNAUTHORIZED () {
      ctx.app.$snotify.warning('You\'re not authorized to do that')
    }
  }
  function getAuth () {
    const cookie = ctx.app.$cookiz.get('apollo-token')
    return `Bearer ${cookie}`
  }

  const link = getErrorLink({
    ctx,
    getAuth,
    refreshHandlers,
    errorHandlers
  })

  return {
    link,
    defaultHttpLink: true,
    httpEndpoint: graphql_url,
    inMemoryCacheOptions: {
      addTypename: false,
    },
    // getAuth,
    apollo: {
      defaultOptions: {
        query: {
          errorPolicy: 'all'
        }
      }
    }
  }
}

