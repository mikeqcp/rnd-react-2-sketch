import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import messages from './home.messages';
import { Container } from './home.styles';


export class Home extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Container>
        <Helmet
          title={this.props.intl.formatMessage(messages.pageTitle)}
        />
      </Container>
    );
  }
}
