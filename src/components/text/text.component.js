import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Text as TextComponent } from './text.styles';

export class Text extends PureComponent {
  render() {
    const { children, textStyle, style } = this.props;

    return (
      <TextComponent textStyle={textStyle} style={style}>
        {children}
      </TextComponent>
    );
  }
}

Text.propTypes = {
  children: PropTypes.any,
  textStyle: PropTypes.object,
  style: PropTypes.any,
};
