import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Title, ListItem, SeeMoreButton } from './cardsSection.styles';
import { Card } from '../card';
import { BreakpointContextType } from '../breakpointProvider/breakpointProvider.component';
import { Text } from '../text';
import { TextType } from '../text/types';
import { ButtonType } from '../button/types';
import { sketchProps } from '../../helpers/rendering';


export class CardsSection extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    applyStyle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    cards: [],
  };

  static contextType = BreakpointContextType;

  get cards() {
    return this.props.cards.slice(0, 3);
  }

  renderListItem = (card, id) => (
    <ListItem
      key={id}
      {...sketchProps({
        resizingConstraint: { fixedHeight: true, fixedWidth: true, top: true },
      })}
    >
      <Card {...this.props.applyStyle('card')} {...card} />
    </ListItem>
  );

  render() {
    const { title, applyStyle } = this.props;

    return (
      <Container {...applyStyle()}>
        <Title>
          <Text {...applyStyle('title')} type={TextType.TITLE}>{title}</Text>
        </Title>
        <Content direction={this.context.smallerThan('desktop') ? 'column' : 'row'}>
          {this.cards.map(this.renderListItem)}
        </Content>

        <SeeMoreButton
          {...applyStyle('button')}
          type={ButtonType.PRIMARY}
          label="Secondary"
        />
      </Container>
    );
  }
}
