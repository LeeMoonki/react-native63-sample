import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';

import { CounterProps } from '../navigators/RootStackNavigator/types';

function CounterScreen({ navigation }: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <Text>Counter Screen</Text>
      <TouchableNativeFeedback onPress={() => {
        navigation.navigate('BottomTab', { screen: 'Home' });
      }}>
        <Text>GoToHome</Text>
      </TouchableNativeFeedback>
      <View>
        <TouchableNativeFeedback onPress={() => {
          setCount(prevCount => prevCount - 1);
        }}>
          <Text style={styles.buttonMinus}>-</Text>
        </TouchableNativeFeedback>
        <Text>{count}</Text>
        <TouchableNativeFeedback onPress={() => {
          setCount(prevCount => prevCount + 1);
        }}>
          <Text style={styles.buttonMinus}>+</Text>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonMinus: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 4
  },
  buttonPlus: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 4
  }
});

export default CounterScreen;
