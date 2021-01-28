import { TodoStateType } from '../src/reducers/todo/types';
import { defaultListName } from '../src/reducers/todo';

const todoReducerState: TodoStateType = {
  [defaultListName]: [
    { id: 0, name: '할일1', done: false },
    { id: 1, name: '할일2', done: true },
    { id: 2, name: '할일3', done: false, due: new Date() },
  ]
};

export const todoState = { todos: todoReducerState };
