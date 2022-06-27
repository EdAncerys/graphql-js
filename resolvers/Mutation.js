const { v4: uuid } = require('uuid');
// --------------------------------------------------------------------------------

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const newCategory = {
      id: uuid(),
      name: input.name || '',
    };

    // Add the new category
    categories.push(newCategory);

    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, image, onSale, categoryId } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
    };

    // Add new product to the list
    db.products.push(newProduct);

    return newProduct;
  },

  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    // Add new product to the list
    reviews.push(newReview);

    return newReview;
  },
};
