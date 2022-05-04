import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Henrique Assis Moreira</Text>
      <Image source={require("../../assets/chopper.png")}>
      </Image>
        <Button
          title="Salvar"
          type="padraoBlue"
          onPress={() => console.log("Salvar")}
        />
        <Button title="Sair" type="padraoBlue" onPress={() => console.log("Sair")} />
    </View>
  );
}