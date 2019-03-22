import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Title, ListItem, SeeMoreButton } from './cardsSection.styles';
import { Card } from '../card';
import { TextType } from '../../styles/theme';
import { BreakpointContextType } from '../breakpointProvider/breakpointProvider.component';
import { Text } from '../text';
import { ButtonType } from '../button/types';
import { internalStyles, sketchProps } from '../../helpers/rendering';


export class CardsSection extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    styleConfig: PropTypes.object,
  };

  static defaultProps = {
    cards: [],
  };

  static contextType = BreakpointContextType;

  get cards() {
    return this.props.cards.slice(0, 3);
  }

  inheritStyle = internalStyles(this.props);

  renderListItem = (card, id) => (
    <ListItem
      key={id}
      {...sketchProps({
        resizingConstraint: { fixedHeight: true, fixedWidth: true, top: true },
      })}
    >
      <Card {...this.inheritStyle('card')} {...card} />
    </ListItem>
  );

  render() {
    const { title } = this.props;

    return (
      <Container>
        <Title>
          <Text {...this.inheritStyle('title')} type={TextType.TITLE}>{title}</Text>
        </Title>
        <Content direction={this.context.smallerThan('desktop') ? 'column' : 'row'}>
          {this.cards.map(this.renderListItem)}
        </Content>

        <SeeMoreButton
          {...this.inheritStyle('button')}
          type={ButtonType.PRIMARY}
          label="Secondary"
        />
      </Container>
    );
  }
}
