import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import { Slot } from 'expo-router';
import { theme } from '@/theme';
import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <StyledThemeProvider theme={theme}>
      <AnimatedSplashOverlay />
      <Slot />
    </StyledThemeProvider>
  );
}
