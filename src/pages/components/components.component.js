import React, { PureComponent } from 'react';
import { Section } from '../../sketch_components/section';
import { Cards } from './cards';
import { CardsSection } from './cardsSection';
import { HeroDisplay } from './hero';


export class Components extends PureComponent {
  render() {
    return (
      <Section vertical>
        <Section name="Hero">
          <HeroDisplay />
        </Section>
        <Section name="Card">
          <Cards />
        </Section>
        <Section name="Cards Section">
          <CardsSection />
        </Section>
      </Section>
    );
  }
}

Components.propTypes = {
};
