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
    flexDirection: 'column',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2) !important'
  },
  paperMobile: {
    width: '100%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2) !important'
  },
  content: { display: 'flex', height: '100vh', alignItems: 'center' }
}));
