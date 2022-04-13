import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons'
import Button from '../../components/Button';
import styles from "./styles"

export default function Cadastrar() {

    async function handleSignIn() {
        console.log("Cadastrado");
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastrar</Text>
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
                <Button title="Cadastrar" type="ciano" onPress={handleSignIn} />
                <Button title="Ja tem uma conta? Faça Login!" type="ciano" onPress={handleSignIn} />
            </KeyboardAvoidingView>
        </View>
    )}