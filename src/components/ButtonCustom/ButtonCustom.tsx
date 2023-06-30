import React from 'react';
import { Button } from '@mui/material';
import { useStyles } from './style';

interface Props {
  onClick: () => void;
}

const ButtonCustom: React.FC<Props> = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button variant="contained" onClick={onClick} className={classes.button}>
      Return
    </Button>
  );
};

export default ButtonCustom;
