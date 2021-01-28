import {
  Todo,
  ADD_TODO,
  AddTodoActionType,
  ADD_TODO_LIST,
  AddTodoListActionType,
} from './types';

// Todo List
export function addTodoList(list: string): AddTodoListActionType {
  return {
    type: ADD_TODO_LIST,
    list,
  };
}

// Todo
type AddTodoParam = {
  list?: string;
  todo: Todo;
};
export function addTodo({ list, todo }: AddTodoParam): AddTodoActionType {
  return {
    type: ADD_TODO,
    list,
    todo,
  };
}
