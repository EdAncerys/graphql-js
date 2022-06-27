const getProductsInCategory = ({ id }, { filter }, { db }) => {
  const categoryProducts = db.products.filter(
    (product) => product.categoryId === id
  );
  let filteredProducts = categoryProducts;
  if (filter && filter.onSale) {
    filteredProducts = db.products.filter((product) => {
      return product.onSale;
    });
  }

  return filteredProducts;
};

exports.Category = {
  products: (parent, args, context) =>
    getProductsInCategory(parent, args, context),
};
