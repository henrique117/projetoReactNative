import React from "react";
import { View, Text, TextInput } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Henrique Assis Moreira</Text>
        <CardSocial>
          <>
            <FontAwesome5 name="facebook" />
            <TextInput placeholder="Facebook" />
          </>
        </CardSocial>
        <CardSocial>
          <>
            <FontAwesome5 name="instagram" />
            <TextInput placeholder="Instagram" />
          </>
        </CardSocial>
        <CardSocial>
          <>
            <FontAwesome5 name="linkedin" />
            <TextInput placeholder="Linkedin" />
          </>
        </CardSocial>
        <Button
          title="Salvar"
          type="ciano"
          onPress={() => console.log("Salvar")}
        />
        <Button
          title="Alterar Senha"
          type="ciano"
          onPress={() => console.log("Alterar Senha")}
        />
        <Button title="Sair" type="ciano" onPress={() => console.log("Sair")} />
    </View>
  );
}