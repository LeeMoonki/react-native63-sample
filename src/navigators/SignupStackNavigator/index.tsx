import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignupStackParamList } from './types';

import InfoScreen from '../../screens/Info';
import CompleteScreen from '../../screens/Complete';

const SignupStack = createStackNavigator<SignupStackParamList>();

const SignupStackNavigator = () => {
  return (
    <SignupStack.Navigator initialRouteName="Info">
      <SignupStack.Screen
        name="Info"
        component={InfoScreen}
        options={{ headerLeft: () => null }}
      />
      <SignupStack.Screen name="Complete" component={CompleteScreen} />
    </SignupStack.Navigator>
  );
};

export default SignupStackNavigator;
