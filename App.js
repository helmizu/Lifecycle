import React from 'react';
import NavigationStack from '@routes';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#82b6fc',
    accent: '#f1c40f',
    background: '#f9f9f9',
    paper: 'white'
  }
};

const prefix = 'lifecycle://';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationStack uriPrefix={prefix} />
    </PaperProvider>
  );
}

export default App;
