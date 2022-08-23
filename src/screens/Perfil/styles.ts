import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.backGreen,
  },

  generalView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  generalViewButtons: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  icon: {
    marginBottom: 10,
    marginLeft: 20
  },

  texto: {
    fontSize: 30,
    color: colors.backDarkGreen,
    fontWeight: 'bold'
  },

  textoTitle: {
    fontSize: 64,
    color: colors.backDarkGreen,
    fontWeight: 'bold'
  },

  backTexto: {
    padding: 10,
    backgroundColor: colors.botaoAzul,
    borderRadius: 10,
    borderColor: colors.backDarkGreen,
    borderWidth: 1.5,
    marginBottom: 40
  },

  foto: {
    height: 170,
    width: 170,
    borderRadius: 100,
    borderColor: colors.backDarkGreen,
    borderWidth: 1.5,
    marginVertical: 20
  }
})

export default styles;