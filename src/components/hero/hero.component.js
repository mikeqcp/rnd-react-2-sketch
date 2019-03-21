import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Image, Container, Title } from './hero.styles';
import { TextType } from '../../styles/theme';
import { Text } from '../text';
import { metaProps } from '../../helpers';


export class Hero extends PureComponent {
  render() {
    const { image, title } = this.props;
    return (
      <Container>
        <Image source={image} />
        <Title
          {...metaProps({
            resizingConstraint: { bottom: true, fixedHeight: true },
          })}
        >
          <Text
            type={TextType.TITLE}
            {...metaProps({
              resizingConstraint: { left: true, fixedWidth: true },
            })}
          >
            {title}
          </Text>
        </Title>
      </Container>
    );
  }
}

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
