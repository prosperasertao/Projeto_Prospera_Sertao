import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Btn_create_account() {

  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn}>CRIAR CONTA</Text>
      </TouchableOpacity>
    </View>
  );
}