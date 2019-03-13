import styled from 'styled-components/primitives';
import { colors } from '../../styles/theme';


export const Container = styled.View`
  width: 100%;
  max-width: 400px;
  box-shadow: ${colors.textPrimary} 4px 4px 20px;
  background-color: white;
`;

export const Image = styled.Image`
  min-height: 200px;
`;

export const Content = styled.View`
  padding: 20px;
`;
