import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackNavigator/types';

export type SignupStackParamList = {
  Info: undefined;
  Complete: undefined;
};

type InfoScreenRouteProp = RouteProp<SignupStackParamList, 'Info'>;
type InfoScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SignupStackParamList, 'Info'>,
  StackNavigationProp<RootStackParamList>
>;
export type InfoProps = {
  route: InfoScreenRouteProp;
  navigation: InfoScreenNavigationProp;
};

type CompleteScreenRouteProp = RouteProp<SignupStackParamList, 'Complete'>;
type CompleteScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SignupStackParamList, 'Complete'>,
  StackNavigationProp<RootStackParamList>
>;
export type CompleteProps = {
  route: CompleteScreenRouteProp;
  navigation: CompleteScreenNavigationProp;
};
