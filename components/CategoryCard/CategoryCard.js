import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./CategoryCard.style";

const CategoryCard = ({ category, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            source={{ uri: category.strCategoryThumb }}
            style={styles.image}
          ></Image>
        </View>
        <Text style={styles.categoryText}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
