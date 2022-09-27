import React from 'react';
import { Container, Paper } from '@mui/material';
import { useStyles } from './style';
import { Theme, useMediaQuery } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = props => {
  const { children } = props;
  const classes = useStyles();
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Container className={classes.root}>
      {!isMdUp ? (
        <>
          <Container maxWidth="sm">
            <div className={classes.content}>
              <Paper className={classes.paperMobile}>{children}</Paper>
            </div>
          </Container>
        </>
      ) : (
        <>
          <Container maxWidth="md">
            <div className={classes.content}>
              <Paper className={classes.paper}>{children}</Paper>
            </div>
          </Container>
        </>
      )}
    </Container>
  );
};

export default DefaultLayout;
