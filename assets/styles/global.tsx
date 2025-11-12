import { StyleSheet } from "react-native";
import { theme } from "./colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },

  input: {
    height: 32,
    borderWidth: 1,
    padding: 4,
    backgroundColor: "#f2f2f2",
    borderColor: theme.colors.dark,
    borderRadius: 8,
    width: "100%",
    marginTop: 12,
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
