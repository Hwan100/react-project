import React from 'react';
import styled from 'styled-components';
import selectUserStore from '../store/selectUserStore';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const { text } = selectUserStore();
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        {text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        뒤로가기
      </button>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px;
  width: 100%;
  border-radius: 0px 12px 12px 0px;
  background: white;
  position: relative;
`;
