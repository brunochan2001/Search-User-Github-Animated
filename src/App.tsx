import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Routes from './lib/Routes';
import { theme } from './lib/theme';
import store from './store';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Route component={Routes} />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
