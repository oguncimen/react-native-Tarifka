import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    margin:5,
  },
  image_container: {
    flex: 1,
  },
  image: {
    height:Dimensions.get('screen').height/3.2 ,
    flex: 1,
    borderRadius: 10,
  },
  text: {
    position: "absolute",
    color: "white",
    flex: 1,
    fontWeight:'bold',
    padding:5,
    fontSize:20


  },
});
