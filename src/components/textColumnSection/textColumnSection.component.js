import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Image } from './textColumnSection.styles';
import { BreakpointContextType } from '../breakpointProvider';


export class TextColumnSection extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    image: PropTypes.string,
    applyStyle: PropTypes.func.isRequired,
  };

  static contextType = BreakpointContextType;

  render() {
    const { applyStyle, children, image } = this.props;

    return (
      <Container {...applyStyle()}>
        <Content {...applyStyle('content')}>
          {children}
        </Content>
        <Image source={image} {...applyStyle('image')} />
      </Container>
    );
  }
}
