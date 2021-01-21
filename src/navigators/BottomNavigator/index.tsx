import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './types';

import HomeScreen from '../../screens/Home';
import TodoListDoneScreen from '../../screens/TodoListDone';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = (props: any) => {
  console.log('BottomTabNavigator props : ', props);

  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="TodoListDone" component={TodoListDoneScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
