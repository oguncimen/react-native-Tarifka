import React from "react";
import { View, Text, FlatList } from "react-native";
import useFetch from "../../Hooks/useFetch";
import styles from "./CategoryDetail.style";
import MealCard from "../../components/MealCard";
import SearchCard from "../../components/SearchCard";
const CategoryDetail = ({ navigation, route }) => {
  const { category } = route.params;

  const { loading, data, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const mealDetailHandler = (id) => {
    navigation.navigate("MealDetail", { id });
  };
  const renderMeals = ({ item }) => (
    <MealCard
      onSelect={() => mealDetailHandler(item.idMeal)}
      meal={item}
    ></MealCard>
  );
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<SearchCard navigation={navigation}></SearchCard>}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.idMeal}
        data={data.meals}
        renderItem={renderMeals}
        numColumns={2}
      ></FlatList>
    </View>
  );
};

export default CategoryDetail;
