import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
