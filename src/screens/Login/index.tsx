import React from 'react'
import { View, TextInput, KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import Button from '../../components/Button';
import styles from "./styles"
import { LoginTypes } from '../../types/Screen.types';

export default function Login({ navigation }: LoginTypes) {

    async function handleSignIn() {
        navigation.navigate("Home");
    }

    function handleCadastrar() {
        navigation.navigate("Perfil");
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <View>
                    <Button title="Login" type="log" onPress={handleSignIn} />
                </View>
                <View style={styles.generalView}>
                    <View style={styles.formRow}>
                        <MaterialCommunityIcons name="email" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.formRow}>
                        <Entypo name="key" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder='Senha'
                            secureTextEntry={true}
                            autoCapitalize='none'
                        />
                    </View>
                </View>
                <Button title="Ainda não possui uma conta? Cadastre-se!" type="down" onPress={handleCadastrar} />
            </KeyboardAvoidingView>
        </View>
    )
}