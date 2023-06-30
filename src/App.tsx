import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Routes from './lib/Routes';
import { darkTheme, lightTheme } from './lib/theme';

const App: React.FC = () => {
  const [themeCustom, setThemeCustom] = useState<string>(
    localStorage.getItem('theme')!
  );

  window.addEventListener('storage', () => {
    setThemeCustom(localStorage.getItem('theme')!);
  });

  return (
    <ThemeProvider theme={themeCustom == 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <Route component={Routes} />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
