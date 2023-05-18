import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Progress = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: ' calc(100% - 50px)',
        justifyContent: 'center'
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Progress;
