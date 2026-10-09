import { colors } from './colors';
import { spacing } from './spacing';
import { borderRadius } from './borderRadius';

export const theme = {
  colors,
  spacing,
  borderRadius,
};

export type ThemeType = typeof theme;
export default theme;

