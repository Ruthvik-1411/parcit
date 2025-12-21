import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1a1a2e', // Dark blue/black from screenshot
    secondary: '#e94560', // Accent color (maybe for tags or highlights)
    background: '#f5f5f7', // Light gray background
    surface: '#ffffff',
    surfaceVariant: '#f0f0f0',
    onSurface: '#000000',
    onSurfaceVariant: '#666666',
    outline: '#e0e0e0',
  },
  roundness: 12,
};
