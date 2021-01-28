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

describe('Home Screen 테스트', () => {
  const dispatchSpy = jest.fn();
  useDispatch.mockImplementation(() => dispatchSpy);

  it('ADD TODO 버튼을 클릭했을 때 ADD_TODO action을 dispatch 한다.', () => {
    const $modal = create(<AddTodoModal />).root;
    const $addTodoButton = $modal.findByProps({ testID: 'addTodo' });

    fireEvent($addTodoButton, 'onPress');

    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(
      expect.objectContaining({ type: ADD_TODO })
    );
  });
});
