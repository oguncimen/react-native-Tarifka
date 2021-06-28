import React from "react";
import { Image, View, Text, TouchableNativeFeedback } from "react-native";
import styles from "./MealCard.style";

const MealCard = ({ meal,onSelect}) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.image}></Image>
        <Text style={styles.text}>{meal.strMeal}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default MealCard;
