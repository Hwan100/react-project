import React, { useEffect } from 'react';
import styled from 'styled-components';
import selectUserStore from '../store/selectUserStore';
import userStore from '../store/userStore';
import { FaBlog, FaGithub } from 'react-icons/fa';

const Category = () => {
  const { name } = userStore();
  const selectUser = selectUserStore();

  return (
    <Container>
      {selectUser.userId !== 0 ? <span>{selectUser.name}</span> : <span>{name}</span>}
      <Button>상세정보</Button>
      <div>
        <Button
          onClick={() => {
            window.open(selectUser.git);
          }}
        >
          <FaGithub />
        </Button>
        <Button
          onClick={() => {
            window.open(selectUser.blog);
          }}
        >
          <FaBlog />
        </Button>
      </div>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  position: relative;

  ::after {
    content: ''; /* 가상 요소 내용 비우기 */
    position: absolute; /* 부모 요소 기준 배치 */
    top: 50%; /* 가운데 정렬 (상단 기준) */
    right: 0; /* 오른쪽 정렬 */
    transform: translateY(-50%); /* 정확한 세로 중심 정렬 */
    width: 2px; /* 선의 너비 */
    height: 80%; /* 선의 높이 (원하는 길이) */
    background-color: #808080; /* 선 색상 */
  }

  span {
    font-size: 24px;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  div {
    display: flex;
    gap: 10px;
  }
`;

const Button = styled.button`
  background: #e4e4e4;
  border: '1px solid #bbbbbb';
`;
