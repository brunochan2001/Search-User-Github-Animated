import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: `${theme.palette.text.primary} !important`,
    height: '100%'
  },
  avatar: {
    backgroundColor: `${theme.palette.secondary.main} !important`
  }
}));
