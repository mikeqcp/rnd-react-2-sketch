const promptDirectory = require('inquirer-directory');
const addComponentGenerator = require('./plop/component/index');

module.exports = function (plop) {
  plop.setPrompt('directory', promptDirectory);

  addComponentGenerator(plop);
};
