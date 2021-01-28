import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import { AddTodoModalProps } from '../types';

const AddTodoModal = ({ navigation }: AddTodoModalProps) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.goBack();
      }}>
      <SafeAreaView style={styles.container}>
        <TouchableNativeFeedback onPress={() => {}}>
          <View style={styles.modal}>
            <TouchableNativeFeedback
              onPress={() => {
                navigation.goBack();
              }}>
              <Text>Dismiss</Text>
            </TouchableNativeFeedback>
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
    width: '80%',
    height: '70%',
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

export default AddTodoModal;
