import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

import SplashScreen from '../../screens/Splash';
import CounterScreen from '../../screens/Counter';
import BottomTabNavigator from '../BottomNavigator'

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <RootStack.Navigator initialRouteName="BottomTab">
      <RootStack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        initialParams={{ foo: 100 } as any}
      />
      <RootStack.Screen name="Counter" component={CounterScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
