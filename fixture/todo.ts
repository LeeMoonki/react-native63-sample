import { TodoStateType } from '../src/reducers/todo/types';

const todoReducerState: TodoStateType = {
  list: [
    { name: '할일1', done: false },
    { name: '할일2', done: true },
    { name: '할일3', done: false, due: new Date() },
  ]
};

export const todoState = { todos: todoReducerState };
