import React from 'react';
import { makeSymbol } from 'react-sketchapp';
import {
  PrimaryButton as PrimaryButtonComponent,
  SecondaryButton as SecondaryButtonComponent,
} from './index';


export const PrimaryButton = makeSymbol(
  () => <PrimaryButtonComponent label="Primary" />,
  'components/button/primary'
);

export const SecondaryButton = makeSymbol(
  () => <SecondaryButtonComponent label="Secondary" />,
  'components/button/secondary'
);
