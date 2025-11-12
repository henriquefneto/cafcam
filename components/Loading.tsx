import { ActivityIndicator, View } from "react-native";

import global from "../assets/styles/global";

export default function Loading() {
  return (
    <View style={global.container}>
      <ActivityIndicator />
    </View>
  );
}
