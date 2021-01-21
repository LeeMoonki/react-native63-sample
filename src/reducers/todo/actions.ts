import { Todo, ADD_TODO, AddTodoActionType } from './types';

export function addTodo(todo: Todo): AddTodoActionType {
  return {
    type: ADD_TODO,
    todo,
  };
};
