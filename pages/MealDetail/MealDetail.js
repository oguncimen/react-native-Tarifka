import React, { useState, useCallback } from "react";
import * as Linking from "expo-linking";
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  Pressable,
  Alert,
  Button,
} from "react-native";
import useFetch from "../../Hooks/useFetch/index";
import styles from "./MealDetail.style";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
export default function Detail({ route }) {
  const { id } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [meal, setmeal] = useState();
  const {
    loading,
    error,
    data: { meals },
  } = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <Pressable
        style={styles.youtubeButton}
        title={children}
        onPress={handlePress}
      >
        <Text style={styles.textStyle}>Open on Youtube</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image
            source={{ uri: meals[0].strMealThumb }}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title}>{meals[0].strMeal}</Text>
        </View>
        <Text style={styles.strArea}>{meals[0].strArea}</Text>
      </View>
      <View></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
          <View style={styles.modalView}>
            <Text>{meals[0].strInstructions}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </ScrollView>
      </Modal>
      <OpenURLButton url={meals[0].strYoutube}>Watch on Youtube!</OpenURLButton>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Recipe</Text>
      </Pressable>
    </View>
  );
}
