import React from 'react';
import { render, Page } from 'react-sketchapp';
import { ResponsiveScreens } from './sketch_components/responsiveScreens';
import { Section } from './sketch_components/section';


const sketch = require('sketch');
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

export function onPageCreated(context) {
  UI.getInputFromUser(
    'Do you want to apply a web responsiveness page template?',
    {
      type: UI.INPUT_TYPE.selection,
      possibleValues: ['Yes', 'No'],
    }, (err, value) => {
      if (value === 'Yes') {
        const documentContext = context.actionContext.document;
        renderPageTemplate(sketch.fromNative(documentContext).selectedPage);
      }
    });
}
