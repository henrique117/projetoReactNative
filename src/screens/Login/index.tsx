import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import Button from '../../components/Button';

export default function Login() {

    async function handleSignIn() {
        console.log("Login");
    }

    return (
        <View>
            <KeyboardAvoidingView>
                <Text>Login</Text>
                <View>
                    <MaterialCommunityIcons name="email" size={24} color="0FF" />
                    <TextInput
                        placeholder='Email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                </View>
                <View>
                    <Entypo name="key" size={24} color="black" />
                    <TextInput
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