import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ColorSwatch } from '../../sketch_components/colorSwatch';
import { Section } from '../../sketch_components/section';

export const ColorsPage = ({ colors }) => (
  <Section name="Colors" vertical>
    {Object.keys(colors).map(color => (
      <ColorSwatch name={color} color={colors[color]} key={color} />
    ))}
  </Section>
);

ColorsPage.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};
