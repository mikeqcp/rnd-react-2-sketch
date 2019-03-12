import React, { PureComponent } from 'react';

import { ResponsiveScreens } from '../../../sketch_components/responsiveScreens';
import { Hero } from '../../../components/hero';

export class HeroDisplay extends PureComponent {
  render() {
    return (
      <ResponsiveScreens>
        {() => <Hero image="https://picsum.photos/300/200/?image=731" title="Page title" />}
      </ResponsiveScreens>
    );
  }
}
