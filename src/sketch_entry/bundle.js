import React from 'react';
import { Page } from 'react-sketchapp';
import { Styleguide } from '../pages/styleguide';
import { Components } from '../pages/components';
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
  components: {
    host: findOrCreatePage('Components'),
    content: (
      <Page>
        <Components />
      </Page>
    ),
  },
};

export default () => renderPages(pages);
