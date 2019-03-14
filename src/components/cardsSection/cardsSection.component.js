import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Title, ListItem } from './cardsSection.styles';
import { Card } from '../card';
import { TextType } from '../../styles/theme';
import { BreakpointContextType } from '../breakpointProvider/breakpointProvider.component';
import { Text } from '../text';


export class CardsSection extends PureComponent {
  get cards() {
    return this.props.cards.slice(0, 3);
  }

  render() {
    const { title } = this.props;

    return (
      <Container>
        <Title>
          <Text type={TextType.TITLE}>{title}</Text>
        </Title>
        <Content direction={this.context.smallerThan('desktop') ? 'column' : 'row'}>
          {this.cards.map((card, id) => (
            <ListItem key={id}>
              <Card {...card} />
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}

CardsSection.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
};

CardsSection.defaultProps = {
  cards: [],
};

CardsSection.contextType = BreakpointContextType;
