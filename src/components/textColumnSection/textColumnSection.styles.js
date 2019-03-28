import styled from 'styled-components/primitives';
import { applyCustomStyles, fromTheme } from '../../helpers/rendering';


export const Container = styled.View`
  background-color: ${fromTheme(['colors', 'primary'])};
  flex-direction: row;
  min-height: 400px;
  align-content: center;
  justify-content: center;
  ${applyCustomStyles};
`;

export const Content = styled.View`
  width: 50%;
  padding: 50px;
  align-items: flex-start;
  
  > * {
    margin-bottom: 40px;
  }
  ${applyCustomStyles};
`;

export const Image = styled.Image`
  width: 50%;
  ${applyCustomStyles};
`;
