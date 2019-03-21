import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Text as TextComponent } from './text.styles';
import { typography } from '../../styles/theme';
import { isSketch } from '../../helpers';


const textStyles = styles => ({
  [isSketch() ? 'style' : 'textStyle']: styles,
});

export class Text extends PureComponent {
  render() {
    const { children, type, ...props } = this.props;

    return (
      <TextComponent {...textStyles(typography[type])} {...props}>
        {children}
      </TextComponent>
    );
  }
}

Text.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};
