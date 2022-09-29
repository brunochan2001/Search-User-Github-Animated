import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useStyles } from '../../layout/DefaultLayout/style';
import { Typography } from '@mui/material';

const UserTabs = () => {
  const classes = useStyles();

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={0} aria-label="wrapped label tabs example">
        <Tab
          icon={<PersonPinIcon />}
          iconPosition="start"
          label={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="caption"
            >
              People
            </Typography>
          }
          className={classes.labItem}
        />
      </Tabs>
    </Box>
  );
};

export default UserTabs;
