import React, { useState, useEffect } from 'react'
import { View, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import Button from '../../components/Button';
import styles from "./styles"
import { LoginTypes } from '../../types/Screen.types';
import { useAuth } from "../../hook/auth";
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { AxiosError } from "axios";

export default function Login({ navigation }: LoginTypes) {

    const { signIn } = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);

    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item });
    }

    async function handleSignIn() {
        try {
            setIsLoading(true);
            if (data?.email && data.password) {
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos!!!");
                setIsLoading(false);
            }
            } catch (error) {
                const err = error as AxiosError;
                const data = err.response?.data as IUser;
                let message = "";
                if (data.data) {
                    for (const [key, value] of Object.entries(data.data)) {
                        message = `${message} ${value}`;
                    }
                }
            Alert.alert(`${data.message} ${message}`);
            setIsLoading(false);
        }
    }

    function handleCadastrar() {
        navigation.navigate("Cadastrar");
    }

    useEffect(() => {
        setIsLoading(false);
    }, []);

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
                            onChangeText={(i) => handleChange({ email: i })}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <Entypo name="key" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder='Senha'
                            secureTextEntry={true}
                            autoCapitalize='none'
                            onChangeText={(i) => handleChange({ password: i })}
                        />
                    </View>
                </View>
                <Button title="Ainda não possui uma conta? Cadastre-se!" type="down" onPress={handleCadastrar} />
            </KeyboardAvoidingView>
        </View>
    )
}