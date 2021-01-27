import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import { TodoListDoneProps } from '../types';

function TodoListDoneScreen({ navigation }: TodoListDoneProps) {
  return (
    <SafeAreaView>
      <Text>Detail Screen</Text>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate('Counter');
        }}>
        <Text style={styles.buttonCounter}>GoToCounter</Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.buttonLogin}>GoToLogin</Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate('FullScreenModal');
        }}>
        <Text style={styles.buttonFullScreenModal}>Show Full Screen Modal</Text>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonCounter: {
    width: 200,
    backgroundColor: '#abff12',
  },
  buttonLogin: {
    width: 200,
    backgroundColor: '#ffab12',
  },
  buttonFullScreenModal: {
    width: 200,
    backgroundColor: '#ff8888',
  },
});

export default TodoListDoneScreen;
