import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import IconButton from "../../components/IconButton";
import { PrincipalTypes } from "../../types/Screen.types";
 
export default function Perfil({ navigation }: PrincipalTypes) {

  async function handleHome() {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <View style={{ 
        backgroundColor: colors.backDarkGreen,
        width: '100%',
        paddingTop: 140,
      }}>
        <View style={styles.icon}>
          <IconButton onPress={handleHome} type='home'></IconButton>
        </View>
      </View>
      <Text style={styles.textoTitle}>PERFIL</Text>
      <View style={styles.generalViewButtons}>
        <Image style={styles.foto} source={require("../../assets/chopper.png")}></Image>
        <Text style={[styles.texto, styles.backTexto]}>Henrique</Text>
      </View>
      <View style={styles.generalView}>
        <View style={styles.generalViewButtons}>
          <Button title="TE" type="padraoBlue" onPress={() => navigation.navigate('Test')} />
          <Button title="??" type="padraoBlue" onPress={() => navigation.navigate('Surprise')} />
          <Button title="CH" type="padraoBlue" onPress={() => navigation.navigate('Chat')} />
          <Button title="CA" type="padraoBlue" onPress={() => navigation.navigate('Camera')} />
        </View>
        <View style={styles.generalViewButtons}>
          <Button title="MA" type="padraoBlue" onPress={() => navigation.navigate('Map')} />
          <Button title="AR" type="padraoBlue" onPress={() => navigation.navigate('Arquivo')} />
          <Button title="EM" type="padraoBlue" onPress={() => navigation.navigate('EnviarMensagem')} />
          <Button title="QR" type="padraoBlue" onPress={() => null} />
        </View>
      </View>
    </View>
  )
}