import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Text as TextComponent } from './text.styles';
import { forwardStyle } from '../../helpers/rendering';
import { isSketch } from '../../helpers';


const textStyles = styles => ({ [isSketch() ? 'style' : 'textStyle']: styles });

export class Text extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    alignment: PropTypes.string,
    theme: PropTypes.object,
  };

  render() {
    const { children, type, theme, alignment, ...props } = this.props;

    return (
      <TextComponent
        {...props}
        alignment={alignment}
        {...forwardStyle(props)}
        {...textStyles(theme.typography[type])}
      >
        {children}
      </TextComponent>
    );
  }
}
