import React, { PureComponent } from 'react';
import { Section } from '../../sketch_components/section';
import { Cards } from './cards';
import { HeroDisplay } from './hero';

export class Components extends PureComponent {
  render() {
    return (
      <Section vertical>
        <Section name="Card">
          <Cards />
        </Section>
        <Section name="Hero">
          <HeroDisplay />
        </Section>
      </Section>
    );
  }
}

Components.propTypes = {
};
