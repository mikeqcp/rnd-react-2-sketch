import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Title, ListItem } from './cardsSection.styles';
import { Card } from '../card';
import { TextType } from '../../styles/theme';


export class CardsSection extends PureComponent {
  get cards() {
    return this.props.cards.slice(0, 3);
  }

  render() {
    const { title } = this.props;

    return (
      <Container>
        <Title type={TextType.TITLE}>{title}</Title>
        <Content>
          {this.cards.map((card, id) => (
            <ListItem>
              <Card key={id} {...card} />
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
