import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconButtonProps } from '../../interfaces/IconButton.interface'
import styles from './styles'
import { Entypo, Ionicons } from '@expo/vector-icons'

export default function IconButton({onPress, type, ...rest}: IconButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} {...rest}>
            type == 'home'
                ? <Entypo name="home" style={styles.icon} />
                : <Ionicons name="person" style={styles.icon} />
        </TouchableOpacity>
    )
}