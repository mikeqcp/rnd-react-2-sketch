import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../text';

import { Container, Image, Content } from './card.styles';
import { TextType } from '../../styles/theme';


export class Card extends PureComponent {
  render() {
    const { image, text, title } = this.props;
    return (
      <Container>
        <Image source={image} />
        <Content>
          <Text type={TextType.TITLE}>{title}</Text>
          <Text type={TextType.PARAGRAPH}>{text}</Text>
        </Content>
      </Container>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
