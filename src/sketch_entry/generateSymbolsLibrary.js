import React from 'react';
import { Page } from 'react-sketchapp';
import { findOrCreatePage, renderPages } from '../helpers/sketch_only';
import { Components } from '../pages/components';
import initializeStyles from '../helpers/initializeStyles';


initializeStyles();

export const generateSymbolsLibrary = () => {
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

  renderPages(pages);
};
