import styled from 'styled-components/primitives';
import { prop } from 'ramda';

export const Row = styled.View`
`;

export const Label = styled.Text`
`;

export const SpacingBox = styled.View`
  width: ${prop('size')}px;
  height: ${prop('size')}px;
  border: 1px dotted dimgray;
  background: #c1dbfa;
  margin-bottom: 20px;
`;
