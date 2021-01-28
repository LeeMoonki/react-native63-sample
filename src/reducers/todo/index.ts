import {
  TodoStateType,
  TodoActionType,
  // action type
  ADD_TODO,
  ADD_TODO_LIST,
} from './types';

export const defaultListName = 'todos';
export const initState: TodoStateType = {
  [defaultListName]: [],
};

export default function todoReducer(
  state = initState,
  action: TodoActionType,
): TodoStateType {
  switch (action.type) {
    case ADD_TODO_LIST: {
      return {
        ...state,
        [action.list]: [],
      };
    }
    case ADD_TODO: {
      const list = action.list || defaultListName;
      return {
        ...state,
        [list]: state[list].concat([action.todo]),
      };
    }
    default:
      return state;
  }
}
