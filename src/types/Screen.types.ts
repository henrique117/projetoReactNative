import { StackNavigationProp } from "@react-navigation/stack";

// Login Stack
export type LoginStackParamList = {
  Login: undefined;
  Cadastrar: undefined;
  Perfil: undefined;
  Home: undefined;
  Map: undefined;
}

type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}