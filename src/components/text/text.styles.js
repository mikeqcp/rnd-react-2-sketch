import styled from 'styled-components/primitives';
import { always, ifElse, isNil, path, pipe, prop } from 'ramda';
import dasherize from 'dasherize';
import { applyCustomStyles } from '../../helpers/rendering';


const textProp = (prop, unit) => pipe(
  path(['textStyle', prop]),
  ifElse(
    isNil,
    always(''),
    value => `${dasherize(prop)}: ${value}${unit || ''}`
  )
);


export const Text = styled.Text`
  text-align: ${prop('alignment')};
  ${textProp('fontSize', 'px')};
  ${textProp('lineHeight', 'px')};
  ${textProp('color')};
  ${textProp('fontFamily')};
  ${textProp('textTransform')};
  ${applyCustomStyles};
`;
