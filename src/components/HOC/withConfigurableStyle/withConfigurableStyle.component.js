import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { omit, pick, compose, propOr, ifElse, isNil, mergeLeft, pathOr, always } from 'ramda';
import { isSketch } from '../../../helpers';


const STYLE_PROPS = ['css', 'as', 'className', 'render'];
const STYLE_PROP_NAME = 'styleConfig';

export default function (WrappedComponent) {
  class WithConfigurableStyle extends PureComponent {
    static propTypes = {
      styleConfig: PropTypes.object,  // eslint-disable-line
    };

    getRootStyle = () => compose(
      pick(STYLE_PROPS),
      mergeLeft(this.props),
      propOr({}, STYLE_PROP_NAME),
    )(this.props);

    getChildStyle = elementId => {
      const styleConfig = pathOr({}, [STYLE_PROP_NAME, elementId], this.props);

      const mainProps = pick(STYLE_PROPS, styleConfig);
      const otherProps = omit(STYLE_PROPS, styleConfig);

      return {
        ...mainProps,
        styleConfig: otherProps,
      };
    };

    getStyle = selector => ifElse(
      isNil,
      this.getRootStyle,
      this.getChildStyle,
    )(selector);

    applyStyle = isSketch() ? always({}) : this.getStyle;

    render() {
      const props = omit(['STYLE_PROP_NAME'], this.props);

      const DisplayComponent = propOr(
        WrappedComponent,
        'render'
      )(this.getRootStyle());

      return (
        <DisplayComponent
          {...props}
          applyStyle={this.applyStyle}
        />
      );
    }
  }

  return WithConfigurableStyle;
}
