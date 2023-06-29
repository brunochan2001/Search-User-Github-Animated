import React from 'react';
import { User } from '../../lib/types';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface UserListItem {
  item: User;
  handleViewUser: (username: string) => void;
}

const UserListItem: React.FC<UserListItem> = ({ item, handleViewUser }) => {
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="see"
            onClick={() => handleViewUser(item.login)}
          >
            <VisibilityIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.avatar_url}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.login}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {item.type}
            </Typography>
          }
        />
      </ListItem>
    </>
  );
};

export default UserListItem;
