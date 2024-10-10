import React from 'react';
import { Paper, Typography } from '@mui/material';

const StatisticCard = ({ icon, title, value, color }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px', color: color, fontSize: '24px' }}>{icon}</div>
        <Typography variant="h6">{title}</Typography>
      </div>
      <Typography variant="h4" style={{ color: color }}>{value}</Typography>
    </Paper>
  );
};

export default StatisticCard;