import React, { useState, useEffect } from 'react'
import { View, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons'
import { ButtonComp, LoadingComp } from '../../components';
import styles from "./styles"
import { LoginTypes } from '../../types/Screen.types';
import { useAuth } from "../../hook/auth";
import { IRegister } from "../../interfaces/User.interface";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.interface";

export default function Cadastrar({ navigation }: LoginTypes) {

    const { register } = useAuth();
    const [data, setData] = useState<IRegister>();
    const [isLoading, setIsLoading] = useState(true);

    function handleLogin() {
        navigation.navigate("Login");
    }

    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }

    async function handleRegister() {
        try {
            setIsLoading(true);
            if (data?.email && data.name && data.password) {
                await register(data);
            } else {
                Alert.alert("Preencha todos os campos!!!");
            }
        } catch (error) {
            const err = error as AxiosError;
            const data = err.response?.data as IResponse;
            let message = "";
            if (data.data) {
                for (const [key, value] of Object.entries(data.data)) {
                    message = `${message} ${value}`;
                }
            }
            Alert.alert(`${data.message} ${message}`);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [])

    return (
        <>
            {isLoading ? (
                <LoadingComp />
            ) : (
                <View style={styles.container}>
                    <KeyboardAvoidingView>
                        <View>
                            <ButtonComp title="Cadastrar" type="cad" onPress={handleRegister} />
                        </View>
                        <View style={styles.generalView}>
                            <View style={styles.formRow}>
                                <Ionicons name="person" style={styles.icon} />
                                <TextInput 
                                    style={styles.input} 
                                    placeholder="Nome" 
                                    onChangeText={(i) => handleChange({ name: i })} 
                                />
                            </View>
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
                        <ButtonComp title="Ja tem uma conta? Faça Login!" type="down" onPress={handleLogin} />
                    </KeyboardAvoidingView>
                </View>
            )}
        </>
    )}