import { find, forEachObjIndexed, propEq } from 'ramda';
import { render } from 'react-sketchapp';


export const findOrCreatePage = (name, host) => {
  const Page = require('sketch/dom').Page;  // eslint-disable-line
  const document = host || require('sketch/dom').getSelectedDocument(); // eslint-disable-line
  const documentPage = find(propEq('name', name))(document.pages);

  return documentPage || new Page({ name, parent: document });
};

export const renderPages = forEachObjIndexed(({ host, content }) => render(content, host));
