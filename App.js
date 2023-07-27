import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import BackgroundIMG from './assets/BackgroundIMG.png'
import { StatusBar } from 'expo-status-bar';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundIMG}
        resizeMode='cover'
        style={styles.image}
      >
        <ToDoList />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
