import React from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";

import { cities } from "../data/cities";

// import { Container } from './styles';

const CityDetails = () => {
  const { cityId } = useLocalSearchParams();
  const city = cities.find((city) => city.id == cityId);

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <Text>{city.city}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CityDetails;
