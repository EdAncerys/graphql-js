const { ApolloServer } = require('apollo-server');
// --------------------------------------------------------------------------------
const { typeDefs } = require('./schema');
// --------------------------------------------------------------------------------
const { products, categories, reviews } = require('./data');
// --------------------------------------------------------------------------------
const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');
const { Mutation } = require('./resolvers/Mutation');

// --------------------------------------------------------------------------------
// 📌  Init Apollo Server
// --------------------------------------------------------------------------------

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Product, // Product resolvers
    Category, // Category resolvers
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
