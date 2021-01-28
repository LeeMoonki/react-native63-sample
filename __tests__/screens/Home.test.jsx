/**
 * @format
 */

import React from 'react';
import { create, act } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

import HomeScreen from '../../src/navigators/BottomNavigator/screens/Home';
import { todoState } from '../../fixture/todo';
import { ADD_TODO } from '../../src/reducers/todo/types';
import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux');

describe('Home Screen 테스트', () => {
  const dispatchSpy = jest.fn();
  useSelector.mockImplementation(selector => selector(todoState));
  useDispatch.mockImplementation(() => dispatchSpy);

  it('ADD TODO 버튼을 클릭했을 때 ADD_TODO action을 dispatch 한다.', () => {
    // const { queryByText } = render(<HomeScreen />);
    // const $addTodoButton = queryByText('ADD TODO').parent;

    // fireEvent($addTodoButton, 'onPress');

    // expect(dispatchSpy).toBeCalledTimes(1);
    // expect(dispatchSpy).toBeCalledWith(
    //   expect.objectContaining({ type: ADD_TODO })
    // );
  });
});
