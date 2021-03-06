import styled from 'styled-components/primitives';
import { fromTheme } from '../../helpers/rendering';


export const Container = styled.View`
  width: 100%;
  max-width: 350px;
  box-shadow: ${fromTheme(['colors', 'textPrimary'])} 4px 4px 20px;
  background-color: white;
`;

export const Image = styled.Image`
  min-height: 200px;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Paragraph = styled.View`
  margin-top: 20px;
`;
