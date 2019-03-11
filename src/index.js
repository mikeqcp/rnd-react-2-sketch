import React from 'react';
import { render, Page } from 'react-sketchapp';
import { Styleguide } from './pages/styleguide';

export default () => {
  render(
    <Page>
      <Styleguide />
    </Page>,
    context.document.currentPage(),
  );
};
