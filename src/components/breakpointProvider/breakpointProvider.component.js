import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import find from 'ramda/es/find';
import toPairs from 'ramda/src/index';


export const BreakpointContextType = React.createContext('desktop');

export class BreakpointContextProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeBreakpoint: props.activeBreakpoint,
    };
  }

  // componentDidMount() {
  //   window.addEventListener('resize', this.handleResize);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleResize);
  // }

  getBreakpointForWidth(width) {
    return find(
      ([_, [minWidth, maxWidth]]) => width >= minWidth && width < maxWidth
    )(toPairs(this.props.breakpoints));
  }


  get activeBreakpoint() {
    return this.props.activeBreakpoint || this.state.activeBreakpoint;
  }

  get breakpointData() {
    return this.props.breakpoints[this.activeBreakpoint];
  }

  handleResize() {
    if (this.props.activeBreakpoint) return;

    const currentWidth = window.innerWidth;
    const [activeBreakpoint] = this.getBreakpointForWidth(currentWidth);

    if (activeBreakpoint !== this.state.activeBreakpoint) {
      this.setState({ activeBreakpoint });
    }
  }

  is(name) {
    return name === this.activeBreakpoint;
  }

  smallerThan(name) {
    return !this.is(name) && this.props.breakpoints[name][0] >= this.breakpointData[1];
  }

  biggerThan(name) {
    return !this.is(name) && this.props.breakpoints[name][1] <= this.breakpointData[0];
  }

  render() {
    return (
      <BreakpointContextType.Provider value={{
        name: this.activeBreakpoint,
        is: this.is.bind(this),
        smallerThan: this.smallerThan.bind(this),
        biggerThan: this.biggerThan.bind(this),
      }}
      >
        {this.props.children}
      </BreakpointContextType.Provider>
    );
  }
}

export const BreakpointContext = BreakpointContextType.Consumer;

BreakpointContextProvider.propTypes = {
  children: PropTypes.any,
  activeBreakpoint: PropTypes.string,
  breakpoints: PropTypes.object,
};

BreakpointContextProvider.defaultProps = {
  breakpoints: {
    'mobile': [0, 375],
    'tablet': [375, 1440],
    'desktop': [1440, 9999],
  },
};
