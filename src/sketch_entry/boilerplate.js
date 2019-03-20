import React from 'react';
import { Page } from 'react-sketchapp';
import { Styleguide } from '../pages/styleguide';
import { findOrCreatePage, renderPages } from '../helpers';


const pages = {
  styleguide: {
    host: findOrCreatePage('Styleguide'),
    content: (
      <Page>
        <Styleguide />
      </Page>
    ),
  },
};

export default () => renderPages(pages);
