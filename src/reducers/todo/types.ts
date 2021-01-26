export type Todo = {
  name: string;
  done: boolean;
  due?: Date;
};

export type TodoStateType = {
  list: Todo[];
};

export const ADD_TODO = 'ADD_TODO';
export interface AddTodoActionType {
  type: typeof ADD_TODO;
  todo: Todo;
}

export type TodoActionType = AddTodoActionType;
