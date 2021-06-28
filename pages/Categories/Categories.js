import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import useFetch from "../../Hooks/useFetch";
import CategoryCard from "../../components/CategoryCard";
import SearchCard from "../../components/SearchCard";
const Categories = ({ navigation }) => {
  const { loading, data, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const handleCategorySelect = (category) => {
    navigation.navigate("CategoryDetail", { category });
  };
  const renderCategories = ({ item }) => (
    <CategoryCard
      onSelect={() => handleCategorySelect(item.strCategory)}
      category={item}
    />
  );
  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Somethings go wrong.</Text>
      </View>
    );
  }
  return (
    <View style={main_style.container}>
      <SearchCard></SearchCard>
      <View style={main_style.flatlist}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignSelf: "center",
          }}
          numColumns={3}
          keyExtractor={(item) => item.idCategory}
          data={data.categories}
          renderItem={renderCategories}
          style={{ marginHorizontal: 10 }}
        ></FlatList>
      </View>
    </View>
  );
};
const main_style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  flatlist: {
    flex: 1,
    margin: 2,
  },
});
export default Categories;
