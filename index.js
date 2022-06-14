const { ApolloServer, gql } = require('apollo-server');

// --------------------------------------------------------------------------------
// 📌  Init Apollo Server
// Scaler types and resolvers are defined in the schema.js file
// --------------------------------------------------------------------------------

// Scaler types: String, Int, Float, Boolean

const typeDefs = gql`
  type Query {
    hello: String! # ! means that this is a required field
    stringArray: [String!]!
    numberOfRows: Int
    float: Float
    isFalse: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    numberOfRows: () => 100,
    float: () => 1.23456789,
    isFalse: () => false,
    stringArray: () => ['a', 'b', 'c'],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
