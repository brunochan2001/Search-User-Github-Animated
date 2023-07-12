import React, { useEffect, useState } from 'react';
import { Alert as AlertMaterialUi } from '@mui/material';
import './style.css';

const Alert = () => {
  return (
    <div className="alert-container">
      <AlertMaterialUi
        severity="error"
        style={{
          display: 'flex'
        }}
      >
        API rate limit exceeded !
      </AlertMaterialUi>
    </div>
  );
};

export default Alert;
