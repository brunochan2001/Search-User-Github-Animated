import React from 'react';
import List from '@mui/material/List';
import { UserListItem } from '../UserListItem';
import { useStyles } from '../../layout/DefaultLayout/style';
import { User } from '../../lib/types';

interface Props {
  data: User[];
}

const UserList: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.userContainer}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {data.map((e, index) => (
          <UserListItem key={index} item={e} />
        ))}
      </List>
    </div>
  );
};

export default UserList;
