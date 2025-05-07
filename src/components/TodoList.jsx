import React, { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
import userStore from '../store/userStore';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import selectUserStore from '../store/selectUserStore';
import axios from 'axios';

const TodoList = () => {
  const { logout } = userStore();
  const { userId, todos } = selectUserStore();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(todos);
  }, [todos]);

  console.log(items);
  const addItem = async () => {
    const newItem = {
      num: items.length + 1,
      text: `New Item ${items.length + 1}`,
      completed: false,
      id: userId,
    };
    const response = await axios.post(`http://localhost:3001/todos`, newItem);

    setItems((prevItems) => [...prevItems, response.data]);

    // setItems([...items, newItem]);
  };

  const removeItem = async (num) => {
    setItems(items.filter((item) => item.num !== num));
    // await axios.delete(`http://localhost:3001/todos`, { data: { num } });
  };

  const logOut = () => {
    logout;
    navigate('/error');
  };

  return (
    <Container>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        layoutScroll
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '10px',
          overflowY: 'scroll',
          height: '400px',
          margin: '50px',
          padding: '0',
        }}
      >
        {items.map((item) => (
          <Reorder.Item
            key={item.num}
            value={item}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '70%',
              textAlign: 'center',
              background: '#e4e4e4',
              border: '1px solid #bbbbbb',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            {item.text}
            <Button onClick={() => removeItem(item.num)}>x</Button>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <button
        onClick={addItem}
        style={{ position: 'absolute', left: '-164px', top: '400px', border: '1px solid black' }}
      >
        Add Item +
      </button>
      <Button
        onClick={() => logOut()}
        style={{
          position: 'absolute',
          left: '390px',
          top: '14px',
          background: 'none',
          width: '50px',
          height: '50px',
          textAlign: 'center',
          border: 'none',
          alignItems: 'center',
        }}
      >
        ❌
      </Button>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  justify-content: center;
  width: 100%;
  border-radius: 0px 12px 12px 0px;
  background: white;
  height: 100%;
  position: relative;
`;

const Button = styled.button`
  color: red;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  box-shadow: none;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
