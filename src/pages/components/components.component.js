import React, { PureComponent } from 'react';
import { Section } from '../../sketch_components/section';
import { CardsSection } from './cardsSection';
import { HeroDisplay } from './hero';
import { VideoPlayer } from './videoPlayer';


export class Components extends PureComponent {
  render() {
    return (
      <Section vertical>
        <Section name="Hero">
          <HeroDisplay />
        </Section>
        <Section name="Cards Section">
          <CardsSection />
        </Section>
        <Section name="Video Player">
          <VideoPlayer />
        </Section>
      </Section>
    );
  }
}
