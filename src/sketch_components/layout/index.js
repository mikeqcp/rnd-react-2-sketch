import styled from 'styled-components/primitives';

export const Artboard = styled.View`
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
`;
