import React, { PureComponent } from 'react';

import { CardsSectionDesktop, CardsSectionMobile } from '../../../components/cardsSection/symbols';
import { ResponsiveScreens } from '../../../sketch_components/responsiveScreens';


export class CardsSection extends PureComponent {
  render() {
    return (
      <ResponsiveScreens>
        {({ breakpoint }) => {
          const DisplayComponent = breakpoint === 'desktop' ? CardsSectionDesktop : CardsSectionMobile;
          return <DisplayComponent style={{ width: '100%' }} />;
        }}
      </ResponsiveScreens>
    );
  }
}
