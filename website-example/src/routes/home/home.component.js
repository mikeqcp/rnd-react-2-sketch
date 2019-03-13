import React, { PureComponent } from 'react';
import { Card, Hero }  from 'apptensionUniversalComponents';  // eslint-disable-line


import { Container } from './home.styles';


export class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Hero image="https://picsum.photos/500/500?random" title="Welcome to Sketch world." />

        <Card title="Hello." text="It works!" image="https://picsum.photos/200/300" />
      </Container>
    );
  }
}
