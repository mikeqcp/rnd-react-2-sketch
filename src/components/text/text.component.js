import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Text as TextComponent } from './text.styles';
import { typography } from '../../styles/theme';


export class Text extends PureComponent {
  render() {
    const { children, type, style } = this.props;
    const textStyle = typography[type];

    return (
      <TextComponent textStyle={textStyle} style={style}>
        {children}
      </TextComponent>
    );
  }
}

Text.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  style: PropTypes.any,
};
