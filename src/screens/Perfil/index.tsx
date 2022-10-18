import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import IconButton from "../../components/IconButton";
import { PrincipalTypes } from "../../types/Screen.types";
import * as Notifications from 'expo-notifications';
import {registerForPushNotificationsAsync} from "../../services/data/Push";
import { useAuth } from "../../hook/auth";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  })
});
 
export default function Perfil({ navigation }: PrincipalTypes) {

  async function handleHome() {
    navigation.navigate("Home")
  }

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ 
        backgroundColor: colors.backDarkGreen,
        width: '100%',
        paddingTop: 70,
      }}>
        <View style={styles.icon}>
          <Button title="Sair" type="padraoBlue" onPress={() => navigation.navigate('Sair')} />
        </View>
      </View>
      <Text style={styles.textoTitle}>PERFIL</Text>
      <View style={styles.generalViewButtons}>
        <Image style={styles.foto} source={require("../../assets/chopper.png")}></Image>
        <Text style={[styles.texto, styles.backTexto]}>Henrique</Text>
      </View>
      <View style={styles.generalView}>
        <View style={styles.generalViewButtons}>
          <Button title="AC" type="padraoBlue" onPress={() => navigation.navigate('Acelerometro')} />
          <Button title="VA" type="padraoBlue" onPress={() => navigation.navigate('VA')} />
          <Button title="CH" type="padraoBlue" onPress={() => navigation.navigate('Chat')} />
          <Button title="CA" type="padraoBlue" onPress={() => navigation.navigate('Camera')} />
        </View>
        <View style={styles.generalViewButtons}>
          <Button title="MA" type="padraoBlue" onPress={() => navigation.navigate('Map')} />
          <Button title="AR" type="padraoBlue" onPress={() => navigation.navigate('Arquivo')} />
          <Button title="EM" type="padraoBlue" onPress={() => navigation.navigate('EnviarMensagem')} />
          <Button title="QR" type="padraoBlue" onPress={() => navigation.navigate('QR')} />
        </View>
      </View>
    </View>
  )
}