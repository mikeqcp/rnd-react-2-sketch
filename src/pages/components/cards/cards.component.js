import React, { PureComponent } from 'react';

import { Card } from '../../../components/card';
import { ResponsiveScreens } from '../../../sketch_components/responsiveScreens';

export class Cards extends PureComponent {
  render() {
    return (
      <ResponsiveScreens>
        {() => <Card text="Lorem ipsum" image="https://picsum.photos/200/300" title="Hello there!" />}
      </ResponsiveScreens>
    );
  }
}
