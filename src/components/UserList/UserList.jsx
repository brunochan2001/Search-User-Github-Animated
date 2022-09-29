import React from 'react';
import List from '@mui/material/List';
import { UserListItem } from '../UserListItem';
import { useStyles } from '../../layout/DefaultLayout/style';

const UserList = () => {
  const classes = useStyles();
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div className={classes.userContainer}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {data.map((e, index) => (
          <UserListItem key={index} />
        ))}
      </List>
    </div>
  );
};

export default UserList;
