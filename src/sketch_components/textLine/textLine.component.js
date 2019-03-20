import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Line } from './textLine.styles';
import { typography } from '../../styles/theme';
import { Text } from '../../components/text';


export class TextLine extends PureComponent {
  render() {
    const { type } = this.props;
    const textStyle = typography[type];

    return (
      <Line>
        <Text type={type}>
          {type} • {textStyle.fontSize}/{textStyle.lineHeight}
        </Text>
      </Line>
    );
  }
}

TextLine.propTypes = {
  type: PropTypes.string,
};
