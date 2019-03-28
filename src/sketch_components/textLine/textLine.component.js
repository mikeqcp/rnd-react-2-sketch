import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Line } from './textLine.styles';
import { Text } from '../../components/text';


export class TextLine extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    theme: PropTypes.object,
  };

  render() {
    const { type } = this.props;
    const textStyle = this.props.theme.typography[type];

    return (
      <Line>
        <Text type={type}>
          {type} • {textStyle.fontSize}/{textStyle.lineHeight}
        </Text>
      </Line>
    );
  }
}
