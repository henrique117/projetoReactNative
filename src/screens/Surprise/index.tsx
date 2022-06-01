import React, { useRef } from "react";
import { View, Text, Animated, SafeAreaView, StyleSheet, Image } from "react-native";
import Button from "../../components/Button";
import colors from "../../styles/colors";
 
export default function Surprise() {

    const texto1 = useRef(new Animated.Value(0)).current
    const texto2 = useRef(new Animated.Value(0)).current
    const heart = useRef(new Animated.Value(0)).current
    const button = useRef(new Animated.Value(1)).current

    const handleSurprise = () => {
        Animated.sequence([
            Animated.timing(button, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }),
            Animated.timing(texto1, {
                delay: 2000,
                toValue: 1,
                duration: 1500,
                useNativeDriver: false
            }),
            Animated.timing(texto2, {
                delay: 2000,
                toValue: 1,
                duration: 1500,
                useNativeDriver: false
            }),
            Animated.timing(heart, {
                delay: 1000,
                toValue: 1,
                duration: 1500,
                useNativeDriver: false
            })
        ]).start()
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.box, { opacity: texto1 }]}>
                <Text style={{
                    fontSize: 45,
                    color: colors.backDarkGreen,
                    fontWeight: 'bold',
                    marginTop: 200,
                    textAlign: 'center',
                    position: 'absolute',
                    top: -400,
                    right: -140
                }}>Irys Salvineco,</Text>
            </Animated.View>
            <Animated.View style={[styles.box, { opacity: texto2 }]}>
                <Text style={{
                    fontSize: 40,
                    color: colors.backDarkGreen,
                    fontWeight: 'bold',
                    marginTop: 200,
                    textAlign: 'center',
                    position: 'absolute',
                    top: -20,
                    right: -100,
                }}>Eu te odeio!!</Text>
            </Animated.View>
            <Animated.Image style={[styles.box, {
                opacity: heart,
                width: 200,
                height: 200,
                padding: 20,
                position: 'absolute'
            }]} source={require("../../assets/heart.png")}></Animated.Image>
            <Animated.View style={{
                position: 'absolute',
                opacity: button,
            }}>
                <Button title="?" type="padraoBlue" onPress={handleSurprise} />
            </Animated.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.backGreen
    },
    box: {
        padding: 20,
    },
});