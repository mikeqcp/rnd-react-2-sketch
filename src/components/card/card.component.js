import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../text';

import { Container, Image, Content, Paragraph } from './card.styles';
import { TextType } from '../../styles/theme';


export class Card extends PureComponent {
  render() {
    const { image, text, title, ...props } = this.props;
    return (
      <Container {...props}>
        <Image source={image} />
        <Content>
          <Text type={TextType.TITLE}>{title}</Text>
          <Paragraph>
            <Text type={TextType.PARAGRAPH}>{text}</Text>
          </Paragraph>
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
