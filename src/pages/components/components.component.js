import React, { PureComponent } from 'react';
import { Section } from '../../sketch_components/section';
import { Cards } from './cards';

export class Components extends PureComponent {
  render() {
    return (
      <Section>
        <Cards />
      </Section>
    );
  }
}

Components.propTypes = {
};
