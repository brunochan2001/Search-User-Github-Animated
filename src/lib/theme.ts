import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions
} from '@material-ui/core/styles';

const options: ThemeOptions = {
  palette: {},
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

export const theme = responsiveFontSizes(createMuiTheme(options));
