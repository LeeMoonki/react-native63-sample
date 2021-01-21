/**
 * @format
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';

import HomeScreen from '../../src/screens/Home';
import { todoState } from '../../fixture/todo';
import { ADD_TODO } from '../../src/reducers/todo/types';

jest.mock('react-redux');

describe('Home Screen', () => {
  const dispatchSpy = jest.fn();
  useSelector.mockImplementation(selector => selector(todoState));
  useDispatch.mockImplementation(() => dispatchSpy);

  afterEach(() => {
    dispatchSpy.mockClear();
  });

  it('Pressing AddTodo', () => {
    const { getByText } = render(<HomeScreen />);

    fireEvent(getByText('ADD TODO'), 'onPress');

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({ type: ADD_TODO })
    );
  });
});
