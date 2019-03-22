import React, { PureComponent } from 'react';
import { Section } from '../../sketch_components/section';
import { CardsSection } from './cardsSection';
import { HeroDisplay } from './hero';
import { PrimaryButton, SecondaryButton } from '../../components/button/symbols';


export class Components extends PureComponent {
  render() {
    return (
      <Section isVertical>
        <Section name="Hero">
          <HeroDisplay />
        </Section>
        <Section name="Cards Section">
          <CardsSection />
        </Section>
        <Section name="Buttons">
          <PrimaryButton />
          <SecondaryButton />
        </Section>
      </Section>
    );
  }
}
