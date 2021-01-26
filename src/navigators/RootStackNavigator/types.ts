import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabParamList } from '../BottomNavigator/types';
import { SignupStackParamList } from '../SignupStackNavigator/types';

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
  Counter: undefined;
  Login: undefined;
  SignupStack: NavigatorScreenParams<SignupStackParamList>;
};

export type BottomTabProps = StackScreenProps<RootStackParamList, 'BottomTab'>;

export type CounterProps = StackScreenProps<RootStackParamList, 'Counter'>;

export type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;

export type SignupStackProps = StackScreenProps<
  RootStackParamList,
  'SignupStack'
>;
