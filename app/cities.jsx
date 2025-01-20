import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

import { cities } from "../data/cities";

const Cities = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);

  useEffect(() => {
    setFilteredCities(
      cities.filter((city) =>
        city.city.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, cities]);

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite a cidade"
            style={styles.input}
            placeholderTextColor="#fff"
            color="#fff"
            value={search}
            onChangeText={setSearch}
          />
          <MaterialIcons name="search" size={24} color="#fff" />
        </View>

        <FlatList
          data={filteredCities}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/${item.id}`)}
              style={styles.listItem}
            >
              <Image
                source={require("../assets/images/clouds.png")}
                style={styles.image}
              />
              <Text style={styles.cityName}>
                {item.city} - {item.state}
              </Text>

              <Text style={styles.temperature}>{item.temperature}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  safeAreaView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
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
    fontFamily: "Montserrat_500Medium",
  },
  temperature: {
    fontSize: 25,
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
  },
  inputContainer: {
    width: "100%",
    height: 36,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },
});

export default Cities;
