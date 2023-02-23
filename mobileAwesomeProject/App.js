import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from './app/src/main/res/raw/amplifyconfiguration.json';

Amplify.configure(awsconfig);

const myAPI = "helloWorldApi";
const path = "/helloWorld";

export default function App() {
  const [message, setMessage] = useState("");

  const getHelloWorld = () => {
    API
      .get(myAPI, path)
      .then(response => {
        console.log(response);
        setMessage(response);
      })
      .catch(error => {
        console.log(error);
      })
  };

  useEffect(() => {
    getHelloWorld();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <StatusBar style="auto" />
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
});
