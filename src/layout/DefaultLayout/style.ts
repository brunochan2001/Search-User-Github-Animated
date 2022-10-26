import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    padding: 0,
    margin: 0,
    maxWidth: 'none',
    display: 'flex',
    flexDirection: 'column'
  },
  paper: {
    width: '100%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column'
  },
  paperMobile: {
    width: '100%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column'
  },
  content: { display: 'flex', height: '100vh', alignItems: 'center' },
  labItem: { color: 'grey !important', minHeight: '24px !important' },
  userContainer: { overflowY: 'scroll' }
}));
