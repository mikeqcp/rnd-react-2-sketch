import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from './videoPlayer.styles';


export class VideoPlayer extends PureComponent {
  render() {
    const { poster } = this.props;

    return (
      <Container>
        <Image source={poster} />
      </Container>
    );
  }
}

VideoPlayer.propTypes = {
  poster: PropTypes.string,
};
