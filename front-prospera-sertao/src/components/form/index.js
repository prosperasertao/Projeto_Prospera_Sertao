import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from "react-native";
import styles from "./style"

export default function Form(){

  const [input, setInput] = useState("")
  const [viewPass, setViewPass] = useState(true)

  return(
  <View style={styles.formContainer}>
    <View style={styles.form}>
      <View>
        <Text style={styles.titleForm}>ENTRAR</Text>
        <Image source={require("../../../assets/prosp_sertao.png")} style={styles.logo}/>
        <KeyboardAvoidingView behavior="padding">
        <TextInput style={styles.inputField} placeholder="Digite seu Email" placeholderTextColor="#a9a9a9" keyboardType="default"/>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior="padding">
        <TextInput style={styles.inputField} placeholder="Digite sua Senha" placeholderTextColor="#a9a9a9" keyboardType="default" value={input} secureTextEntry={viewPass} onChangeText={(texto) => setInput(texto)}/>
        <Text style={styles.btnViewPasswoord} onPress={() => setViewPass(!viewPass)}>Mostrar</Text>
        </KeyboardAvoidingView>

        <View style={styles.btnLoginContainer}>
        <TouchableOpacity style={styles.btnLogin}><Text style={styles.btnLogin}>ENTRAR</Text></TouchableOpacity>
        </View>

        <Text style={styles.errorMessage}></Text>
      </View>
    </View>
  </View>
  )
}