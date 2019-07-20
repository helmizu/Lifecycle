import React from 'react';
import NavigationStack from '@routes';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0084ff',
    accent: '#f1c40f',
    background: '#f9f9f9',
    paper: 'white'
  }
};


const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationStack />
    </PaperProvider>
  );
}

export default App;
