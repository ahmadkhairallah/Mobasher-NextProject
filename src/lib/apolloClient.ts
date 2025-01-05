import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql.canopyapi.co/", // The base URL for the GraphQL API
    headers: {
      Authorization: `Bearer 618454fe-7a66-4cc3-bbe2-0d59196d99c4`, // API key for authentication
    },
  }),
   // Set up the in-memory cache for client-side caching of GraphQL queries
  cache: new InMemoryCache(),
});

export default client;
