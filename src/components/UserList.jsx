import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import selectUserStore from '../store/selectUserStore';
import userStore from '../store/userStore';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const { selectUser } = selectUserStore();
  const getUsers = async () => {
    const res = await axios.get('http://localhost:3001/users');
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const click = (id) => {
    selectUser(id);
  };

  return (
    <List>
      {users.map(
        (user) =>
          user.status && (
            <div id="online" key={user.id} onClick={() => click(user.id)}>
              {user.name} 🟢
            </div>
          )
      )}
      {users.map(
        (user) =>
          !user.status && (
            <div id="offline" key={user.id} onClick={() => click(user.id)}>
              {user.name} 🔴
            </div>
          )
      )}
    </List>
  );
};

export default UserList;

const List = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  overflow: auto;
  border-radius: 12px 0px 0px 12px;
  background: #cfe8ff;

  #offline {
    opacity: 0.7;
  }

  div {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: #b2daff;
    }
  }
`;
