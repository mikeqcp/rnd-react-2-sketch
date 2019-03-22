import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Section } from '../../sketch_components/section';
import { TextLine } from '../../sketch_components/textLine';

export const TypographyPage = ({ textStyles }) => (
  <Section name="Typography" isVertical>
    {Object.keys(textStyles).map(text => (
      <TextLine key={text} type={text} />
    ))}
  </Section>
);

TypographyPage.propTypes = {
  textStyles: PropTypes.object.isRequired,
};
