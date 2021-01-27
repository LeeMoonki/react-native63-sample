import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import { FullScreenModalProps } from '../types';

const FullScreenModal = ({ navigation }: FullScreenModalProps) => {
  return (
    <SafeAreaView>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.buttonClose}>모달 닫기</Text>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonClose: {
    paddingVertical: 10,
    backgroundColor: '#ddd',
  },
});

export default FullScreenModal;
