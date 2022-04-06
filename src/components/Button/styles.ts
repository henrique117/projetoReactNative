import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    buttonBlack: {
      backgroundColor: colors.black,
      borderRadius: 5,
      margin: 10
    },
    buttonWhite: {
      backgroundColor: colors.white,
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
    }
  })
  
  export default styles