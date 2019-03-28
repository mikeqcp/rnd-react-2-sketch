import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { mergeDeepLeft } from 'ramda';
import * as defaultTheme from '../../theme/default';


export class ThemeProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    theme: PropTypes.object,
  };

  static defaultProps = {
    theme: {},
  };

  render() {
    const { children, theme: customTheme } = this.props;
    const theme = mergeDeepLeft(
      customTheme,
      defaultTheme,
    );

    return (
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    );
  }
}
