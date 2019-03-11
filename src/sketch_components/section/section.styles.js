import styled from 'styled-components/primitives';

export const Title = styled.Text`
  font-size: 20px;
  color: dimgrey;
  margin-bottom: 20px;
`;

export const Container = styled.View`
  margin: 200px;
`;

export const Content = styled.View`
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  flex-wrap: wrap;
  justify-content: center;
`;
