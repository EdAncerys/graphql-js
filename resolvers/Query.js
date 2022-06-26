const getSingleProduct = (parent, { id }, { products }) => {
  const product = products.find((product) => product.id === id);

  if (!product) return null;
  return product;
};

const getSingleCategory = (parent, { id }, { categories }) => {
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
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;
    if (filter.onSale) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.onSale;
      });
    }

    return filteredProducts;
  },
  product: (parent, args, context) => getSingleProduct(parent, args, context),
  categories: () => categories,
  category: (parent, args, context) => getSingleCategory(parent, args, context),
};
