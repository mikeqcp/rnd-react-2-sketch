import styled from 'styled-components/primitives';
import { path } from 'ramda';


const textProp = prop => path(['textStyle', prop]);

export const Text = styled.Text`
  font-size: ${textProp('fontSize')}px;
  line-height: ${textProp('lineHeight')}px;
  color: ${textProp('color')};
  font-family: ${textProp('fontFamily')};
  text-transform: ${textProp('textTransform')};
`;
