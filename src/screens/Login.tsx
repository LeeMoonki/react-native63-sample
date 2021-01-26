import React from 'react';
import { SafeAreaView, Text, TouchableNativeFeedback } from 'react-native';
import { LoginProps } from '../navigators/RootStackNavigator/types';

const Login = ({ navigation }: LoginProps) => {
  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate('SignupStack', { screen: 'Info' });
        }}>
        <Text>Go To SignUp</Text>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
};

export default Login;
