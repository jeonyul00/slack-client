import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import useSWR from 'swr';

interface Props {
  children: React.ReactNode;
}
const Workspace: React.FC<Props> = ({ children }) => {
  const { data: userData, error, mutate } = useSWR('/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios.post('/api/users/logout', null, { withCredentials: true }).then(() => {
      mutate(false);
    });
  }, []);

  if (!userData) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;
