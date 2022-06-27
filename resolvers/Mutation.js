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
  addProduct: (parent, { input }, { products }) => {
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
    products.push(newProduct);

    return newProduct;
  },
};
