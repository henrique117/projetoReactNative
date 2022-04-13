import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import Button from '../../components/Button';
import styles from "./styles"

export default function Login() {

    async function handleSignIn() {
        console.log("Login");
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
                <Button title="Cadastre-se" type="ciano" onPress={handleSignIn} />
            </KeyboardAvoidingView>
        </View>
    )
}