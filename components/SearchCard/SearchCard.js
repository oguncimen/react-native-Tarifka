import React from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from "../SearchCard/SearchCard.style";
const SearchCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <View style={styles.inner_container}>
        {/* {navigation && (
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Text style={styles.goBack}>{"<"}</Text>
          </TouchableWithoutFeedback>
        )} */}

        <TextInput
          placeholder="Hungry?"
          placeholderTextColor="grey"
          style={styles.text_input}
        ></TextInput>
      </View>
    </View>
  );
};

export default SearchCard;
