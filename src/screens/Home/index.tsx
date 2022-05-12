import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { Entypo, Ionicons } from "@expo/vector-icons"
import colors from "../../styles/colors";
import { LoginTypes } from "../../types/Screen.types";
 
export default function Home({ navigation }: LoginTypes) {
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
        <Button title="CURIOSIDADES" type="padraoBlue" onPress={() => console.log("Curiosidades")} />
        <Button title="PERFIL" type="padraoBlue" onPress={() => navigation.navigate('Perfil')} />
      </View>
    </View>
  );
}