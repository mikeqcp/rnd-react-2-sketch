import React, { PureComponent } from 'react';

import { ResponsiveScreens } from '../../../sketch_components/responsiveScreens';
import { Hero } from '../../../components/hero/symbols';


export class HeroDisplay extends PureComponent {
  render() {
    return (
      <ResponsiveScreens>
        {() => (
          <Hero
            style={{ width: '100%' }}
            image="https://picsum.photos/300/200/?random"
            title="Page title"
          />
        )}
      </ResponsiveScreens>
    );
  }
}
