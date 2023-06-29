import React from 'react';
import { User } from '../../lib/types';
import List from '@mui/material/List';
import { UserListItem } from '../UserListItem';
import { useStyles } from '../../layout/DefaultLayout/style';

interface Props {
  data: User[];
  handleViewUser: (username: string) => void;
}

const UserList: React.FC<Props> = ({ data, handleViewUser }) => {
  const classes = useStyles();
  return (
    <div className={classes.userContainer}>
      <List>
        {data.map((e, index) => (
          <UserListItem key={index} item={e} handleViewUser={handleViewUser} />
        ))}
      </List>
    </div>
  );
};

export default UserList;
