import { useCallback } from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { LightTheme, DarkTheme } from "./themes";
import Auth from "./auth/Auth";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const scheme = useColorScheme();
  const theme = DarkTheme; //scheme === "dark" ? DarkTheme : LightTheme;
  const colors = theme.colors;

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Roboto_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.background }}
        onLayout={onLayoutRootView}
      >
        <Auth theme={theme} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
