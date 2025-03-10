import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: 170, height: 170, backgroundColor: 'red' }} />
      <View style={{ width: 170, height: 170, backgroundColor: 'green' }} />
      <View style={{ width: 170, height: 170, backgroundColor: 'blue' }} />
      <View style={{ width: 170, height: 170, backgroundColor: 'orange' }} />
      <View style={{ width: 170, height: 170, backgroundColor: 'yellow' }} />
      <View style={{ position: 'absolute', zIndex: -1, top: 20, left: 0, width: 100, height: 100, backgroundColor: 'black' }} />
      <View style={{ width: 170, height: 170, backgroundColor: 'gray' }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    // alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    rowGap: 20,
    columnGap: 30,
    zIndex: 2,
  },
});

