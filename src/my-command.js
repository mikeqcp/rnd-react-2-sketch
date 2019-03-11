import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { render } from 'react-sketchapp';

const SwatchTile = styled.View`
  height: 250px;
  width: 250px;
  border-radius: 4px;
  margin: 4px;
  background-color: ${props => props.hex};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const SwatchName = styled.Text`
  color: white;
  font-weight: bold;
`;

const SwatchText = styled.Text`
  font-size: 12px;
  font-family: 'Open Sans';
  color: white;
  margin-top: 20px;
`;


const Swatch = ({ name, hex }) => (
  <SwatchTile name={`Swatch ${name}`} hex={hex}>
    <SwatchName name="Swatch Name" hex={hex}>
      {name}
    </SwatchName>
    <SwatchText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
    </SwatchText>
  </SwatchTile>
);

const Color = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Swatch.propTypes = Color;

const Artboard = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Document = ({ colors }) => (
  <Artboard name="Swatches">
    {Object.keys(colors).map(color => (
      <Swatch name={color} hex={colors[color]} key={color} />
    ))}
  </Artboard>
);

Document.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default () => {
  const colorList = {
    Classic: '#96324E',
    Neue: '#21304E',
  };

  render(<Document colors={colorList} />, context.document.currentPage());
};
