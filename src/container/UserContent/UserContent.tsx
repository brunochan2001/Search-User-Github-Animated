import React from 'react';
import { useSelector } from 'react-redux';
import { UserList, UserTabs } from '../../components';
import { RootState } from '../../store/storeConfig';

const UserContent = () => {
  const { data } = useSelector((state: RootState) => state.users);

  return (
    <>
      <UserTabs />
      <UserList data={data} />
    </>
  );
};

export default UserContent;
