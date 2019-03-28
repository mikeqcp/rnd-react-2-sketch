import React, { PureComponent } from 'react';
import { CardsSection, Hero, Card }  from 'apptensionUniversalComponents';  // eslint-disable-line
import { css } from 'styled-components';

import { Container } from './home.styles';


export class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Hero image="https://picsum.photos/500/500?random" title="Welcome to the Sketch world." />

        <CardsSection
          title="Please see some random cards below"
          cards={[
            {
              title: 'Hi Mate,',
              text: 'Im an example card',
              image: 'https://picsum.photos/400/400?random&1',
            },
            {
              title: 'Hello again',
              text: 'Im another card. YOu can see how nicely I am able to display this text. Neat!',
              image: 'https://picsum.photos/400/400?random&2',
            },
            {
              title: 'Yo!',
              text: 'See me. Dont bother with them.',
              image: 'https://picsum.photos/400/400?random&3',
            },
          ]}
          styleConfig={{
            title: {
              as: 'h1',
              css: css`
                color: cyan;
                background-color: ${props => props.as === 'h1' ? 'blue' : 'red'};
              `,
              className: 'custom-class',
            },
            card: {
              className: 'karta',
              title: {
                className: 'internal-title',
              },
            },
            button: {
              className: 'custom-button-class',
            },
          }}
        />
      </Container>
    );
  }
}
