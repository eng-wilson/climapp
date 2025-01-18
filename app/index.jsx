import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <Image
        source={require("../assets/images/Logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <Image
        source={require("../assets/images/image1.png")}
        resizeMode="cover"
        style={styles.image}
      />

      <Text style={styles.screenTitle}>Boas-vindas!</Text>

      <TouchableOpacity
        onPress={() => router.push("/cities")}
        style={styles.button}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 79,
    gap: 64,
  },
  logo: {
    width: 147,
    height: 45,
  },
  image: {
    width: 190,
    height: 180,
  },
  button: {
    backgroundColor: "#7693FF",
    height: 40,
    width: "100%",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  screenTitle: {
    color: "#fff",
    fontSize: 25,
  },
  buttonTitle: {
    color: "##01080E",
    fontSize: 20,
    fontWeight: "semibold",
  },
});

export default Home;
