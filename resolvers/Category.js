const { products } = require('../data');
// --------------------------------------------------------------------------------

const getProductsInCategory = (parent, args) => {
  const { id } = parent;
  return products.filter((product) => product.categoryId === id);
};

exports.Category = {
  products: (parent, args) => getProductsInCategory(parent, args),
};
