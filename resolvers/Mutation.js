const { v4: uuid } = require('uuid');
// --------------------------------------------------------------------------------

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const newCategory = {
      id: uuid(),
      name: input.name,
    };

    // Add the new category
    categories.push(newCategory);

    return newCategory;
  },
};
