const { ApolloServer, gql } = require('apollo-server');

// --------------------------------------------------------------------------------
// 📌  Init Apollo Server
// Scaler types and resolvers are defined in the schema.js file
// --------------------------------------------------------------------------------

// Scaler types: String, Int, Float, Boolean

const typeDefs = gql`
  # Define your scalar types here
  type Query {
    hello: String! # ! means that this is a required field
    stringArray: [String!]!
    numberOfRows: Int
    float: Float
    isFalse: Boolean

    product: [Product!]!
  }

  # Define your schema here
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    inStock: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    numberOfRows: () => 100,
    float: () => 1.23456789,
    isFalse: () => false,
    stringArray: () => ['a', 'b', 'c'],
    product: () => [
      {
        name: 'Product 1',
        description: 'Description 1',
        quantity: 1,
        price: 1.99,
        inStock: true,
      },
      {
        name: 'Product 2',
        description: 'Description 2',
        quantity: 2,
        price: 2.99,
        inStock: false,
      },
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
