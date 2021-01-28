import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import { AddTodoModalProps } from '../types';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../reducers/todo/actions';
import { TextInput } from 'react-native-gesture-handler';

const AddTodoModal = ({ navigation }: AddTodoModalProps) => {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState('');

  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.goBack();
      }}>
      <SafeAreaView style={styles.container}>
        <TouchableNativeFeedback onPress={() => {}}>
          <View style={styles.modal}>
            <TextInput
              style={styles.inputTodoName}
              value={todoName}
              onChangeText={text => setTodoName(text)}
            />
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback
                testID="addTodo"
                onPress={() => {
                  dispatch(addTodo({ todo: { name: '할일', done: false } }));
                }}>
                <View style={{ ...styles.button, ...styles.buttonAdd }}>
                  <Text style={styles.buttonText}>할일 추가</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.goBack();
                }}>
                <View style={{ ...styles.button, ...styles.buttonCancel }}>
                  <Text style={styles.buttonText}>취소</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </TouchableNativeFeedback>
      </SafeAreaView>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    padding: 20,
    width: '80%',
    minHeight: 150,
    maxHeight: '70%',
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  inputTodoName: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
    maxWidth: 80,
    height: 30,
    borderRadius: 5,
  },
  buttonAdd: {
    backgroundColor: '#5389ec',
  },
  buttonCancel: {
    marginLeft: 7,
    backgroundColor: '#e35c33',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default AddTodoModal;
