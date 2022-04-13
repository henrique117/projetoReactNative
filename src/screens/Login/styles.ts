import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.black,
        marginBottom: 20,
    },
    formRow: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.black,
    },
    icon: {
        fontSize: 24,
        color: colors.ciano,
        padding: 10,
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: '80%'
    }
})

export default styles