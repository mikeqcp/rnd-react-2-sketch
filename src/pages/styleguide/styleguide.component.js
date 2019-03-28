import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ColorsPage } from '../colors';
import { TypographyPage } from '../typography';
import { Section } from '../../sketch_components/section';
import { Spacings } from '../spacings';


export class Styleguide extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
  };

  render() {
    const { colors, typography, spacings } = this.props.theme;

    return (
      <Section name="Styleguide">
        <ColorsPage colors={colors} />
        <TypographyPage textStyles={typography} />
        <Spacings spacings={spacings} />
      </Section>
    );
  }
}
