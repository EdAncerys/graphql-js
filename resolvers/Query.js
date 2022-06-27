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

const getProducts = (parent, { filter }, { products }) => {
  let filteredProducts = products;
  // 📌 filter on sale items
  if (filter && filter.onSale) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.onSale;
    });
  }

  // 📌 filter on average rating in products
  if (filter && filter.avgRating) {
    // check if rating is in a range of 0 to 5
    const range = [...Array(6).keys()]; // array of avg range
    if (!range.includes(filter.avgRating)) return null;

    filteredProducts = filteredProducts.filter((product) => {
      return product.avgRating >= filter.avgRating;
    });
  }

  return filteredProducts;
};

exports.Query = {
  hello: () => 'Hello world!',
  numberOfRows: () => 100,
  float: () => 1.23456789,
  isFalse: () => false,
  stringArray: () => ['a', 'b', 'c'],
  products: (parent, args, context) => getProducts(parent, args, context),
  product: (parent, args, context) => getSingleProduct(parent, args, context),
  categories: () => categories,
  category: (parent, args, context) => getSingleCategory(parent, args, context),
};
