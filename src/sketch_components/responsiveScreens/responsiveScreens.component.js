import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Screen, Title, Container } from './responsiveScreens.styles';
import { BreakpointContextProvider } from '../../components/breakpointProvider/breakpointProvider.component';

const DEFAULT_SIZES = [
  { name: 'mobile (iPhone 6/7/8)', width: 375, height: 667, breakpoint: 'mobile' },
  { name: 'tablet portrait (iPad)', width: 768, height: 1024, breakpoint: 'tablet' },
  { name: 'tablet landscape (iPad)', width: 1024, height: 768, breakpoint: 'tablet' },
  { name: 'desktop', width: 1440, height: 900, breakpoint: 'desktop' },
  { name: 'desktop FullHD', width: 1920, height: 1080, breakpoint: 'desktop' },
];

export class ResponsiveScreens extends PureComponent {
  render() {
    const { children } = this.props;
    const screenSizes = this.props.sizes || DEFAULT_SIZES;

    return (
      <Fragment>
        {screenSizes.map(breakpointData => {
          const { name, width, height, breakpoint } = breakpointData;
          return (
            <BreakpointContextProvider activeBreakpoint={breakpoint} key={name}>
              <Container>
                <Title>{name} • {width} x {height} [{breakpoint}]</Title>
                <Screen style={{ width, height }}>
                  {children(breakpointData)}
                </Screen>
              </Container>
            </BreakpointContextProvider>
          );
        })}
      </Fragment>
    );
  }
}

ResponsiveScreens.propTypes = {
  children: PropTypes.func.isRequired,
  sizes: PropTypes.array,
};
