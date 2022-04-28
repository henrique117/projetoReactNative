import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ButtonProps } from '../../interfaces/Button.interface'
import styles from './styles'

export default function Button({onPress, title, type, ...rest}:ButtonProps) {
    return (
        <TouchableOpacity
            style={
                type == 'ciano'
                    ? styles.buttonCiano
                    : type == 'logcad'
                    ? styles.buttonLogcad
                    : styles.buttonDown
            }
            onPress={onPress}
            {...rest}
        >
            <Text 
                style={
                    type == 'logcad'
                        ? styles.textLogcad
                        : type == 'down'
                        ? styles.textDown
                        : styles.text
                }>
                    {title}                
            </Text>
        </TouchableOpacity>
    )
}