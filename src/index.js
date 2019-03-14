import React from 'react';
import { find, propEq, forEachObjIndexed } from 'ramda';
import { render, Page } from 'react-sketchapp';
import { Styleguide } from './pages/styleguide';
import { Components } from './pages/components';


const document = require('sketch/dom').getSelectedDocument();


const findOrCreate = name => {
  const documentPage = find(propEq('name', name))(document.pages);

  if (documentPage) {
    return documentPage;
  }

  const page = context.document.addBlankPage();
  page.setName(name);
  return page;
};

const pages = {
  styleguide: {
    host: findOrCreate('Styleguide'),
    content: (
      <Page>
        <Styleguide />
      </Page>
    ),
  },
  components: {
    host: findOrCreate('Components'),
    content: (
      <Page>
        <Components />
      </Page>
    ),
  },
};

const renderPage = ({ host, content }) => render(content, host);

export default () => forEachObjIndexed(renderPage, pages);
