import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button as StyledButton } from './button.styles';
import { forwardStyle } from '../../helpers/rendering';
import { Text } from '../text';
import { TextType } from '../text/types';
import { ButtonType } from './types';
import { MultiplatformPropsProvider } from '../multiplatformPropsProvider';


export class Button extends PureComponent {
  render() {
    const { label, type } = this.props;

    return (
      <MultiplatformPropsProvider
        sketch={{ resizingConstraint: { fixedHeight: false, fixedWidth: true } }}
        web={{ as: 'button' }}
      >
        <StyledButton
          buttonType={type}
          {...forwardStyle(this.props)}
        >
          <MultiplatformPropsProvider
            sketch={{ resizingConstraint: { left: true, right: true, fixedHeight: false } }}
            web={{ as: 'span' }}
          >
            <Text
              alignment={'center'}
              type={TextType.LABEL}
            >
              {label}
            </Text>
          </MultiplatformPropsProvider>
        </StyledButton>
      </MultiplatformPropsProvider>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([ButtonType.PRIMARY, ButtonType.SECONDARY]),
};
