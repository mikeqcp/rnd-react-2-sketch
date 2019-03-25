import { propOr } from 'ramda';
import { isSketch } from './index';


export const sketchProps = props => isSketch() ? props : {};

export const webProps = props => isSketch() ? {} : props;

export const forwardStyle = props => {
  const styleProp = isSketch() ? 'style' : 'className';
  return { [styleProp]: props[styleProp] };
};

export const applyCustomStyles = propOr('', 'css');
