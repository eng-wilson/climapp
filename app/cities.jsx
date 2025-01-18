import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet } from "react-native";

const Cities = () => {
  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <Text>Cidades</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cities;
