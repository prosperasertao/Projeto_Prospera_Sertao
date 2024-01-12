import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import CreateAccount from './src/pages/CreateAccount'
import Login from './src/pages/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#033428" barStyle="light-content"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false, headerBackVisible: false, }}/>
        </Stack.Navigator>
      </NavigationContainer>
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
