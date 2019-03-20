import styled from 'styled-components/primitives';
import { always, ifElse, isNil, path, pipe } from 'ramda';
import dasherize from 'dasherize';


const textProp = (prop, unit) => pipe(
  path(['textStyle', prop]),
  ifElse(
    isNil,
    always(''),
    value => `${dasherize(prop)}: ${value}${unit || ''}`
  )
);


export const Text = styled.Text`
  ${textProp('fontSize', 'px')};
  ${textProp('lineHeight', 'px')};
  ${textProp('color')};
  ${textProp('fontFamily')};
  ${textProp('textTransform')};
`;
