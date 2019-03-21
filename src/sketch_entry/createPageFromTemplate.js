import React from 'react';
import { render, Page } from 'react-sketchapp';
import { ResponsiveScreens } from '../sketch_components/responsiveScreens';
import { Section } from '../sketch_components/section';


const sketch = require('sketch'); // eslint-disable-line
const DocumentPage = require('sketch/dom').Page;  // eslint-disable-line
const UI = require('sketch/ui');  // eslint-disable-line

function renderPageTemplate(hostPage) {
  const template = (
    <Page>
      <Section>
        <ResponsiveScreens>
          {() => null}
        </ResponsiveScreens>
      </Section>
    </Page>
  );

  render(template, hostPage);
}

export const createPageFromTemplate = () => {
  UI.getInputFromUser(
    'Please input the name for the page',
    {
      initialValue: 'Web Template Page',
    },
    (err, name) => {
      if (!err) {
        const document = require('sketch/dom').getSelectedDocument();
        renderPageTemplate(new DocumentPage({ parent: document, name }));
      }
    }
  );
};
