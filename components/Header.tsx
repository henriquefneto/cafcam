import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { router, useRouter } from "expo-router";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => router.navigate("/products")}
      >
        <Text style={styles.tabText}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => router.navigate("/suppliers")}
      >
        <Text style={styles.tabText}>Fornecedores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => router.navigate("/suppliers")}
      >
        <Text style={styles.tabText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
