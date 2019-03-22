import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button as StyledButton } from './button.styles';
import { TextType } from '../../styles/theme';
import { forwardStyle, sketchProps, webProps } from '../../helpers/rendering';
import { Text } from '../text';
import { ButtonType } from './types';


export class Button extends PureComponent {
  render() {
    const { label, type } = this.props;

    return (
      <StyledButton
        buttonType={type}
        {...forwardStyle(this.props)}
        {...sketchProps({
          resizingConstraint: { fixedHeight: false, fixedWidth: true },
        })}
        {...webProps({
          as: 'button',
        })}
      >
        <Text
          alignment={'center'}
          type={TextType.LABEL}
          {...sketchProps({
            resizingConstraint: { left: true, right: true, fixedHeight: false },
          })}
          {...webProps({
            as: 'span',
          })}
        >
          {label}
        </Text>
      </StyledButton>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([ButtonType.PRIMARY, ButtonType.SECONDARY])
};
