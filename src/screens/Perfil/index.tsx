import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import IconButton from "../../components/IconButton";
import { LoginTypes } from "../../types/Screen.types";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function Perfil({ navigation }: LoginTypes) {

  async function handleHome() {
    console.log("Home")
  }

  async function handlePerfil() {
    navigation.navigate("Perfil")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ 
        backgroundColor: colors.backDarkGreen,
        width: '100%',
        paddingTop: 120,
        flexDirection: 'row',
      }}>
        <View style={styles.icon}>
          <IconButton onPress={handleHome} type='home'></IconButton>
        </View>
        <View style={styles.icon}>
          <IconButton onPress={handlePerfil} type='perfil'></IconButton>
        </View>
      </View>
      <Text style={styles.textoTitle}>PERFIL</Text>
      <View style={styles.generalView}>
        <Image style={styles.foto} source={require("../../assets/chopper.png")}></Image>
        <Text style={[styles.texto, styles.backTexto]}>Henrique</Text>
      </View>
      <View style={styles.generalView}>
        <Button title="Salvar" type="padraoBlue" onPress={() => console.log("Salvar")} />
        <Button title="Sair" type="padraoBlue" onPress={() => console.log("Sair")} />
      </View>
    </SafeAreaView>
  )
}