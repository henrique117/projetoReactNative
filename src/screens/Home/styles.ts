import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.backGreen,
  },

  generalView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    marginTop: 10
  },

  icon: {
    color: colors.botaoAzul,
    fontSize: 30,
    marginBottom: 10,
    marginLeft: 20
  },

  texto: {
    fontSize: 36,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },

  textoTitle: {
    fontSize: 56,
    color: colors.white,
    fontWeight: 'bold'
  },
})

export default styles;