import * as SplashScreen from "expo-splash-screen";

import { DarkTheme, LightTheme } from "../components/themes";
import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";
import {
  Keyboard,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";

import Chat from "./home/Chat";
import ConfirmRegister from "./auth/ConfirmRegister.js";
import Events from "./home/Events";
import InitialPage from "./households/InitialPage";
import Lists from "./home/Lists";
import Login from "./auth/Login.js";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./auth/Register.js";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import Tasks from "./home/Tasks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

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
    <SafeAreaProvider>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        style={{ flex: 1 }}
      >
        <SafeAreaView
          style={{ flex: 1, backgroundColor: colors.background }}
          onLayout={onLayoutRootView}
        >
          <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ animation: "fade" }}>
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ConfirmRegister"
                component={ConfirmRegister}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InitialPage"
                component={InitialPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Events"
                component={Events}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Tasks"
                component={Tasks}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Lists"
                component={Lists}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Chat"
                component={Chat}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </SafeAreaProvider>
  );
}
