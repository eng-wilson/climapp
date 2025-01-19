import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="cities" options={{ headerShown: false }} />
        <Stack.Screen name="[cityId]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
