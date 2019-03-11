import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Line } from './textLine.styles';

export class TextLine extends PureComponent {
  render() {
    const { name, textStyle } = this.props;
    return (
      <Line textStyle={textStyle}>
        {name} • {textStyle.fontSize}/{textStyle.lineHeight}
      </Line>
    );
  }
}

TextLine.propTypes = {
  name: PropTypes.string,
  textStyle: PropTypes.object,
};
