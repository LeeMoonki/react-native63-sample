/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { NavigationTheme } from './Theme';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import store from './store';
import RootStackNavigator from './navigators/RootStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={{
            dark: NavigationTheme.dark,
            colors: {
              ...DefaultTheme.colors,
              ...NavigationTheme.colors,
            },
          }}>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
