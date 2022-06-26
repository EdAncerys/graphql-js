const { categories } = require('../data');
// --------------------------------------------------------------------------------

exports.Product = {
  category: (parent, args) => {
    const { categoryId } = parent;
    return categories.find((category) => category.id === categoryId);
  },
};
