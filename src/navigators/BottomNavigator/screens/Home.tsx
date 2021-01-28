import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import { RootState } from '../../../reducers/types';
import { defaultListName } from '../../../reducers/todo';
import { Todo } from '../../../reducers/todo/types';

import { HomeProps } from '../types';

import { useSelector } from 'react-redux';

function TodoItem({ name, done }: Todo) {
  return (
    <View>
      <Text>{done ? '완료' : '진행중'}</Text>
      <Text>{name}</Text>
    </View>
  );
}

function HomeScreen({ navigation }: HomeProps) {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Home Screen</Text>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('AddTodoModal');
          }}>
          <Text style={styles.buttonAdd}>ADD TODO With Modal</Text>
        </TouchableNativeFeedback>
        {todos[defaultListName].length > 0 &&
          todos[defaultListName].map((todo, index) => (
            <TodoItem key={index} {...todo} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonAdd: {
    paddingVertical: 10,
    width: 100,
    textAlign: 'center',
    backgroundColor: '#abffae',
  },
});

export default HomeScreen;
