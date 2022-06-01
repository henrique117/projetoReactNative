import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

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
    button: {
        marginTop: 200
    }
});

export default styles