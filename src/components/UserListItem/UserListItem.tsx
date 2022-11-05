import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';
import { User } from '../../lib/types';

interface Props {
  item: User;
}

const UserListItem: React.FC<Props> = ({ item }) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={item.avatar_url}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.login}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {item.type}
                </Typography>
              </>
            }
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default UserListItem;
