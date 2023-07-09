import React, { useMemo, useState } from 'react';
import { User } from '../../lib/types';
import List from '@mui/material/List';
import { Pagination, Box } from '@mui/material';
import { UserListItem } from '../UserListItem';
import { useStyles } from '../../layout/DefaultLayout/style';

interface Props {
  data: User[];
  handleViewUser: (username: string) => void;
}

const UserList: React.FC<Props> = ({ data, handleViewUser }) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const usersPerPage = 6;
  const users = useMemo(() => {
    return data.slice((page - 1) * usersPerPage, page * usersPerPage);
  }, [page, data]);

  return (
    <div className={classes.userContainer}>
      <Box
        flexDirection="column"
        justifyContent="space-between"
        display="flex"
        height="100%"
      >
        <List>
          {users.map((user, index) => (
            <UserListItem
              key={index}
              item={user}
              handleViewUser={handleViewUser}
            />
          ))}
        </List>
        <Pagination
          className={classes.pagination}
          count={Math.ceil(data.length / usersPerPage)}
          size="small"
          page={page}
          onChange={(_, newPage) => setPage(newPage)}
        />
      </Box>
    </div>
  );
};

export default UserList;
