import React from 'react';
import { Image, TouchableNativeFeedback } from 'react-native';
import { create } from 'react-test-renderer';
import { render, fireEvent, within } from '@testing-library/react-native';

import CounterScreen from '../../src/navigators/RootStackNavigator/screens/Counter';

describe('Counter Screen', () => {
  let screen, $screen;
  const navigateSpy = jest.fn();
  const props = {
    navigation: {
      navigate: navigateSpy,
    },
  };

  beforeEach(() => {
    screen = create(<CounterScreen {...props} />);
    $screen = screen.root;
  });

  afterEach(() => {
    navigateSpy.mockClear();
  });

  it('더하기 버튼을 터치했을 때 카운트가 1 증가', () => {
    // assertion
    expect($screen).toBeTruthy();
    expect(within($screen).queryByText('0')).not.toBeNull();

    const $plus = within($screen).queryByText('+').parent;
    fireEvent($plus, 'onPress');

    expect(within($screen).queryByText('1')).not.toBeNull();
  });

  it('빼기 버튼을 터치했을 때 카운트 1 감소', () => {
    // 첫 번째 방법
    const $minus = within($screen).queryByText('-').parent;

    // 두 번째 방법
    // const $buttonImages = $screen.findAllByType(Image);

    // expect($buttonImages.length).toBeGreaterThan(0);

    // let $minus = null;

    // for (const $i of $buttonImages) {
    //   if ($i.props.source.uri === 'foo') {
    //     $minus = $i.parent;
    //     break;
    //   }
    // }

    // expect($minus).not.toBeNull();

    fireEvent($minus, 'onPress');

    expect(within($screen).queryByText('-1')).not.toBeNull();
  });

  it('빼기 버튼을 터치했을 때 카운트 1 감소', () => {
    // 세 번째
    const $buttons = $screen.findAllByType(TouchableNativeFeedback);
    let $minus = $buttons.filter($b => $b.props.testID === 'minusButton')[0];

    expect($minus).toBeTruthy();

    fireEvent($minus, 'onPress');

    expect(within($screen).queryByText('-1')).not.toBeNull();
  });

  it('GoToHome 버튼을 터치했을 때 BottomTab의 Home 스크린으로 이동', () => {
    const $navigationButton = within($screen).queryByText('GoToHome').parent;

    fireEvent($navigationButton, 'onPress');

    expect(navigateSpy).toHaveBeenCalledTimes(1);
    expect(navigateSpy).toBeCalledWith(
      'BottomTab',
      expect.objectContaining({ screen: 'Home' })
    );
  });
});
