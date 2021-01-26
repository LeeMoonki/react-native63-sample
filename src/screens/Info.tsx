import React from 'react';
import { SafeAreaView, Text, TouchableNativeFeedback } from 'react-native';
import { InfoProps } from '../navigators/SignupStackNavigator/types';

const Info = ({ navigation }: InfoProps) => {
  return (
    <SafeAreaView>
      <Text>Info Screen</Text>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.push('Complete');
        }}>
        <Text>Go To Complete</Text>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
};

export default Info;
