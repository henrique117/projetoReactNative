import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Hello!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 0, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Texto: {
    fontSize: 40,
    color: "#0000ff",
    textAlign: 'center',
  }

});
