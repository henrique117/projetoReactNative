import { StackNavigationProp } from "@react-navigation/stack";

// Login Stack
export type LoginStackParamList = {
  Login: undefined;
  Cadastrar: undefined;
}

type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>

export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

export type ChatStackParamList = {
  Chat: undefined
  EnviarMensagem: undefined
}
type ChatScreenNavigationProp = StackNavigationProp<ChatStackParamList, 'Chat'>

export type ChatTypes = {
  navigation: ChatScreenNavigationProp
}

export type PrincipalStackParamList = {
  Chat: undefined
  Perfil: undefined;
  Home: undefined;
  Map: undefined;
  Test: undefined;
  Surprise: undefined;
  Arquivo: undefined;
  Camera: undefined;
  EnviarMensagem: undefined;
  QR: undefined;
}
type PrincipalScreenNavigationProp = StackNavigationProp<PrincipalStackParamList, 'Perfil'>

export type PrincipalTypes = {
  navigation: PrincipalScreenNavigationProp
}
  