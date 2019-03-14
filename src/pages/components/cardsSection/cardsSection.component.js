import React, { PureComponent } from 'react';

import { CardsSection as Cards } from '../../../components/cardsSection';
import { ResponsiveScreens } from '../../../sketch_components/responsiveScreens';


export class CardsSection extends PureComponent {
  render() {
    return (
      <ResponsiveScreens>
        {() => (
          <Cards
            title="Example cards section"
            cards={[
              {
                title: 'Card 1',
                text: 'Hello there. Im the first example card.',
                image: 'https://picsum.photos/200/300?random',
              },
              {
                title: 'Card 2',
                text: 'Hello there. Im the second example card.',
                image: 'https://picsum.photos/200/300?random',
              },
              {
                title: 'Card 3',
                text: 'Hello there. Im the third example card.',
                image: 'https://picsum.photos/200/300?random',
              },
            ]}
          />
        )}
      </ResponsiveScreens>
    );
  }
}
