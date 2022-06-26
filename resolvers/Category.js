const getProductsInCategory = ({ id }, args, { products }) => {
  return products.filter((product) => product.categoryId === id);
};

exports.Category = {
  products: (parent, args, context) =>
    getProductsInCategory(parent, args, context),
};
