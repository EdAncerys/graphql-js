const getProductsInCategory = ({ id }, { filter }, { products }) => {
  const categoryProducts = products.filter(
    (product) => product.categoryId === id
  );
  let filteredProducts = categoryProducts;
  if (filter && filter.onSale) {
    filteredProducts = products.filter((product) => {
      return product.onSale;
    });
  }

  return filteredProducts;
};

exports.Category = {
  products: (parent, args, context) =>
    getProductsInCategory(parent, args, context),
};
