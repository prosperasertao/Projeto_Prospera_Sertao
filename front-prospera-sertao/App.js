import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Btn_create_account from './src/components/button';
import Form from './src/components/form'


export default function App() {

return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#033428" barStyle="light-content"></StatusBar>
      <Btn_create_account></Btn_create_account>
      <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033428',
    paddingTop:50,
  },
});
