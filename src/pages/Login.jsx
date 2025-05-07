import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import userStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const schema = yup.object().shape({
  email: yup.string().email('유효한 이메일 형식이 아닙니다.').required('이메일을 입력하세요.'),
  password: yup
    .string()
    // .matches(/^(?=.*[a-zA-Z]).{5,}$/, '비밀번호는 영문자를 포함해 5자 이상이어야 합니다.')
    .required('비밀번호를 입력해주세요'),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { status, checkUser } = userStore();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    checkUser(data);
    if (status === true) navigate('/home');
  };

  useEffect(() => {}, [status]);

  return status ? (
    <Home />
  ) : (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="이메일" {...register('email')} />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

      <input type="text" placeholder="비밀번호" {...register('password')} />
      {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

      <button type="submit">제출</button>
    </FormWrapper>
  );
};

export default Login;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px;
  max-width: 600px;
  margin: 0 auto;

  input {
    padding: 8px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background: blueviolet;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  margin: -8px 0 8px 0;
`;
