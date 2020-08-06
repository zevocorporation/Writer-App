import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()
const link = createHttpLink({
   uri: 'http://localhost:4000/graphql',
   credentials: 'include',
   headers: {
      authorization: `Bearer ${
         JSON.parse(localStorage.getItem('token'))?.token
      }`,
   },
})

console.log(JSON.parse(localStorage.getItem('token'))?.token)

const Client = new ApolloClient({
   cache,
   link,
})

cache.writeData({
   data: {
      isLoggedIn: !!localStorage.getItem('token'),
      cartItems: [],
   },
})

export { Client }
