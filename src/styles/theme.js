export const colors = {
  primary: '#7986cb',
  primaryLight: '#aab6fe',
  primaryDark: '#49599a',
  secondary: '#d4e157',
  secondaryLight: '#ffff89',
  secondaryDark: '#a0af22',
  textPrimary: '#212121',
  textSecondary: '#555253',
};

export const TEXT_TYPE = {
  title: 'title',
  label: 'label',
  paragraph: 'paragraph',
};

export const typography = {
  [TEXT_TYPE.title]: {
    fontFamily: 'Open Sans',
    fontSize: 50,
    lineHeight: 50,
    color: colors.textPrimary,
  },
  [TEXT_TYPE.paragraph]: {
    fontFamily: 'Open Sans',
    fontSize: 15,
    lineHeight: 15,
    color: colors.textSecondary,
  },
  [TEXT_TYPE.label]: {
    fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: 13,
    color: colors.textSecondary,
    textTransform: 'uppercase'
  }
};

export const spacings = {
  tiny: 2,
  small: 5,
  base: 23,
  large: 40,
  xLarge: 100,
};
