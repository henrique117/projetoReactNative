import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { Entypo, Ionicons } from "@expo/vector-icons"
import colors from "../../styles/colors";
 
export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={{ 
        backgroundColor: colors.backDarkGreen,
        width: '100%',
        paddingTop: 120,
        flexDirection: 'row',
      }}>
        <Entypo name="home" style={styles.icon} />
        <Ionicons name="person" style={styles.icon} />
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
    </View>
  );
}