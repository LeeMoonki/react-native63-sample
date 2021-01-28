import { TodoStateType } from '../src/reducers/todo/types';
import { defaultListName } from '../src/reducers/todo';

const todoReducerState: TodoStateType = {
  [defaultListName]: [
    { name: '할일1', done: false },
    { name: '할일2', done: true },
    { name: '할일3', done: false, due: new Date() },
  ]
};

export const todoState = { todos: todoReducerState };
