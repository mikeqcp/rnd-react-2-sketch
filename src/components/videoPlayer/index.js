import React from 'react';
import { makeSymbol } from 'react-sketchapp';
import { VideoPlayer as Player } from './videoPlayer.component';


export const VideoPlayer = makeSymbol(
  () => <Player poster="https://picsum.photos/500/300/?random" />,
  'components/player'
);
