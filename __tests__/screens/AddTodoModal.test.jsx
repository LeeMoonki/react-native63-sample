/**
 * @format
 */

import React from 'react';
import { create, act } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

import AddTodoModal from '../../src/navigators/RootStackNavigator/screens/AddTodoModal';
import { ADD_TODO } from '../../src/reducers/todo/types';
import { useDispatch } from 'react-redux';

jest.mock('react-redux');

describe('AddTodoModal 테스트', () => {
  const dispatchSpy = jest.fn();
  const goBackSpy = jest.fn();
  const navigationMock = { goBack: goBackSpy };
  useDispatch.mockImplementation(() => dispatchSpy);

  afterEach(() => {
    dispatchSpy.mockClear();
    goBackSpy.mockClear();
  });

  it('TextInput에 입력 값이 없는 상태에서 ADD TODO 버튼을 클릭하면 ADD_TODO action을 dispatch 하지 않는다.', () => {
    const $modal = create(<AddTodoModal />).root;
    const $addTodoButton = $modal.findByProps({ testID: 'addTodo' });

    fireEvent($addTodoButton, 'onPress');

    expect(dispatchSpy).toBeCalledTimes(0);
  });

  it('TextInput에 입력 값이 있는 상태에서 ADD TODO 버튼을 클릭하면 ADD_TODO action을 dispatch 하고 모달을 닫는다.', () => {
    const $modal = create(<AddTodoModal navigation={navigationMock} />).root;
    const $todoNameInput = $modal.findByProps({ testID: 'todoNameInput' });
    const $addTodoButton = $modal.findByProps({ testID: 'addTodo' });
    const todoName = 'foo';

    fireEvent($todoNameInput, 'onChangeText', todoName);
    fireEvent($addTodoButton, 'onPress');

    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(
      expect.objectContaining({
        type: ADD_TODO,
        todo: expect.objectContaining({ name: todoName })
      })
    );

    expect(goBackSpy).toBeCalledTimes(1);
  });
});
