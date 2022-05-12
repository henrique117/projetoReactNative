import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { Entypo, Ionicons } from "@expo/vector-icons"
import colors from "../../styles/colors";
 
export default function Home() {
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
      <ImageBackground source={require('../../assets/cuteEarth.png')} style={styles.generalView}>
        <Text style={styles.texto}>BEM VINDOS AO</Text>
        <Text style={styles.textoTitle}>CURIOUS.GG</Text>
        <Text style={styles.texto}>O QUE VOCÊ PRETENDE FAZER?</Text>
      </ImageBackground>
      <View style={styles.generalView}>
        <Button title="CURIOSIDADES" type="padraoBlue" onPress={() => console.log("Salvar")} />
        <Button title="DAR IDEIAS" type="padraoBlue" onPress={() => console.log("Sair")} />
      </View>
    </View>
  );
}