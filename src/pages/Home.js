import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get('/users');
      setUsers(response.data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <UserList />
    </div>
  );
}

export default Home;
