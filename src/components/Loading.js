import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <CircularProgress
        sx={{
          width: '150px !important',
          height: '150px !important',
          animation: 'animation-61bdi0 1.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        }}
      />
      <Typography
        className="loading-text"
        variant="h5"
        component="h2"
        sx={{
          mt: '1rem',
          color: '#fff',
        }}
      >
        Loading ...
      </Typography>
    </Box>
  );
}
