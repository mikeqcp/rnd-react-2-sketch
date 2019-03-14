import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Image, Container, Title } from './hero.styles';
import { TextType } from '../../styles/theme';
import { Text } from '../text';


export class Hero extends PureComponent {
  render() {
    const { image, title } = this.props;
    return (
      <Container>
        <Image source={image} />
        <Title>
          <Text type={TextType.TITLE}>{title}</Text>
        </Title>
      </Container>
    );
  }
}

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
