import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import Button from '../../components/Button';
import styles from "./styles"
import { LoginTypes } from '../../types/Screen.types';

export default function Login({ navigation }: LoginTypes) {

    async function handleSignIn() {
        navigation.navigate("Tab");
    }

    function handleCadastrar() {
        navigation.navigate("Cadastrar");
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
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
                <Button title="Login" type="ciano" onPress={handleSignIn} />
                <Button title="Cadastre-se" type="ciano" onPress={handleCadastrar} />
            </KeyboardAvoidingView>
        </View>
    )
}