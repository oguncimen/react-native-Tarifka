import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import MealDetail from "./pages/MealDetail";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="CategoryDetail"
          component={CategoryDetail}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
