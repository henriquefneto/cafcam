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
import suppliersMock from "../../services/MOCK_DATA_SUPPLIER.json";
import { theme } from "@/assets/styles/colors";

interface Supplier {
  name: string;
  cpf_cnpj: string;
  city: string;
  phone: string;
  email: string;
}

export default function Fornecedores() {
  const { showActionSheetWithOptions } = useActionSheet();
  const [data, setData] = useState<Supplier[]>(suppliersMock);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<Supplier[]>(suppliersMock);

  const [modalVisible, setModalVisible] = useState(false);
  const [newSupplier, setNewSupplier] = useState<Supplier>({
    name: "",
    cpf_cnpj: "",
    city: "",
    phone: "",
    email: "",
  });

  // 🔍 Atualiza lista filtrada conforme busca
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

  // ➕ Adiciona novo fornecedor
  const handleAddSupplier = () => {
    if (
      !newSupplier.name ||
      !newSupplier.cpf_cnpj ||
      !newSupplier.city ||
      !newSupplier.phone ||
      !newSupplier.email
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    setData((prev) => [...prev, newSupplier]);
    setNewSupplier({
      name: "",
      cpf_cnpj: "",
      city: "",
      phone: "",
      email: "",
    });
    setModalVisible(false);
  };

  // ⚙️ Menu de ações
  const handleItemPress = (item: Supplier) => {
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
        if (buttonIndex === 1) {
          Alert.alert("Editar", `${item.name} (função em desenvolvimento)`);
        } else if (buttonIndex === 2) {
          setData((prev) => prev.filter((s) => s.name !== item.name));
        }
      }
    );
  };

  return (
    <View style={global.container}>
      {/* 🔍 Search e botão + */}
      <View style={global.searchContainer}>
        <TextInput
          style={global.searchBar}
          placeholder="Buscar fornecedor..."
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

      {/* 📦 Lista de fornecedores */}
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handleItemPress(item)}
          >
            <Text style={global.title}>{item.name}</Text>
            <Text style={global.content}>CNPJ/CPF: {item.cpf_cnpj}</Text>
            <Text style={global.content}>Cidade: {item.city}</Text>
            <Text style={global.content}>Telefone: {item.phone}</Text>
            <Text style={global.content}>Email: {item.email}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* 🪄 Modal de adicionar fornecedor */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Adicionar Fornecedor</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={newSupplier.name}
              onChangeText={(text) =>
                setNewSupplier({ ...newSupplier, name: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="CPF/CNPJ"
              value={newSupplier.cpf_cnpj}
              onChangeText={(text) =>
                setNewSupplier({ ...newSupplier, cpf_cnpj: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Cidade"
              value={newSupplier.city}
              onChangeText={(text) =>
                setNewSupplier({ ...newSupplier, city: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              value={newSupplier.phone}
              onChangeText={(text) =>
                setNewSupplier({ ...newSupplier, phone: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={newSupplier.email}
              onChangeText={(text) =>
                setNewSupplier({ ...newSupplier, email: text })
              }
            />

            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Adicionar" onPress={handleAddSupplier} />
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
