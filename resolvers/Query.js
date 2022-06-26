const { products, categories } = require('../data');
// --------------------------------------------------------------------------------

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

exports.Query = {
  hello: () => 'Hello world!',
  numberOfRows: () => 100,
  float: () => 1.23456789,
  isFalse: () => false,
  stringArray: () => ['a', 'b', 'c'],
  products: () => products,
  product: (parent, args, context) => getSingleProduct(parent, args, context),
  categories: () => categories,
  category: (parent, args, context) => getSingleCategory(parent, args, context),
};
