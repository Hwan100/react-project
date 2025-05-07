import React from 'react';
import styled from 'styled-components';
import UserList from '../components/UserList';
import Category from '../components/Category';
import Detail from '../components/Detail';
import selectUserStore from '../store/selectUserStore';

const UserDetail = () => {
  return (
    <Container>
      <UserList />
      <Category />
      <Detail />
    </Container>
  );
};

export default UserDetail;

const Container = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 12px;
  margin: 0;
  width: 800px;
  height: 500px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
`;
