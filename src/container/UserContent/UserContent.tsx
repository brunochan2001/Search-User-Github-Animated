import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch, RootState } from '../../store/storeConfig';
import { viewUser } from '../../store/actions';
import { useStyles } from '../../layout/DefaultLayout/style';
import { Progress, UserList, UserTabs } from '../../components';

interface Props {
  open: boolean;
}

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

const UserContent: React.FC<Props> = ({ open }) => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const history = useHistory();
  const classes = useStyles();
  const { data, loading } = useSelector((state: RootState) => state.users);

  const handleViewUser = (username: string) => {
    dispatch(viewUser(username));
    history.push('/user');
  };
  return (
    <div className={classes.motionContainer}>
      <motion.div variants={variants} animate={open ? 'open' : 'closed'}>
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
