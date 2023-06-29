import React from 'react';
import { ActiveUser } from '../../lib/types';
import { Grid, Typography, Paper, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%'
}));

interface Props {
  activeUser: ActiveUser;
}

const UserCard: React.FC<Props> = ({ activeUser }) => {
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
          <Item elevation={4}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                  <Avatar sx={{ width: 30, height: 30 }}>{item.icon}</Avatar>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <Avatar sx={{ width: 30, height: 30 }}>{item.icon}</Avatar>
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
                      color="text.secondary"
                      sx={{ typography: { md: 'body2', xs: 'caption' } }}
                    >
                      {item.label}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      ))}
    </>
  );
};

export default UserCard;
