import { StyleSheet, Text, View } from 'react-native';
import Sum from './components/Sum';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to the Sum App</Text>
      </View>
      <Sum/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'serif',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleContainer: {
    flex: .2,
    padding: 40,
  }
});
