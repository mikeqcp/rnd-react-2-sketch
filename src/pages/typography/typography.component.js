import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Section } from '../../sketch_components/section';
import { TextLine } from '../../sketch_components/textLine';

export const TypographyPage = ({ textStyles }) => (
  <Section name="Typography" vertical>
    {Object.keys(textStyles).map(text => (
      <TextLine key={text} textStyle={textStyles[text]} name={text} />
    ))}
  </Section>
);

TypographyPage.propTypes = {
  textStyles: PropTypes.object.isRequired,
};
