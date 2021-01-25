import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';

import { CounterProps } from '../navigators/RootStackNavigator/types';

function CounterScreen({ navigation }: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate('BottomTab', { screen: 'Home' });
        }}>
        <Text>GoToHome</Text>
      </TouchableNativeFeedback>
      <View>
        <TouchableNativeFeedback
          testID="minusButton"
          onPress={() => {
            setCount(prevCount => prevCount - 1);
          }}>
          {/* <Image source={{ uri: 'foo' }} /> */}
          <Text>-</Text>
        </TouchableNativeFeedback>
        <Text>{count}</Text>
        <TouchableNativeFeedback
          onPress={() => {
            setCount(prevCount => prevCount + 1);
          }}>
          <Text>+</Text>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
}

export default CounterScreen;
