import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import { RootState } from '../reducers/types';
import { Todo, ADD_TODO } from '../reducers/todo/types';

import { HomeProps } from '../navigators/BottomNavigator/types';

import { useSelector, useDispatch } from 'react-redux';

function TodoItem({ name, done }: Todo) {
  return (
    <View>
      <Text>{done ? '완료' : '진행중'}</Text>
      <Text>{name}</Text>
    </View>
  );
}

function HomeScreen({}: HomeProps) {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Home Screen</Text>
        <TouchableNativeFeedback
          onPress={() => {
            dispatch({ type: ADD_TODO, todo: { name: '할 일1', done: false } });
          }}>
          <Text style={styles.buttonAdd}>ADD TODO</Text>
        </TouchableNativeFeedback>
        {todos.list.length > 0 &&
          todos.list.map((todo, index) => <TodoItem key={index} {...todo} />)}
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
