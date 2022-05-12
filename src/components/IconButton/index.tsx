import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { IconButtonProps } from '../../interfaces/IconButton.interface'
import styles from './styles'
import { Entypo, Ionicons } from '@expo/vector-icons'

export default function IconButton({onPress, type, ...rest}: IconButtonProps) {
    return (
        <View>
            <TouchableOpacity onPress={onPress} {...rest}>
                <Entypo name="home" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} {...rest}>
                <Ionicons name="person" style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}