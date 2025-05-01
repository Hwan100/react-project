import React, { useEffect, useState } from 'react';
import Login from './Login';
import UserList from './UserList';
import axios from 'axios';
import TodoList from '../components/TodoList';

const Home = () => {
  // const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   const res = await axios.get('http://localhost:3001/users');
  //   setUsers(res.data);
  // };

  // useEffect(() => {
  //   getUsers();
  // });

  return (
    <>
      <div>home</div>
      {/* 
      <TodoList />
      <UserList /> */}
    </>
  );
};

export default Home;
