import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../assets/styles/colors"

export default function Layout() {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Stack>
          {/* 🏠 Tela inicial */}
          <Stack.Screen
            name="index"
            options={{
              title: "Início",
              headerShown: true,
              headerTitleAlign: "center",
            }}
          />

          {/* 🛒 Tela de produtos */}
          <Stack.Screen
            name="products/index"
            options={{
              title: "Produtos",
              headerTitleAlign: "center",
            }}
          />

          {/* 🚚 Tela de fornecedores */}
          <Stack.Screen
            name="suppliers/index"
            options={{
              title: "Fornecedores",
              headerTitleAlign: "center",
            }}
          />

          {/* 👤 Tela de perfil */}

          <Stack.Screen
            name="profile/index"
            options={{
              title: "Perfil",
              headerTitleAlign: "center",
            }}
          />
        </Stack>
      </SafeAreaView>
    </ActionSheetProvider>
  );
}
