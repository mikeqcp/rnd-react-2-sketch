import React, { PureComponent } from 'react';
import { // eslint-disable-line
  CardsSection,
  Hero,
  TextColumnSection,
  Text,
  TextType,
  SecondaryButton,
  ThemeProvider,
  ButtonType,
} from 'apptensionUniversalComponents';
import { css } from 'styled-components';

import { Container } from './home.styles';


const customTheme = {
  typography: {
    [TextType.TITLE]: {
      fontFamily: 'TimesNewRoman',
      fontSize: 35,
      color: 'red',
    },
  },
  colors: {
    myCoolColor: '#ddaa22',
  },
  buttons: {
    [ButtonType.PRIMARY]: {
      background: 'myCoolColor',
      border: '#00962c',
    },
  },
};


export class Home extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <Container>
          <Hero image="https://picsum.photos/500/500?random" title="Welcome to the Sketch world." />

          <CardsSection
            title="Please see some random cards below"
            cards={[
              {
                title: 'Hi Mate,',
                text: 'Im an example card',
                image: 'https://picsum.photos/400/400?random&1',
              },
              {
                title: 'Hello again',
                text: 'Im another card. YOu can see how nicely I am able to display this text. Neat!',
                image: 'https://picsum.photos/400/400?random&2',
              },
              {
                title: 'Yo!',
                text: 'See me. Dont bother with them.',
                image: 'https://picsum.photos/400/400?random&3',
              },
            ]}
            styleConfig={{
              title: {
                as: 'h1',
                css: css`
                  text-transform: uppercase;
                  color: cyan;
                  background-color: ${props => props.as === 'h1' ? 'blue' : 'red'};
                `,
                className: 'custom-class',
              },
              card: {
                className: 'karta',
                title: {
                  className: 'internal-title',
                },
              },
              button: {
                className: 'custom-button-class',
              },
            }}
          />

          <TextColumnSection image="https://picsum.photos/500/500?random&1">
            <Text type={TextType.TITLE}>About us</Text>

            <Text type={TextType.PARAGRAPH}>
              Approximately one in four people in the UK experience mental health concerns each year. While advances in
              mental health research are being made, there remain significant barriers to effective detection, treatment
              and prevention.
            </Text>

            <Text type={TextType.PARAGRAPH}>
              A spinout from the University of Cambridge, Psyomics is looking to overcome these barriers by combining
              digital approaches with developments in biomarker technology to benefit those facing mental health
              challenges. The tools currently in development are targeted for both clinical and workplace settings,
              specifically designed to combat the respective mental health-related challenges faced within these
              environments. In the future, we plan to expand our reach to provide personalised solutions for the wider
              community.
            </Text>

            <Text type={TextType.PARAGRAPH}>
              Psyomics was founded in 2015 by Professor Sabine Bahn, who has dedicated more than 20 years of research to
              identifying differential biomarkers of mental health symptoms. Our work is funded and supported by
              Cambridge Enterprise and a Horizon 2020 grant from the European Commission. In addition, Psyomics won an
              innovation contest with IC Tomorrow and AXA PPP to look at mental health awareness and prevention in the
              workplace, and won the Problem Solution category of the AXA PPP Health Tech & You Awards. We have also
              recently been awarded a grant from the Technology Strategy Board to further develop its technology for
              differentiating bipolar disorder from depression.
            </Text>
          </TextColumnSection>

          <TextColumnSection
            image="https://picsum.photos/500/500?random&2"
            styleConfig={{
              css: css`flex-direction: row-reverse;`,
            }}
          >
            <Text type={TextType.TITLE}>About us</Text>

            <Text type={TextType.PARAGRAPH}>
              Approximately one in four people in the UK experience mental health concerns each year. While advances in
              mental health research are being made, there remain significant barriers to effective detection, treatment
              and prevention.
            </Text>

            <Text type={TextType.PARAGRAPH}>
              A spinout from the University of Cambridge, Psyomics is looking to overcome these barriers by combining
              digital approaches with developments in biomarker technology to benefit those facing mental health
              challenges. The tools currently in development are targeted for both clinical and workplace settings,
              specifically designed to combat the respective mental health-related challenges faced within these
              environments. In the future, we plan to expand our reach to provide personalised solutions for the wider
              community.
            </Text>

            <Text type={TextType.PARAGRAPH}>
              Psyomics was founded in 2015 by Professor Sabine Bahn, who has dedicated more than 20 years of research to
              identifying differential biomarkers of mental health symptoms. Our work is funded and supported by
              Cambridge Enterprise and a Horizon 2020 grant from the European Commission. In addition, Psyomics won an
              innovation contest with IC Tomorrow and AXA PPP to look at mental health awareness and prevention in the
              workplace, and won the Problem Solution category of the AXA PPP Health Tech & You Awards. We have also
              recently been awarded a grant from the Technology Strategy Board to further develop its technology for
              differentiating bipolar disorder from depression.
            </Text>

            <SecondaryButton label="Hey, you can insert a button too!" />
          </TextColumnSection>
        </Container>
      </ThemeProvider>
    );
  }
}
