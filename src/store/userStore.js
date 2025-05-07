import axios from 'axios';
import { create } from 'zustand';

const userStore = create((set, get) => ({
  userId: 0,
  name: '',
  text: '',
  git: '',
  blog: '',
  status: false,
  todos: [],
  checkUser: async (data) => {
    const getLogin = await axios.get('http://localhost:3001/login');
    const check = getLogin.data.find((login) => login.email === data.email);
    if (check === undefined) {
      alert('존재하지 않는 이메일입니다.');
      return;
    } else if (check.password !== data.password) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      //로그인한 유저정보 담기
      const getUsers = await axios.get('http://localhost:3001/users');
      const loginUser = getUsers.data.find((user) => check.id === user.id);

      //로그인한 유저할일 담기
      const todos = await axios.get('http://localhost:3001/todos');
      const todo = todos.data.filter((todo) => todo.id === loginUser.id);

      set({
        ...userStore,
        userId: loginUser.id,
        name: loginUser.name,
        text: loginUser.text,
        git: loginUser.git,
        blog: loginUser.blog,
        status: true,
        todos: todo,
      });
      try {
        await axios.patch(`http://localhost:3001/users/${loginUser.id}`, {
          status: true,
        });
      } catch (error) {
        console.error('DB 오류발생: ', error);
      }
    }
  },
  logout: () => set(() => ({ ...get(), status: false })),
}));

export default userStore;
