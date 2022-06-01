import React, { useRef } from "react";
import { View, Text, Animated, SafeAreaView } from "react-native";
import { LoginTypes } from "../../types/Screen.types";
import styles from "./style";
import Button from "../../components/Button";
import colors from "../../styles/colors";
 
export default function Test({ navigation }: LoginTypes) {

    const altura = useRef(new Animated.Value(0)).current;
    const largura = useRef(new Animated.Value(0)).current;
    const texto = useRef(new Animated.Value(0)).current

    const aumentar = () => {
        Animated.timing(largura, {
            toValue: 200,
            duration: 2000,
            useNativeDriver: false
        }).start()
        Animated.timing(altura, {
            toValue: 200,
            duration: 2000,
            useNativeDriver: false
        }).start()
    };

    const diminuir = () => {
        Animated.timing(largura, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
        }).start()
        Animated.timing(altura, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
        }).start()
        Animated.sequence([
            Animated.timing(texto, {
                delay: 2000,
                toValue: 1,
                duration: 1500,
                useNativeDriver: false
            }),
            Animated.timing(texto, {
                delay: 1000,
                toValue: 0,
                duration: 2000,
                useNativeDriver: false
            })
        ]).start()
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.Image style={[styles.box, {
                width: largura,
                height: altura,
            }]} source={require("../../assets/cuteEarth.png")}>
            </Animated.Image>
            <Animated.View style={{ opacity: texto }}>
                <Text style={{
                    fontSize: 28,
                    color: colors.backDarkGreen,
                    fontWeight: 'bold',
                    marginTop: 200,
                    textAlign: 'center'
                }}>Me da um 10 lazinho por favor...</Text>
            </Animated.View>
            <View style={styles.button}>
                <Button title="Aumentar" type="padraoBlue" onPress={aumentar} />
                <Button title="Diminuir" type="padraoBlue" onPress={diminuir} />
            </View>
        </SafeAreaView>
    )
}