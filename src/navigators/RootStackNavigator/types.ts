import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabParamList } from '../BottomNavigator/types';
import { SignupStackParamList } from '../SignupStackNavigator/types';

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
  SignupStack: NavigatorScreenParams<SignupStackParamList>;
  Counter: undefined;
  Login: undefined;
  FullScreenModal: undefined;
  AddTodoModal: undefined;
};

export type BottomTabProps = StackScreenProps<RootStackParamList, 'BottomTab'>;

export type CounterProps = StackScreenProps<RootStackParamList, 'Counter'>;

export type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;

export type FullScreenModalProps = StackScreenProps<
  RootStackParamList,
  'FullScreenModal'
>;

export type AddTodoModalProps = StackScreenProps<
  RootStackParamList,
  'AddTodoModal'
>;

export type SignupStackProps = StackScreenProps<
  RootStackParamList,
  'SignupStack'
>;
