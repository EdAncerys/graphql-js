const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');

// --------------------------------------------------------------------------------
// 📌  Init Apollo Server
// Scaler types and resolvers are defined in the schema.js file
// --------------------------------------------------------------------------------

// Scaler types: String, Int, Float, Boolean

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
