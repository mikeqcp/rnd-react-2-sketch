import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import chroma from 'chroma-js';

const textColor = hex => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex)
    .darken(3)
    .hex();
};

const SwatchTile = styled.View`
  height: 125px;
  width: 125px;
  border-radius: 100px;
  margin: 4px;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const SwatchName = styled.Text`
  color: ${props => textColor(props.color)};
  font-weight: bold;
  font-size: 10px;
`;


export const Swatch = ({ name, color }) => (
  <SwatchTile name={name} color={color}>
    <SwatchName name={name} color={color}>
      {name}
    </SwatchName>
  </SwatchTile>
);

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
