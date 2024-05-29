import React, { useState, useEffect } from 'react';
import api from '../services/api';

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
      <h1>Home Page</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
