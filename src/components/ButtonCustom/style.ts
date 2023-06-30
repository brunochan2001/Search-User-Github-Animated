import { Theme, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: `${theme.palette.text.primary} !important`,
    backgroundColor: `${theme.palette.secondary.main} !important`,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main} !important`
    }
  }
}));
