import React from 'react';
import { ActiveUser } from '../../lib/types';
import { Grid, Typography, Avatar, Link, Box } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';

interface Props {
  activeUser: ActiveUser;
}

const UserInfo: React.FC<Props> = ({ activeUser }) => {
  const { avatar_url, name, location, company, twitter_username, blog, bio } =
    activeUser;
  return (
    <>
      <Grid item xs={5}>
        <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
          <Avatar
            alt={name}
            src={avatar_url}
            sx={{ width: 100, height: 100 }}
          />
        </Box>

        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Avatar
            alt={name}
            src={avatar_url}
            sx={{ width: 120, height: 120 }}
          />
        </Box>
      </Grid>
      <Grid item xs={7} direction="column" spacing={2}>
        <Grid item xs>
          <Typography
            gutterBottom
            sx={{ typography: { md: 'subtitle1', xs: 'subtitle2' } }}
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{ typography: { md: 'body1', xs: 'caption' } }}
            gutterBottom
          >
            {twitter_username || 'not twitter name'}
          </Typography>
          <Typography
            sx={{ typography: { md: 'body1', xs: 'caption' } }}
            color="text.secondary"
          >
            {bio || 'not bio'}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <BusinessIcon fontSize="small" />
          </Grid>
          <Grid item xs={11}>
            <Typography
              sx={{ typography: { md: 'body2', xs: 'caption' } }}
              color="text.secondary"
            >
              {company || 'not company'}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <LocationOnIcon fontSize="small" />
          </Grid>
          <Grid item xs={11}>
            <Typography
              sx={{ typography: { md: 'body2', xs: 'caption' } }}
              color="text.secondary"
            >
              {location || 'not location'}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <LinkIcon fontSize="small" />
          </Grid>
          <Grid item xs={11}>
            <Typography
              sx={{ typography: { md: 'body2', xs: 'caption' } }}
              color="text.secondary"
            >
              <Link href={blog} underline="none">
                {blog || 'not blog'}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserInfo;
