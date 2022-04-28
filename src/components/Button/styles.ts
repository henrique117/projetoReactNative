import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    buttonDown: {
      backgroundColor: colors.back,
      borderRadius: 5,
      margin: 10
    },
    buttonLogcad: {
      backgroundColor: colors.back,
      borderRadius: 5,
      margin: 10
    },
    buttonCiano: {
      backgroundColor: colors.ciano,
      borderRadius: 5,
      margin: 10
    },
    text: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
      fontSize: 18
    },

    textLogcad: {
      color: colors.backDarkGreen,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 84,
    },

    textDown: {
      color: colors.backDarkGreen,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
    }
  })
  
  export default styles