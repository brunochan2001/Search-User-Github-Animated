import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Routes from './lib/Routes';
import { theme } from './lib/theme';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route component={Routes} />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
