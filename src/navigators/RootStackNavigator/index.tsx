import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

import SplashScreen from '../../screens/Splash';
import CounterScreen from '../../screens/Counter';
import LoginScreen from '../../screens/Login';
import BottomTabNavigator from '../BottomNavigator';
import SignupStackNavigator from '../SignupStackNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <RootStack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
      <RootStack.Screen name="Counter" component={CounterScreen} />

      <RootStack.Screen name="Login" component={LoginScreen} />

      <RootStack.Screen name="SignupStack" component={SignupStackNavigator} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
