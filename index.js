const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { products, categories } = require('./data');

// --------------------------------------------------------------------------------
// 📌  Init Apollo Server
// Scaler types and resolvers are defined in the schema.js file
// --------------------------------------------------------------------------------

// Scaler types: String, Int, Float, Boolean

const getSingleProduct = (parent, args, context) => {
  const { id } = args;
  const product = products.find((product) => product.id === id);

  if (!product) return null;
  return product;
};

const getSingleCategory = (parent, args, context) => {
  const { id } = args;
  const category = categories.find((category) => category.id === id);

  if (!category) return null;
  return category;
};

const getProductsInCategory = (parent, args) => {
  const { id } = parent;
  return products.filter((product) => product.categoryId === id);
};

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    numberOfRows: () => 100,
    float: () => 1.23456789,
    isFalse: () => false,
    stringArray: () => ['a', 'b', 'c'],
    products: () => products,
    product: (parent, args, context) => getSingleProduct(parent, args, context),
    categories: () => categories,
    category: (parent, args, context) =>
      getSingleCategory(parent, args, context),
  },
  Category: {
    products: (parent, args) => getProductsInCategory(parent, args),
  },
  Product: {
    category: (parent, args) => {
      const { categoryId } = parent;
      return categories.find((category) => category.id === categoryId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
