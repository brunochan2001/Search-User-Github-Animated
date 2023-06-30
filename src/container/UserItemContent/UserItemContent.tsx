import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch, RootState } from '../../store/storeConfig';
import { dismmissUser } from '../../store/actions';
import { Grid } from '@mui/material';
import { Progress, UserCard, UserInfo, ButtonCustom } from '../../components';

const UserItemContent = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const history = useHistory();
  const { activeUser } = useSelector((state: RootState) => state.users);

  const handleDismissser = () => {
    dispatch(dismmissUser());
    history.push('/');
  };

  return (
    <div style={{ padding: '1rem' }}>
      {Object.entries(activeUser).length ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <UserInfo activeUser={activeUser} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <UserCard activeUser={activeUser} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row-reverse">
            <Grid item sx={{ marginTop: { xs: '10px', lg: '0' } }}>
              <ButtonCustom onClick={handleDismissser} />
            </Grid>
          </Grid>
        </>
      ) : (
        <Progress />
      )}
    </div>
  );
};

export default UserItemContent;
