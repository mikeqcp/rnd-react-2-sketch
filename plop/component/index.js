const path = require('path');

const templatesPath = path.join(__dirname, 'templates');

module.exports = (plop) => {
  const containerDirectory = 'src/{{ directory }}/{{ camelCase name }}';
  plop.setGenerator('simple component', {
    description: 'Simple component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name:',
    }, {
      type: 'directory',
      name: 'directory',
      basePath: 'src',
      message: 'Component\'s directory:',
    }],
    actions: [{
      type: 'add',
      path: `${containerDirectory}/{{ camelCase name }}.component.js`,
      templateFile: path.join(templatesPath, 'component.hbs'),
    }, {
      type: 'add',
      path: `${containerDirectory}/{{ camelCase name }}.styles.js`,
      templateFile: path.join(templatesPath, 'styles.hbs'),
    }, {
      type: 'add',
      path: `${containerDirectory}/index.js`,
      templateFile: path.join(templatesPath, 'index.hbs'),
    }],
  });
};
