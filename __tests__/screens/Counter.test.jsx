import React from 'react';
import { create } from 'react-test-renderer';
import { fireEvent, within } from '@testing-library/react-native';

import CounterScreen from '../../src/screens/Counter';

describe('Counter Screen', () => {
  let screen, $screen;
  const navigateSpy = jest.fn();
  const props = { navigation: { navigate: navigateSpy } };

  beforeEach(() => {
    screen = create(<CounterScreen {...props} />);
    $screen = screen.root;
  });

  afterEach(() => {
    navigateSpy.mockClear();
  });

  it('Pressing Count Button', () => {
    const $minus = within($screen).queryByText('-').parent;
    const $plus = within($screen).queryByText('+').parent;
    const $countWrapper = $plus.parent;

    expect(within($countWrapper).queryByText('0')).not.toBeNull();
    fireEvent($plus, 'onPress');
    expect(within($countWrapper).queryByText('1')).not.toBeNull();

    fireEvent($minus, 'onPress');
    expect(within($countWrapper).queryByText('0')).not.toBeNull();
  });

  it('Pressing GoToHome Button', () => {
    const $goToHome = within($screen).queryByText('GoToHome').parent;

    fireEvent($goToHome, 'onPress');

    expect(navigateSpy).toHaveBeenCalledTimes(1);
    expect(navigateSpy).toHaveBeenCalledWith('BottomTab', expect.objectContaining({ screen: 'Home' }));
  });
});
