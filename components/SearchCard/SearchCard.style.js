import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  goBack: {
    textAlign: "left",
    fontSize: 30,
    marginRight: 5,
    fontWeight: "normal",
  },
  inner_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    textAlign: "left",
    fontWeight: "bold",
    marginVertical: 20,
  },
  text_input: {
    borderWidth: 2,
    borderColor: "#6a6a6a",
    borderRadius: 5,
    padding: 5,
    flex: 1,
  },
});
export default styles;
