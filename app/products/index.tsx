import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  Button,
  Alert,
} from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons";
import global from "@/assets/styles/global";
import dataMock from "../../services/MOCK_DATA.json";
import { theme } from "@/assets/styles/colors";
import useCollection from "@/firebase/hooks/useCollection";
import useDocument from "@/firebase/hooks/useDocument";

export default function Index() {
  const { showActionSheetWithOptions } = useActionSheet();
  const [data, setData] = useState(dataMock);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(dataMock);

  const { create, update, remove } = useCollection("products");

  const [modalVisible, setModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    salePrice: "",
    purchasePrice: "",
    unit: "",
    inventory: "",
  });

  useEffect(() => {
    if (search === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [search, data]);

  const handleAddProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.salePrice ||
      !newProduct.purchasePrice ||
      !newProduct.unit ||
      !newProduct.inventory
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const newItem = {
      ...newProduct,
      salePrice: parseFloat(newProduct.salePrice),
      purchasePrice: parseFloat(newProduct.purchasePrice),
      inventory: parseInt(newProduct.inventory),
    };

    setData((prev) => [...prev, newItem]);
    setNewProduct({
      name: "",
      salePrice: "",
      purchasePrice: "",
      unit: "",
      inventory: "",
    });
    setModalVisible(false);
  };

  const handleItemPress = (item: any) => {
    const options = ["Cancelar", "Editar", "Excluir"];
    const cancelButtonIndex = 0;
    const destructiveButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title: item.name,
        message: "Selecione uma ação",
      },
      (buttonIndex) => {
        if (buttonIndex === 1) Alert.alert("Editar", item.name);
        else if (buttonIndex === 2)
          setData((prev) => prev.filter((p) => p.name !== item.name));
      }
    );
  };

  return (
    <View style={global.container}>
      {/* 🔍 Search e botão + */}
      <View style={global.searchContainer}>
        <TextInput
          style={global.searchBar}
          placeholder="Buscar produto..."
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handleItemPress(item)}
          >
            <Text style={global.title}>{item.name}</Text>
            <Text style={global.content}>Valor de Venda: {item.salePrice}</Text>
            <Text style={global.content}>
              Valor de Compra: {item.purchasePrice}
            </Text>
            <Text style={global.content}>Unidade: {item.unit}</Text>
            <Text style={global.content}>Estoque: {item.inventory}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Modal de adicionar produto */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={global.title}>Adicionar Produto</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={newProduct.name}
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, name: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Preço de Venda"
              keyboardType="numeric"
              value={newProduct.salePrice}
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, salePrice: text })
              }
              onPress={async () => {
                try {
                  await create(setNewProduct);
                } catch (error: any) {
                  Alert.alert("Login error", error.toString());
                }
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Preço de Compra"
              keyboardType="numeric"
              value={newProduct.purchasePrice}
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, purchasePrice: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Unidade"
              value={newProduct.unit}
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, unit: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Estoque"
              keyboardType="numeric"
              value={newProduct.inventory}
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, inventory: text })
              }
            />

            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Adicionar" onPress={handleAddProduct} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginLeft: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 10,
  },
  itemContainer: {
    marginTop: 16,
    backgroundColor: theme.colors.secondary,
    borderRadius: 8,
    padding: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: theme.colors.secondary,
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
