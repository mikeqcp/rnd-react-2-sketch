import React from 'react';
import { makeSymbol } from 'react-sketchapp';
import { Hero as HeroComponent } from './hero.component';


export const Hero = makeSymbol(
  () => (
    <HeroComponent
      title={'Hero title'}
      image="https://picsum.photos/300/200/?random"
    />
  ),
  'components/hero'
);
