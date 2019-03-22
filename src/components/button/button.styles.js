import styled from 'styled-components/primitives';
import { path } from 'ramda';
import { colors, spacings } from '../../styles/theme';
import { ButtonType } from './types';


const ButtonTheme = {
  [ButtonType.PRIMARY]: {
    background: colors.primary,
    border: colors.primaryDark,
  },
  [ButtonType.SECONDARY]: {
    background: colors.secondary,
    border: colors.secondaryDark,
  },
};

const fromTheme = attr => props => path([props.buttonType, attr])(ButtonTheme);


export const Button = styled.View`
  min-width: 150px;
  height: 50px;
  line-height: 50px;
  background-color: ${fromTheme('background')};
  border: 3px solid ${fromTheme('border')};
  border-radius: ${spacings.tiny}px;
  padding: 0 ${spacings.base}px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;
