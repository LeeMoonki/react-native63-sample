import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabParamList } from '../BottomNavigator/types';

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
  Counter: undefined;
};

export type BottomTabProps = StackScreenProps<RootStackParamList, 'BottomTab'>;

export type CounterProps = StackScreenProps<RootStackParamList, 'Counter'>;
