import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginStackParamList } from "../types/Screen.types";
import { LoginScreen, CadastrarScreen, PerfilScreen, HomeScreen, MapScreen, TestScreen, SurpriseScreen } from "../screens";

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Surprise" component={SurpriseScreen} />
    </Stack.Navigator>
  );
}