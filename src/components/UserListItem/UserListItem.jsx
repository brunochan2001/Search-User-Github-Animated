import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';

const UserListItem = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            ></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
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
