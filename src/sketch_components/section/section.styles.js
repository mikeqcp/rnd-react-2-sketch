import styled from 'styled-components/primitives';

export const Title = styled.Text`
  font-size: 40px;
  color: dimgrey;
  margin-bottom: 50px;
`;

export const Container = styled.View`
  margin: 200px;
  margin-bottom: 500px;
`;

export const Content = styled.View`
  flex-direction: ${props => props.isVertical ? 'column' : 'row'};
  flex-wrap: wrap;
  justify-content: center;
`;
