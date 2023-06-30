import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    padding: 0,
    margin: 0,
    maxWidth: 'none',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${theme.palette.primary.dark} !important`
  },
  paper: {
    width: '100%',
    height: 'min-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${theme.palette.background.paper} !important`,
    color: `${theme.palette.text.primary} !important`
  },
  paperMobile: {
    width: '100%',
    height: 'min-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${theme.palette.background.paper} !important`,
    color: `${theme.palette.text.primary} !important`
  },
  content: { display: 'flex', height: '100vh', alignItems: 'center' },
  labItem: { color: 'grey !important', minHeight: '24px !important' },
  userContainer: { overflowY: 'hidden', height: '90%' },
  motionContainer: { padding: '0 1rem' }
}));
