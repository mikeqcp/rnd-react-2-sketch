import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Title, ListItem, SeeMoreButton } from './cardsSection.styles';
import { Card } from '../card';
import { TextType } from '../../styles/theme';
import { BreakpointContextType } from '../breakpointProvider/breakpointProvider.component';
import { Text } from '../text';
import { ButtonType } from '../button/types';
import { sketchProps } from '../../helpers/rendering';


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
            <ListItem
              key={id}
              {...sketchProps({
                resizingConstraint: { fixedHeight: true, fixedWidth: true, top: true },
              })}
            >
              <Card {...card} />
            </ListItem>
          ))}
        </Content>

        <SeeMoreButton type={ButtonType.PRIMARY} label="Secondary" />
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
