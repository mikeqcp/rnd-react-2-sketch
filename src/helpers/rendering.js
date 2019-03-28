import { propOr, path, flatten, concat, compose, identity, ifElse, curry, converge, isNil } from 'ramda';
import { isSketch } from './index';


export const sketchProps = props => isSketch() ? props : {};

export const webProps = props => isSketch() ? {} : props;

export const forwardStyle = props => {
  const styleProp = isSketch() ? 'style' : 'className';
  return { [styleProp]: props[styleProp] };
};

export const applyCustomStyles = propOr('', 'css');

export const fromTheme = compose(
  path,
  flatten,
  concat(['theme']),
  ifElse(Array.isArray, identity, v => [v])
);


export const fromThemeWithRef = curry(
  (attributePath, referenceFromPath) => props => compose(
    converge(
      (refVal, selectionVal) => isNil(refVal) ? selectionVal : refVal,
      [
        refSelector => fromTheme([referenceFromPath, refSelector])(props),
        identity,
      ]
    ),
    fromTheme(attributePath)
  )(props));
