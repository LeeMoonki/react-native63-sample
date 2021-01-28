import todoReducer, { initState, defaultListName } from '../../src/reducers/todo';
import { addTodo, addTodoList } from '../../src/reducers/todo/actions';

describe('todo reducer', () => {
  it('ADD_TODO_LIST', () => {
    const listName = 'newList';
    const action = addTodoList(listName);
    const newState = todoReducer(initState, action);

    expect(newState[listName]).toEqual([]);
  });

  it('ADD_TODO (기본 리스트)', () => {
    const todo = { id: 0, name: '할일', done: false }
    const action = addTodo({ todo });
    const newState = todoReducer(initState, action);

    expect(newState[defaultListName][0]).toEqual(todo);
  });

  it('ADD_TODO (새로운 리스트)', () => {
    const listName = 'newList';
    const addListAction = addTodoList(listName);
    const prevState = todoReducer(initState, addListAction);

    const todo = { id: 0, name: '할일', done: false }
    const addTodoAction = addTodo({ list: listName, todo });
    const newState = todoReducer(prevState, addTodoAction);

    expect(newState[listName][0]).toEqual(todo);
  });
});
