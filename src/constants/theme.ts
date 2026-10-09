import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export const Colors: Record<string, Record<string, string>> = {
  light: {
    text: colors.textDark,
    background: colors.backgroundCanvas,
    backgroundElement: colors.backgroundCard,
    tint: colors.accent,
  },
  dark: {
    text: colors.white,
    background: colors.primary,
    backgroundElement: colors.primaryDark,
    tint: colors.accent,
  },
};

export const Spacing: Record<string, any> = {
  ...spacing,
  half: 4,
  one: 8,
  two: 12,
  three: 16,
  four: 20,
  five: 24,
  six: 32,
};

export const BottomTabInset = 0;
export const MaxContentWidth = 800;
export const Fonts = {
  regular: 'System',
  bold: 'System',
  mono: 'Courier',
};
export type ThemeColor = string;

