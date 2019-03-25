import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { omit, path, pick, compose, propOr, ifElse, isNil } from 'ramda';
import { isSketch } from '../../../helpers';


const STYLE_PROPS = ['css', 'as', 'className'];
const STYLE_PROP_NAME = 'styleConfig';

export default function(WrappedComponent) {
  class WithConfigurableStyle extends PureComponent {
    static propTypes = {
      styleConfig: PropTypes.object,  // eslint-disable-line
    };

    applyRootStyle = () => compose(
      pick(STYLE_PROPS),
      propOr({}, STYLE_PROP_NAME),
    )(this.props);

    applyChildStyle = styleAttr => {
      const styleConfig = path([STYLE_PROP_NAME, styleAttr], this.props);
      if (isSketch() || !styleConfig) return {};

      const mainProps = pick(STYLE_PROPS, styleConfig);
      const otherProps = omit(STYLE_PROPS, styleConfig);

      return {
        ...mainProps,
        styleConfig: otherProps,
      };
    };

    applyStyle = selector => ifElse(
      isNil,
      this.applyRootStyle,
      this.applyChildStyle,
    )(selector);

    render() {
      const props = omit(['STYLE_PROP_NAME'], this.props);

      return (
        <WrappedComponent
          {...props}
          applyStyle={this.applyStyle}
        />
      );
    }
  }

  return WithConfigurableStyle;
}
