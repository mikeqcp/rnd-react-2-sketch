import { forEachObjIndexed, propEq, find } from 'ramda';
import { render } from 'react-sketchapp';


const Page = require('sketch/dom').Page;  // eslint-disable-line

export const findOrCreatePage = (name, host) => {
  const document = host || require('sketch/dom').getSelectedDocument(); // eslint-disable-line
  const documentPage = find(propEq('name', name))(document.pages);

  return documentPage || new Page({ name, parent: document });
};

export const renderPages = forEachObjIndexed(({ host, content }) => render(content, host));

// eslint-disable-next-line
export const isSketch = () => typeof (IS_WEB_TARGET) === 'undefined';

export const sketchProps = props => isSketch() ? props : {};

export const forwardStyle = props => {
  const styleProp = isSketch() ? 'style' : 'className';
  return { [styleProp]: props[styleProp] };
};
