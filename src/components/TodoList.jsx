import React, { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
import userStore from '../store/userStore';
import styled from 'styled-components';

const TodoList = () => {
  const { todos, save } = userStore();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(todos);
  }, []);

  const addItem = () => {
    const newItem = {
      num: items.length + 1,
      text: `New Item ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (num) => {
    setItems(items.filter((item) => item.num !== num));
  };

  console.log(items);
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
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <button
        onClick={addItem}
        style={{ position: 'absolute', left: '-164px', top: '400px', border: '1px solid black' }}
      >
        Add Item +
      </button>
      <button onClick={addItem} style={{ position: 'absolute', left: '380px', top: '14px', background: 'none' }}>
        ❌{/* 로그아웃 */}
      </button>
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
