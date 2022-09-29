import React from 'react';
import { SearchContent, UserContent } from '../../container';
import DefaultLayout from '../../layout';

const UserSearchPage = () => {
  return (
    <DefaultLayout>
      <SearchContent />
      <UserContent />
    </DefaultLayout>
  );
};

export default UserSearchPage;
