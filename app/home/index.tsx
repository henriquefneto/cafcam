import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
//import Header from "../components/Header";
import { router } from "expo-router";
import { theme } from "@/assets/styles/colors";

export default function index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("/products")}
      >
        <Text style={styles.buttonText}>Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("/suppliers")}
      >
        <Text style={styles.buttonText}>Fornecedores</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("/profile")}
      >
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8E6A1",
    //justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    width: "100%",
    backgroundColor: theme.colors.primary,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
