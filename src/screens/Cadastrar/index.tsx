import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons'
import Button from '../../components/Button';
import styles from "./styles"
import { LoginTypes } from '../../types/Screen.types';

export default function Cadastrar({ navigation }: LoginTypes) {

    async function handleSignIn() {
        console.log("Cadastrado");
    }

    function handleLogin() {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.loginButton}>
                    <Button title="Cadastrar" type="cad" onPress={handleSignIn} />
                </View>
                <View style={styles.generalView}>
                    <View style={styles.formRow}>
                        <Ionicons name="person" style={styles.icon} />
                        <TextInput style={styles.input} placeholder="Nome" />
                    </View>
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
                <Button title="Ja tem uma conta? Faça Login!" type="down" onPress={handleLogin} />
            </KeyboardAvoidingView>
        </View>
    )}