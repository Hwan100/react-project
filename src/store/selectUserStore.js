import axios from 'axios';
import { create } from 'zustand';

const selectUserStore = create((set, get) => ({
  userId: 0,
  name: '',
  text: '',
  git: '',
  blog: '',
  status: false,
  todos: [],
  selectUser: async (id) => {
    //로그인한 유저정보 담기
    const getUsers = await axios.get(`http://localhost:3001/users`);
    const loginUser = getUsers.data.find((user) => id === user.id);

    //로그인한 유저할일 담기
    const todos = await axios.get('http://localhost:3001/todos');
    const todo = todos.data.filter((todo) => todo.id === loginUser.id);

    set({
      ...selectUserStore,
      userId: loginUser.id,
      name: loginUser.name,
      text: loginUser.text,
      git: loginUser.git,
      blog: loginUser.blog,
      status: true,
      todos: todo,
    });
  },
}));

export default selectUserStore;
