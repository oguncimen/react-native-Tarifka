import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbf6f2",
    margin: 5,
    borderRadius: 10,
    maxWidth:100,
  },
  image: {
    width: 80,
    minHeight: 90,
    resizeMode: "contain",
    backgroundColor: "#fbf6f2",
  },
  image_container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  categoryText: {
    textAlign: "center",
    fontWeight: "bold",
    padding:10,
  },
});
export default styles;
