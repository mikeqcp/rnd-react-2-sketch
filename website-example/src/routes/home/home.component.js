import React, { PureComponent } from 'react';
import { CardsSection, Hero, Card }  from 'apptensionUniversalComponents';  // eslint-disable-line


import { Container } from './home.styles';


export class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Hero image="https://picsum.photos/500/500?random" title="Welcome to Sketch world." />

        <CardsSection
          title="Please see some random cards below"
          cards={[
            {
              title: 'Hi Mate,',
              text: 'Im an example card',
              image: 'https://picsum.photos/400/400?random',
            },
            {
              title: 'Hello again',
              text: 'Im another card. YOu can see how nicely I am able to display this text. Neat!',
              image: 'https://picsum.photos/400/400?random',
            },
            {
              title: 'Yo!',
              text: 'See me. Dont bother with them.',
              image: 'https://picsum.photos/400/400?random',
            }
          ]}
        />
      </Container>
    );
  }
}
