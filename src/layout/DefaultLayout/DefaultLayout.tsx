import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/storeConfig';
import { Container, Paper } from '@mui/material';
import { useStyles } from './style';
import { Theme, useMediaQuery } from '@material-ui/core';
import { Alert } from '../../components';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = props => {
  const { children } = props;
  const classes = useStyles();
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const { error } = useSelector((state: RootState) => state.users);

  return (
    <>
      <Container className={classes.root}>
        {!isMdUp ? (
          <>
            <Container maxWidth="sm">
              <div className={classes.content}>
                <Paper className={classes.paperMobile} elevation={16}>
                  {children}
                </Paper>
              </div>
            </Container>
          </>
        ) : (
          <>
            <Container maxWidth="md">
              <div className={classes.content}>
                <Paper className={classes.paper} elevation={16}>
                  {children}
                </Paper>
              </div>
            </Container>
          </>
        )}
      </Container>
      {error && <Alert error={error} />}
    </>
  );
};

export default DefaultLayout;
