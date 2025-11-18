import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";

import global from "../assets/styles/global";
import Loading from "../components/Loading";
import StyledButton from "../components/StyledButton";
import useAuth from "../firebase/hooks/useAuth";

export default function _screen() {
  const { user, loading, registerUser } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.replace("/home");
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <View style={global.container}>
      <Text style={global.title}>Registro</Text>

      <TextInput
        style={global.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={global.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <StyledButton
        title="Registrar"
        onPress={async () => {
          try {
            await registerUser(email, password);
            router.push("/");
          } catch (error: any) {
            Alert.alert("Login error", error.toString());
          }
        }}
        style={{ marginTop: 12 }}
      />
      <Text onPress={() => router.navigate("/")}>Login</Text>
    </View>
  );
}
