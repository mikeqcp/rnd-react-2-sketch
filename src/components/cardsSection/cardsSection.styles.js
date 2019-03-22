import styled from 'styled-components/primitives';
import prop from 'ramda/es/prop';
import { Button } from '../button';


export const Container = styled.View`
  padding: 50px;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.View`
  margin-bottom: 75px;
`;

export const Content = styled.View`
  position: relative;
  width: 100%;
  flex-direction: ${prop('direction')};
  justify-content: space-around;
`;

export const ListItem = styled.View`
  max-width: 100%;
  margin-bottom: 20px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const SeeMoreButton = styled(Button)`
  margin-top: 50px;
`;
