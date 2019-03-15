import React, { PureComponent } from 'react';

import { VideoPlayer as Player } from '../../../components/videoPlayer';
import { ResponsiveScreens } from '../../../sketch_components/responsiveScreens';


export class VideoPlayer extends PureComponent {
  render() {
    return (
      <ResponsiveScreens>
        {() => (
          <Player
            style={{ width: '100%' }}
            poster="https://picsum.photos/500/300/?random"
          />
        )}
      </ResponsiveScreens>
    );
  }
}
