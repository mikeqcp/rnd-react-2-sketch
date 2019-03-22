import React from 'react';
import { Page } from 'react-sketchapp';
import { Components } from '../pages/components';
import { findOrCreatePage, renderPages } from '../helpers/sketch_only';
import initializeStyles from '../helpers/initializeStyles';


initializeStyles();

const pages = {
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
