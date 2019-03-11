import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Section } from '../../sketch_components/section';
import { SpacingBox, Label, Row } from './spacings.styles';

export class Spacings extends PureComponent {
  render() {
    const { spacings } = this.props;

    return (
      <Section name="Spacings" vertical>
        {Object.keys(spacings).map(spacing => (
          <Row>
            <Label>{spacings[spacing]} • {spacing}</Label>
            <SpacingBox size={spacings[spacing]} key={spacing} />
          </Row>
        ))}
      </Section>
    );
  }
}

Spacings.propTypes = {
  spacings: PropTypes.object,
};
