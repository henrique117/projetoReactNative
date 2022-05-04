import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.back,
        justifyContent: 'center'
    },
    generalView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    formRow: {
        margin: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.backDarkGreen,
        borderRadius: 50,
        backgroundColor: colors.white,
        elevation: 10,
    },
    icon: {
        fontSize: 24,
        color: colors.iconColor,
        padding: 10,
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: '70%',
    },
})

export default styles