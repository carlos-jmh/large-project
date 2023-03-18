import * as SplashScreen from "expo-splash-screen";

import { DarkTheme, LightTheme } from "./themes";
import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";

import Auth from "./auth/Auth";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";

// Prevent splash screen from hiding until everything is loaded
SplashScreen.preventAutoHideAsync();

/* Root app component, sets up theme and fonts */
export default function App() {
  const scheme = useColorScheme();
  const theme = DarkTheme; //scheme === "dark" ? DarkTheme : LightTheme;
  const colors = theme.colors;

  // Load Google fonts
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Roboto_500Medium,
  });

  // When fonts are loaded, hide splash screen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // Keyboard is dismissed when background is pressed
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
