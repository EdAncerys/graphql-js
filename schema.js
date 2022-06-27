const { gql } = require('apollo-server');

// --------------------------------------------------------------------------------
// 📌  Graph data schema
// Scaler types and resolvers are defined in the schema.js file
// Scaler types: String, Int, Float, Boolean
// --------------------------------------------------------------------------------

exports.typeDefs = gql`
  # Define your scalar types here
  type Query {
    hello: String! # ! means that this is a required field
    stringArray: [String!]!
    numberOfRows: Int
    float: Float
    isFalse: Boolean

    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  #  Define your mutations here
  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
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
    onSale: Boolean!
    avgRating: Int!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

  # Inputs
  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID!
  }
`;
