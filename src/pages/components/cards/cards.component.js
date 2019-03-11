import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Card } from '../../../components/card';

export class Cards extends PureComponent {
  render() {
    return (
      <Card text="Lorem ipsum" image="https://picsum.photos/200/300" title="Hello there!" />
    );
  }
}

Cards.propTypes = {
};
