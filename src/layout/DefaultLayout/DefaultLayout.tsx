import React, { useState, useEffect } from 'react';
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
  const { error, loading } = useSelector((state: RootState) => state.users);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (error && !loading) {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 700);
    } else if (!error) {
      setIsOpen(false);
    }
  }, [error, loading]);

  return (
    <>
      <div className={classes.root}>
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
      </div>
      {isOpen && <Alert />}
    </>
  );
};

export default DefaultLayout;
