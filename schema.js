const { gql } = require('apollo-server');

// --------------------------------------------------------------------------------
// 📌  Graph data schema
// --------------------------------------------------------------------------------

exports.typeDefs = gql`
  # Define your scalar types here
  type Query {
    hello: String! # ! means that this is a required field
    stringArray: [String!]!
    numberOfRows: Int
    float: Float
    isFalse: Boolean

    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  # Define your schema here
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    inStock: Boolean!
    image: String!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;
