import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PerfilScreen, HomeScreen, MapScreen, TestScreen, SurpriseScreen, CameraScreen, ArquivoScreen, EnviarMensagemScreen, ChatScreen, QrCodeScreen } from "../screens";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Surprise" component={SurpriseScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Arquivo" component={ArquivoScreen} />
        <Stack.Screen name="EnviarMensagem" component={EnviarMensagemScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="QR" component={QrCodeScreen} />
    </Stack.Navigator>
  );
}