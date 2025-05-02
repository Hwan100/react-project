import React, { useEffect, useState } from 'react';
import Login from './Login';
import UserList from '../components/UserList';
import axios from 'axios';
import TodoList from '../components/TodoList';
import styled from 'styled-components';
import { style } from 'motion/react-client';
import Category from '../components/Category';

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
    <Container>
      <UserList />
      <Category />
      <TodoList />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 12px;
  margin: 0;
  width: 800px;
  height: 500px;
`;
