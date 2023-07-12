import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch, RootState } from '../../store/storeConfig';
import { viewUser } from '../../store/actions';
import { useStyles } from '../../layout/DefaultLayout/style';
import { Progress, UserList, UserTabs } from '../../components';

const variants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    height: '545px',
    transition: {
      type: 'spring',
      bounce: 0,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    height: '0px',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 1
    }
  }
};

const UserContent = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const history = useHistory();
  const classes = useStyles();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if ((!error && loading) || data.length) {
      setIsOpen(true);
    } else if (error || !data.length) {
      setIsOpen(false);
    }
  }, [error, data, loading]);

  const handleViewUser = (username: string) => {
    dispatch(viewUser(username));
    history.push('/user');
  };
  return (
    <div className={classes.motionContainer}>
      <motion.div variants={variants} animate={isOpen ? 'open' : 'closed'}>
        <UserTabs />
        {loading ? (
          <Progress />
        ) : (
          <UserList data={data} handleViewUser={handleViewUser} />
        )}
      </motion.div>
    </div>
  );
};

export default UserContent;
