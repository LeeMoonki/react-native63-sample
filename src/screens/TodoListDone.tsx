import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import { TodoListDoneProps } from '../navigators/BottomNavigator/types';

function TodoListDoneScreen({ navigation }: TodoListDoneProps) {
  return (
    <SafeAreaView>
      <Text>Detail Screen</Text>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate('Counter');
        }}>
        <Text style={styles.button}>GoToCounter</Text>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: '#abff12',
  },
});

export default TodoListDoneScreen;
