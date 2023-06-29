import React, { useEffect, useState } from 'react';
import { Alert as AlertMaterialUi } from '@mui/material';
import './style.css';

interface Props {
  error: any;
}

const Alert: React.FC<Props> = ({ error }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (error) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  }, [error]);

  return (
    <div className="alert-container">
      <AlertMaterialUi
        severity="error"
        style={{
          display: open ? 'flex' : 'none'
        }}
      >
        API rate limit exceeded !
      </AlertMaterialUi>
    </div>
  );
};

export default Alert;
