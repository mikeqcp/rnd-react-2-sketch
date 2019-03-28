import React from 'react';
import { makeSymbol } from '../../helpers/sketch_only';
import { Card as CardComponent } from './index';


export const Card = makeSymbol(
  () => (
    <CardComponent
      title={'Card example'}
      text={'Card content example. This can be a quite long text and the heigh of the card will depend on that.'}
      image="https://picsum.photos/300/200/?random"
    />
  ),
  'components/card'
);
