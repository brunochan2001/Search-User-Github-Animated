import React from 'react';
import { ActiveUser } from '../../lib/types';
import { Grid, Typography, Paper, Avatar, Box } from '@mui/material';
import { useStyles } from './style';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

interface Props {
  activeUser: ActiveUser;
}

const UserCard: React.FC<Props> = ({ activeUser }) => {
  const classes = useStyles();
  const { public_repos, followers, following, public_gists } = activeUser;

  const itemsCard = [
    {
      id: 1,
      icon: <AssignmentOutlinedIcon />,
      label: 'public repos',
      value: public_repos
    },
    {
      id: 2,
      icon: <GroupIcon />,
      label: 'followers',
      value: followers
    },
    {
      id: 3,
      icon: <PersonAddIcon />,
      label: 'following',
      value: following
    },
    {
      id: 4,
      icon: <IntegrationInstructionsOutlinedIcon />,
      label: 'public gists',
      value: public_gists
    }
  ];
  return (
    <>
      {itemsCard.map(item => (
        <Grid item xs={6} key={item.id}>
          <Paper className={classes.cardContainer} elevation={4}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    className={classes.avatar}
                  >
                    {item.icon}
                  </Avatar>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    className={classes.avatar}
                  >
                    {item.icon}
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      sx={{ typography: { md: 'body2', xs: 'caption' } }}
                      gutterBottom
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      sx={{ typography: { md: 'body2', xs: 'caption' } }}
                    >
                      {item.label}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default UserCard;
