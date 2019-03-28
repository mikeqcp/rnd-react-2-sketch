import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { BreakpointContextProvider, ThemeProvider, ButtonType, TextType } from 'apptensionUniversalComponents'; // eslint-disable-line

import { IntlProvider, FormattedMessage } from 'react-intl';
import { translationMessages, DEFAULT_LOCALE } from '../i18n';
import { GlobalStyle } from '../theme/global';
import messages from './app.messages';


export class App extends PureComponent {
  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.node,
    match: PropTypes.object.isRequired,
    setLanguage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.setLanguage(this.getLanguage(this.props));
  }

  componentDidUpdate(prevProps) {
    if (this.getLanguage(prevProps) !== this.getLanguage(this.props)) {
      this.props.setLanguage(this.getLanguage(this.props));
    }
  }

  getLanguage = (props) => props.match.params.lang || DEFAULT_LOCALE;

  render() {
    if (!this.props.language) {
      return null;
    }

    return (
      <ThemeProvider theme={{
        typography: {
          [TextType.TITLE]: {
            fontFamily: 'TimesNewRoman',
            fontSize: 35,
            color: 'red',
          },
        },
        colors: {
          custom: 'red',
        },
        buttons: {
          [ButtonType.PRIMARY]: {
            background: 'custom',
            border: '#00962c',
          },
        },
      }}
      >
        <IntlProvider
          locale={this.props.language}
          messages={translationMessages[this.props.language]}
        >
          <BreakpointContextProvider>
            <FormattedMessage {...messages.pageTitle}>
              {pageTitle => (
                <Helmet
                  titleTemplate={`%s - ${pageTitle}`}
                  defaultTitle={pageTitle}
                />
              )}
            </FormattedMessage>

            <GlobalStyle />
            {React.Children.only(this.props.children)}
          </BreakpointContextProvider>
        </IntlProvider>
      </ThemeProvider>
    );
  }
}
