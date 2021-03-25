import React from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Picker } from '@react-native-picker/picker';
import { RootState } from '../../../reducers/types';
import { defaultListName } from '../../../reducers/todo';
import { Todo } from '../../../reducers/todo/types';

import { HomeProps } from '../types';

import { useSelector } from 'react-redux';

function TodoItem({ name, done, id }: Todo) {
  return (
    <View style={todoItemStyles.container}>
      <Text
        style={{
          ...todoItemStyles.todoText,
          ...(done ? todoItemStyles.doneText : {}),
        }}>
        {`${id} ${name}`}
      </Text>
    </View>
  );
}

function HomeScreen({ navigation }: HomeProps) {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.todoWrapper}>
        {/* <Picker selectedValue="foo">
          {Object.keys(todos).map((name, index) => (
            <Picker.Item key={`${name}${index}`} label={name} value={name} />
          ))}
        </Picker> */}
        {todos[defaultListName].length > 0 &&
          todos[defaultListName].map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
      </ScrollView>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate('AddTodoModal');
        }}>
        <View style={styles.buttonAdd}>
          <Text style={styles.buttonAddText}>+</Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoWrapper: {
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  buttonAdd: {
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - 25,
    bottom: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    maxWidth: 50,
    height: 50,
    maxHeight: 50,
    borderRadius: 100,
    backgroundColor: '#3475dd',
    zIndex: 10,
  },
  buttonAddText: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
  },
});

const todoItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  todoText: {
    fontSize: 24,
    color: '#232323',
  },
  doneText: {
    color: '#dedede',
    textDecorationLine: 'line-through',
  },
});

export default HomeScreen;
