import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";

import { cities } from "../data/cities";
import { MaterialIcons } from "@expo/vector-icons";

const CityDetails = () => {
  const { cityId } = useLocalSearchParams();
  const city = cities.find((city) => city.id == cityId);

  const router = useRouter();

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.box}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <MaterialIcons name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
              {city.city} - {city.state}
            </Text>
          </View>

          <View style={styles.mainCard}>
            <View style={styles.row}>
              <Text style={styles.mainCardTitle}>Hoje</Text>
              <Text style={styles.mainCardTitle}>(01/12)</Text>
            </View>

            <View style={styles.column}>
              <Image
                source={require("../assets/images/clouds.png")}
                style={styles.mainCardImage}
              />

              <Text style={styles.mainCardTemperature}>33º</Text>
              <Text style={styles.mainCardDescription}>Sol entre nuvens</Text>
            </View>

            <View style={styles.mainCardWeather}>
              <View style={styles.row}>
                <Image
                  source={require("../assets/icons/humidity.png")}
                  style={styles.mainCardWeatherIcon}
                />
                <Text style={styles.mainCardWeatherTitle}>Humidity:</Text>
                <Text style={styles.mainCardWeatherValue}>70%</Text>
              </View>

              <View style={styles.row}>
                <Image
                  source={require("../assets/icons/temperature.png")}
                  style={styles.mainCardWeatherIcon}
                />
                <Text style={styles.mainCardWeatherTitle}>Min/Max:</Text>
                <Text style={styles.mainCardWeatherValue}>20/34º</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.card}>
              <View>
                <Text style={styles.cardTitle}>Amanhã</Text>
                <Text style={styles.cardSubTitle}>(02/02/2025)</Text>
              </View>

              <Image
                source={require("../assets/images/clouds.png")}
                style={styles.cardImage}
              />

              <Text style={styles.cardTemperature}>26/30º</Text>
            </View>
            <View style={styles.card}>
              <View>
                <Text style={styles.cardTitle}>Amanhã</Text>
                <Text style={styles.cardSubTitle}>(02/02/2025)</Text>
              </View>

              <Image
                source={require("../assets/images/clouds.png")}
                style={styles.cardImage}
              />

              <Text style={styles.cardTemperature}>26/30º</Text>
            </View>
            <View style={styles.card}>
              <View>
                <Text style={styles.cardTitle}>Amanhã</Text>
                <Text style={styles.cardSubTitle}>(02/02/2025)</Text>
              </View>

              <Image
                source={require("../assets/images/clouds.png")}
                style={styles.cardImage}
              />

              <Text style={styles.cardTemperature}>26/30º</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  box: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 16,
    gap: 40,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 8,
  },

  card: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: "center",
    gap: 16,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  cardSubTitle: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  cardTemperature: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
  },
  cardImage: {
    width: 26,
    height: 26,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
  mainCard: {
    backgroundColor: "#4463D5",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    width: "100%",
  },
  mainCardTitle: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
    textAlign: "center",
  },
  mainCardTemperature: {
    fontSize: 43,
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
    textAlign: "center",
  },
  mainCardDescription: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
  },
  mainCardWeatherTitle: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
    textAlign: "center",
  },
  mainCardWeatherValue: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginLeft: "auto",
    fontFamily: "Montserrat_500Medium",
  },
  mainCardImage: {
    width: 100,
    height: 90,
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  mainCardWeatherIcon: {
    width: 24,
    height: 24,
  },
  mainCardWeather: {
    width: "100%",
    gap: 8,
  },
});

export default CityDetails;
