import React from 'react';
import { withTheme } from 'styled-components';
import * as defaultTheme from '../../../theme/default';
import { isSketch } from '../../../helpers';


// eslint-disable-next-line
const withDefaultTheme = InnerComponent => props => <InnerComponent {...props} theme={defaultTheme} />;

export default isSketch() ? withDefaultTheme : withTheme;
