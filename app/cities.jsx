import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  Image,
} from "react-native";

const Cities = () => {
  const cities = [
    { city: "São Paulo", state: "SP", temperature: "16º" },
    { city: "Rio de Janeiro", state: "RJ", temperature: "20º" },
    { city: "Belo Horizonte", state: "MG", temperature: "18º" },
    { city: "Salvador", state: "BA", temperature: "22º" },
    { city: "Brasília", state: "DF", temperature: "16º" },
    { city: "Curitiba", state: "PR", temperature: "16º" },
    { city: "Fortaleza", state: "CE", temperature: "24º" },
    { city: "Manaus", state: "AM", temperature: "26º" },
    { city: "Recife", state: "PE", temperature: "28º" },
    { city: "Belém", state: "PA", temperature: "30º" },
    { city: "Goiânia", state: "GO", temperature: "25º" },
    { city: "São Luís", state: "MA", temperature: "36º" },
  ];

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <View>
        <TextInput placeholder="Digite a cidade" />
      </View>

      <FlatList
        data={cities}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              source={require("../assets/images/image1.png")}
              style={styles.image}
            />
            <Text style={styles.cityName}>
              {item.city} - {item.state}
            </Text>

            <Text style={styles.temperature}>{item.temperature}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  listContainer: {
    width: "100%",
    gap: 16,
  },
  listItem: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 16,
  },
  image: {
    width: 26,
    height: 26,
  },
  cityName: {
    fontSize: 16,
    color: "#fff",
  },
  temperature: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Cities;
