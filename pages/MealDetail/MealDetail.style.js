import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fefefe",
  },
  image: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").width / 1.5,
  },
  title_container: {
    alignItems: "center",
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  scroll_container: {
    margin: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#ff7043",
    margin: 20,
  },
  buttonClose: {
    backgroundColor: "#ff7043",
    marginTop: 15,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  strArea: {
    color: "gray",
    textAlign: "center",
    fontSize: 15,
  },
  youtubeButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    margin: 25,
  },
});
