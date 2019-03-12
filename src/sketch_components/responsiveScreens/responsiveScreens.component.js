import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Screen, Title, Container } from './responsiveScreens.styles';

const DEFAULT_SIZES = [
  { name: 'mobile (iPhone 6/7/8)', width: 375, height: 667 },
  { name: 'tablet portrait (iPad)', width: 768, height: 1024 },
  { name: 'tablet landscape (iPad)', width: 1024, height: 768 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'desktop FullHD', width: 1920, height: 1080 },
];

export class ResponsiveScreens extends PureComponent {
  render() {
    const { children } = this.props;
    const screenSizes = this.props.sizes || DEFAULT_SIZES;

    return (
      <Fragment>
        {screenSizes.map(breakpointData => {
          const { name, width, height } = breakpointData;
          return (
            <Container>
              <Title>{name} • {width} x {height}</Title>
              <Screen style={{ width, height }}>
                {children(breakpointData)}
              </Screen>
            </Container>
          )
        })}
      </Fragment>
    );
  }
}

ResponsiveScreens.propTypes = {
  children: PropTypes.func.isRequired,
  sizes: PropTypes.array,
};
