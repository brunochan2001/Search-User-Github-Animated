import React, { useState } from 'react';
import { SearchContent, UserContent } from '../../container';
import DefaultLayout from '../../layout';

const UserSearchPage = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <DefaultLayout>
      <SearchContent setIsOpen={setIsOpen} />
      <UserContent open={open} />
    </DefaultLayout>
  );
};

export default UserSearchPage;
