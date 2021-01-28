import { defaultListName } from './index';

export type Todo = {
  name: string;
  done: boolean;
  due?: Date;
};

export type TodoStateType = {
  [defaultListName]: Todo[];
  [todolist: string]: Todo[];
};

// Todo List
export const ADD_TODO_LIST = 'ADD_TODO_LIST';
export interface AddTodoListActionType {
  type: typeof ADD_TODO_LIST;
  list: string;
}

// Todo

export const ADD_TODO = 'ADD_TODO';
export interface AddTodoActionType {
  type: typeof ADD_TODO;
  list?: string;
  todo: Todo;
}

export type TodoActionType = AddTodoActionType | AddTodoListActionType;
