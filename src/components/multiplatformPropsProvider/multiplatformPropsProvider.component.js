import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isSketch } from '../../helpers';


export class MultiplatformPropsProvider extends PureComponent {
  render() {
    return React.Children.map(
      this.props.children,
      child => React.cloneElement(
        child,
        this.props[isSketch() ? 'sketch' : 'web']
      )
    );
  }
}

MultiplatformPropsProvider.propTypes = {
  children: PropTypes.any,
  web: PropTypes.object,  // eslint-disable-line 
  sketch: PropTypes.object, // eslint-disable-line
};

MultiplatformPropsProvider.defaultProps = {
  web: {},
  sketch: {},
};
