import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Text as TextComponent } from './text.styles';
import { typography } from '../../styles/theme';
import { forwardStyle, isSketch } from '../../helpers';


const textStyles = styles => ({ [isSketch() ? 'style' : 'textStyle']: styles });

export class Text extends PureComponent {
  render() {
    const { children, type, alignment, ...props } = this.props;

    return (
      <TextComponent
        {...props}
        alignment={alignment}
        {...forwardStyle(props)}
        {...textStyles(typography[type])}
      >
        {children}
      </TextComponent>
    );
  }
}

Text.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  alignment: PropTypes.string,
};
