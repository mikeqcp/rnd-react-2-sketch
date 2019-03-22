import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Image, Container, Title } from './hero.styles';
import { TextType } from '../../styles/theme';
import { Text } from '../text';
import { sketchProps } from '../../helpers/rendering';


export class Hero extends PureComponent {
  render() {
    const { image, title } = this.props;
    return (
      <Container>
        <Image source={image} />
        <Title
          {...sketchProps({
            resizingConstraint: { bottom: true, fixedHeight: true },
          })}
        >
          <Text
            type={TextType.TITLE}
            {...sketchProps({
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
