import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// import { Container } from './styles';

const CityDetails = () => {
  return (
    <LinearGradient
      colors={["#00457D", "#05051F"]}
      style={styles.container}
    ></LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CityDetails;
