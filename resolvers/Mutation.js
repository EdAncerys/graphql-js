const { v4: uuid } = require('uuid');
// --------------------------------------------------------------------------------

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const newCategory = {
      id: uuid(),
      name: input.name || '',
    };

    // Add the new category
    db.categories.push(newCategory);

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

  addReview: (parent, { input }, { db }) => {
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
    db.reviews.push(newReview);

    return newReview;
  },

  deleteCategory: (parent, { id }, { db }) => {
    // Delete category from category collection
    db.categories = db.categories.filter((c) => c.id !== id);

    // --------------------------------------------------------------------------------
    // 📌  Remove categoryId from products that associate to that category
    // --------------------------------------------------------------------------------

    db.products = db.products.map((p) => {
      if (p.categoryId === id) {
        return {
          ...p,
          categoryId: null,
        };
      } else {
        return p;
      }
    });

    return true;
  },

  deleteProduct: (parent, { id }, { db }) => {
    // Delete products from products collection
    db.products = db.products.filter((p) => p.id !== id);

    // --------------------------------------------------------------------------------
    // 📌  Remove reviews associate with deleted product
    // --------------------------------------------------------------------------------

    db.reviews = db.reviews.filter((r) => r.productId !== id);

    return true;
  },

  deleteReview: (parent, { id }, { db }) => {
    // Delete review from reviews collection
    db.reviews = db.reviews.filter((r) => r.id !== id);

    return true;
  },

  updateCategory: (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex((c) => c.id === id);
    // break if category not found
    if (index === -1) return null;

    // Update category data type
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };

    return db.categories[index];
  },

  updateProduct: (parent, { id, input }, { db }) => {
    const index = db.products.findIndex((p) => p.id === id);
    // break if product not found
    if (index === -1) return null;

    // Update category data type
    db.products[index] = {
      ...db.products[index],
      ...input,
    };

    return db.products[index];
  },

  updateReview: (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex((r) => r.id === id);
    // break if review not found
    if (index === -1) return null;

    // Update category data type
    db.reviews[index] = {
      ...db.reviews[index],
      ...input,
    };

    return db.reviews[index];
  },
};
