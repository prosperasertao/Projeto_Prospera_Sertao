import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, KeyboardAvoidingView, TextInput } from "react-native";
import styles from "./style";

export default function CreateAccountPage({ navigation }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [viewPass, setViewPass] = useState(true);
  const [error, setError] = useState(null);

  function validationLogin() {
    if (!inputEmail.trim() || !inputPassword.trim()) {
      setError("Por Favor, Preencha seu Login e Sua Senha");
    } else {
      setError(null);
    }
  }

  return (
    <View style={styles.containerPage}>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.btnText}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.form}>
          <View>
            <Text style={styles.titleForm}>LOGIN</Text>
            <Image source={require("../../../assets/prosp_sertao.png")} style={styles.logo}/>
            <KeyboardAvoidingView behavior="padding">
              <TextInput
                style={styles.inputField}
                placeholder="Digite seu Email"
                placeholderTextColor="#a9a9a9"
                keyboardType="default"
                onChangeText={(text) => setInputEmail(text)}
                value={inputEmail}
              />
            </KeyboardAvoidingView>

            <KeyboardAvoidingView behavior="padding">
              <TextInput
                style={styles.inputField}
                placeholder="Digite sua Senha"
                placeholderTextColor="#a9a9a9"
                keyboardType="default"
                secureTextEntry={viewPass}
                onChangeText={(text) => setInputPassword(text)}
                value={inputPassword}
              />
              <Text style={styles.btnViewPasswoord} onPress={() => setViewPass(!viewPass)}>Mostrar</Text>
            </KeyboardAvoidingView>

            <View style={styles.btnCreateContainer}>
              <TouchableOpacity style={styles.btnCreate} onPress={validationLogin}>
                <Text style={styles.btnCreate}>ENTRAR</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.errorMessage}>{error}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}