import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Content } from './section.styles';

export class Section extends PureComponent {
  render() {
    const { name, children, vertical } = this.props;
    return (
      <Container>
        <Title>{name}</Title>
        <Content vertical={vertical}>
          {children}
        </Content>
      </Container>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
  vertical: PropTypes.bool,
};
