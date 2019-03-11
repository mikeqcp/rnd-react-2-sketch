import React from 'react';
import { render, Page } from 'react-sketchapp';
import { Styleguide } from './pages/styleguide';
import { Components } from './pages/components';

export default () => {
  render(
    <Page>
      <Styleguide />
      <Components />
    </Page>,
    context.document.currentPage(),
  );
};
