import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackNavigator/types';

export type BottomTabParamList = {
  Home: undefined;
  TodoListDone: undefined;
};

type HomeScreenRouteProp = RouteProp<BottomTabParamList, 'Home'>;
type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;
export type HomeProps = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

type TodoListDoneScreenRouteProp = RouteProp<
  BottomTabParamList,
  'TodoListDone'
>;
type TodoListDoneScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'TodoListDone'>,
  StackNavigationProp<RootStackParamList>
>;
export type TodoListDoneProps = {
  route: TodoListDoneScreenRouteProp;
  navigation: TodoListDoneScreenNavigationProp;
};
