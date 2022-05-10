import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ButtonProps } from '../../interfaces/Button.interface'
import colors from '../../styles/colors'
import styles from './styles'

export default function Button({onPress, title, type, ...rest}:ButtonProps) {
    return (
        <TouchableOpacity
            style={
                type == 'ciano'
                    ? styles.buttonCiano
                    : type == 'log'
                    ? styles.buttonLogcad
                    :type == 'cad'
                    ? styles.buttonLogcad
                    :type == 'padraoBlue'
                    ? styles.botaoPadrao
                    : styles.buttonDown
            }
            onPress={onPress}
            {...rest}
        >
            <Text 
                style={
                    type == 'log'
                        ? styles.textLog
                        : type == 'cad'
                        ? styles.textCad
                        : type == 'down'
                        ? styles.textDown
                        : type == 'padraoBlue'
                        ? styles.textPadrao
                        : styles.text
                }>
                    {title}                
            </Text>
        </TouchableOpacity>
    )
}