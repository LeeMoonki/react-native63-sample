import {
  TodoStateType,
  TodoActionType,
  // action type
  ADD_TODO,
} from './types';

const initState: TodoStateType = {
  list: [],
};

export default function todoReducer(
  state = initState,
  action: TodoActionType,
): TodoStateType {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        list: state.list.concat([action.todo]),
      };
    }
    default:
      return state;
  }
}
