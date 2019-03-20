import { forEachObjIndexed, propEq, find } from 'ramda';
import { render } from 'react-sketchapp';

// eslint-disable-next-line
const document = require('sketch/dom').getSelectedDocument();

export const findOrCreatePage = name => {
  const documentPage = find(propEq('name', name))(document.pages);

  if (documentPage) {
    return documentPage;
  }

  const page = context.document.addBlankPage();
  page.setName(name);
  return page;
};

export const renderPages = forEachObjIndexed(({ host, content }) => render(content, host));
