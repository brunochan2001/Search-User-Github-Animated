import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions
} from '@material-ui/core/styles';

const themeLight: ThemeOptions = {
  palette: {
    primary: {
      main: '#fff',
      dark: '#fff'
    },
    secondary: {
      main: '#E0E0E0'
    },
    text: { primary: '#000' }
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      textTransform: 'none'
    }
  }
};

const themeDark: ThemeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(255, 255, 255, 0.1)',
      dark: '#303030'
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.3)'
    },
    background: {
      paper: '#121212'
    },
    text: { primary: '#fff' }
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      textTransform: 'none'
    }
  }
};

export const lightTheme = responsiveFontSizes(createTheme(themeLight));
export const darkTheme = responsiveFontSizes(createTheme(themeDark));
