import React from 'react';
import { SafeAreaView, Text, TouchableNativeFeedback } from 'react-native';
import { CompleteProps } from '../types';

const Complete = ({ navigation }: CompleteProps) => {
  return (
    <SafeAreaView>
      <Text>Complete Screen</Text>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate('BottomTab', { screen: 'Home' });
        }}>
        <Text>Go To Home</Text>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
};

export default Complete;
