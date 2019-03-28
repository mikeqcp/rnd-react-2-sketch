import styled from 'styled-components/primitives';
import { fromTheme, fromThemeWithRef } from '../../helpers/rendering';


const buttonColorFromTheme = attr => props =>
  fromThemeWithRef(['buttons', props.buttonType, attr], 'colors')

export const Button = styled.View`
  min-width: 150px;
  height: 50px;
  line-height: 50px;
  background-color: ${buttonColorFromTheme('background')};
  border: 3px solid ${buttonColorFromTheme('border')};
  border-radius: ${fromTheme(['spacings', 'tiny'])}px;
  padding: 0 ${fromTheme(['spacings', 'base'])}px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  cursor: pointer;
`;
