import { withTheme } from 'styled-components';
import { Text as TextComponent } from './text.component';


export const TextType = {
  TITLE: 'title',
  LABEL: 'label',
  PARAGRAPH: 'paragraph',
};

export const Text = withTheme(TextComponent);
