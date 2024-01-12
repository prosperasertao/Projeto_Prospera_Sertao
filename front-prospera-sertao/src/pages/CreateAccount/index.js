import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, KeyboardAvoidingView, TextInput } from "react-native";
import styles from "./style";

export default function LoginPage({ navigation }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [viewPass, setViewPass] = useState(true);
  const [error, setError] = useState(null);

  function validationCreateAccount() {
    if (!inputEmail.trim() || !inputPassword.trim()) {
      setError("Por Favor, Preencha Seus Dados Para Criar Sua Conta");
    } else {
      setError(null);
    }
  }
  return (
    <View style={styles.containerPage}>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.form}>
          <View>
            <Text style={styles.titleForm}>CRIAR CONTA</Text>
            <Image source={require("../../../assets/prosp_sertao.png")} style={styles.logo}/>
            <KeyboardAvoidingView behavior="padding">
              <TextInput
                style={styles.inputField}
                placeholder="Digite seu Email"
                placeholderTextColor="#a9a9a9"
                keyboardType="default"
                value={inputEmail}
                onChangeText={(text) => setInputEmail(text)}
              />
            </KeyboardAvoidingView>

            <KeyboardAvoidingView behavior="padding">
              <TextInput
                style={styles.inputField}
                placeholder="Crie sua Senha"
                placeholderTextColor="#a9a9a9"
                keyboardType="default"
                value={inputPassword}
                onChangeText={(text) => setInputPassword(text)}
                secureTextEntry={viewPass}
              />
            </KeyboardAvoidingView>

            <KeyboardAvoidingView behavior="padding">
              <TextInput
                style={styles.inputField}
                placeholder="Confirme sua Senha"
                placeholderTextColor="#a9a9a9"
                keyboardType="default"
                value={inputPassword}
                secureTextEntry={viewPass}
                onChangeText={(text) => setInputPassword(text)}
              />
              <Text style={styles.btnViewPasswoord} onPress={() => setViewPass(!viewPass)}>Mostrar</Text>
            </KeyboardAvoidingView>

            <View style={styles.btnCreateContainer}>
              <TouchableOpacity style={styles.btnCreate}>
                <Text style={styles.btnCreate} onPress={validationCreateAccount}>CRIAR</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.errorMessage} value={error}>{error}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}