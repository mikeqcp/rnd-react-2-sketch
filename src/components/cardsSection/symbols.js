import React from 'react';
import { View } from 'react-sketchapp';
import { makeSymbol } from '../../helpers/sketch_only';
import { CardsSection } from './index';
import { BreakpointContextProvider } from '../breakpointProvider';


const renderSection = () => (
  <CardsSection
    title="Example cards section"
    cards={[
      {
        title: 'Card 1',
        text: 'Hello there. Im the first example card.',
        image: 'https://picsum.photos/200/300?random',
      },
      {
        title: 'Card 2',
        text: 'Hello there. Im the second example card.',
        image: 'https://picsum.photos/200/300?random',
      },
      {
        title: 'Card 3',
        text: 'Hello there. Im the third example card.',
        image: 'https://picsum.photos/200/300?random',
      },
    ]}
  />
);

export const CardsSectionDesktop = makeSymbol(
  () => (
    <BreakpointContextProvider activeBreakpoint={'desktop'} >
      {renderSection()}
    </BreakpointContextProvider>
  ),
  'sections/cards/desktop');


export const CardsSectionMobile = makeSymbol(
  () => (
    <BreakpointContextProvider activeBreakpoint={'mobile'} >
      <View style={{ width: '375px' }}>
        {renderSection()}
      </View>
    </BreakpointContextProvider>
  ),
  'sections/cards/mobile');
