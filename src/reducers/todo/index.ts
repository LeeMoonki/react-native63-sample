import {
  TodoState,
  TodoActionType,
  // action type
  ADD_TODO,
} from './types';

const initState: TodoState = {
  list: [],
};

export default function todoReducer(
  state = initState,
  action: TodoActionType,
): TodoState {
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
