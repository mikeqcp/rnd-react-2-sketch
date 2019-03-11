import React, { PureComponent } from 'react';

import { ColorsPage } from '../colors';
import { colors, typography, spacings } from '../../styles/theme';
import { TypographyPage } from '../typography';
import { Section } from '../../sketch_components/section';
import { Spacings } from '../spacings';

export class Styleguide extends PureComponent {
  render() {
    return (
      <Section name="Styleguide">
        <ColorsPage colors={colors} />
        <TypographyPage textStyles={typography} />
        <Spacings spacings={spacings} />
      </Section>
    );
  }
}
