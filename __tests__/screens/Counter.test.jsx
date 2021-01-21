import React from 'react';
import { create } from 'react-test-renderer';
import { fireEvent, within } from '@testing-library/react-native';

import CounterScreen from '../../src/screens/Counter';

describe('Counter Screen', () => {
  it('Pressing + Button', () => {
    let screen, $screen;
    
    screen = create(<CounterScreen />);
    $screen = screen.root;

    const $minus = within($screen).queryByText('-').parent;
    const $plus = within($screen).queryByText('+').parent;
    const $countWrapper = $plus.parent;

    expect(within($countWrapper).queryByText('0')).not.toBeNull();
    fireEvent($plus, 'onPress');
    expect(within($countWrapper).queryByText('1')).not.toBeNull();

    fireEvent($minus, 'onPress');
    expect(within($countWrapper).queryByText('0')).not.toBeNull();
  });
});
