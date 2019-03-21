import React from 'react';
import { render, Page } from 'react-sketchapp';
import { Styleguide } from '../pages/styleguide';


const sketch = require('sketch'); // eslint-disable-line
const DocumentPage = require('sketch/dom').Page;  // eslint-disable-line
const UI = require('sketch/ui');  // eslint-disable-line

function renderPageTemplate(hostPage) {
  const template = (
    <Page>
      <Styleguide />
    </Page>
  );

  render(template, hostPage);
}

export const generateStyleguide = () => {
  const document = require('sketch/dom').getSelectedDocument();
  renderPageTemplate(new DocumentPage({ name: 'Styleguide', parent: document }));
};
