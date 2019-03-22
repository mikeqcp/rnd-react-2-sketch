import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Content } from './section.styles';


export class Section extends PureComponent {
  render() {
    const { name, children, isVertical } = this.props;
    return (
      <Container>
        <Title>{name}</Title>
        <Content isVertical={isVertical}>
          {children}
        </Content>
      </Container>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
  isVertical: PropTypes.bool,
};
