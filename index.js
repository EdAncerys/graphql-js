const { ApolloServer } = require('apollo-server');
// --------------------------------------------------------------------------------
const { typeDefs } = require('./schema');
// --------------------------------------------------------------------------------
const { products, categories, reviews } = require('./data');
// --------------------------------------------------------------------------------
const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');

// --------------------------------------------------------------------------------
// 📌  Init Apollo Server
// --------------------------------------------------------------------------------

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
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
