import styled from 'styled-components/primitives';
import { Text } from '../text';


export const Container = styled.View`
  padding: 50px;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  margin-bottom: 75px;
`;

export const Content = styled.View`
  position: relative;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ListItem = styled.View`
  max-width: 100%;
  margin-bottom: 20px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
