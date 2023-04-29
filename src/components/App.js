import * as SplashScreen from "expo-splash-screen";

import { DarkTheme, LightTheme } from "../components/themes";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import { Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useCallback,  useState } from "react";

import Chat from "./home/chat/Chat";
import ConfirmRegister from "./auth/ConfirmRegister.js";
import CreateHousehold from "./households/CreateHousehold";
import Events from "./home/events/Events";
import InitialPage from "./households/InitialPage";
import Lists from "./home/lists/Lists";
import Login from "./auth/Login.js";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./auth/Register.js";
import Tasks from "./home/tasks/Tasks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Platform } from "react-native";
import { HouseHoldContext } from "./HouseHoldContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideBar from "./SideBar";
import { UserContext } from "./UserContext";

const Stack = createNativeStackNavigator();

// Prevent splash screen from hiding until everything is loaded
SplashScreen.preventAutoHideAsync();

/* Root app component, sets up theme and fonts */
export default function App() {
  const scheme = useColorScheme();
  const theme = DarkTheme; //scheme === "dark" ? DarkTheme : LightTheme;
  const colors = theme.colors;

  const [houseHold, setHouseHold] = useState({});
  const [user, setUser] = useState({});

  // Load Google fonts
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Roboto_500Medium,
    Roboto_700Bold,
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

  const Drawer = createDrawerNavigator();

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
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <UserContext.Provider value={{ user, setUser }}>
            <HouseHoldContext.Provider value={{ houseHold, setHouseHold }}>
              <NavigationContainer theme={theme}>
                <Drawer.Navigator drawerContent={() => <SideBar/>}>
                  <Drawer.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                  />
                  <Drawer.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }}
                  />
                  <Drawer.Screen
                    name="ConfirmRegister"
                    component={ConfirmRegister}
                    options={{ headerShown: false }}
                  />
                  <Drawer.Screen
                    name="InitialPage"
                    component={InitialPage}
                    options={{ headerShown: false }}
                  />
                  <Drawer.Screen
                    name="CreateHousehold"
                    component={CreateHousehold}
                    options={{ headerShown: false }}
                  />
                  <Drawer.Screen
                    name="Events"
                    component={Events}
                    options={{ headerShown: false }}
                  />
                  <Drawer.Screen
                    name="Tasks"
                    component={Tasks}
                    options={{ headerShown: false }}
                  />
                  <Drawer.Screen
                    name="Lists"
                    component={Lists}
                    options={{ headerShown: false }}
                  />
                  <Drawer.Screen
                    name="Chat"
                    component={Chat}
                    options={{ headerShown: false }}
                  />
                </Drawer.Navigator>
              </NavigationContainer>
            </HouseHoldContext.Provider>
            </UserContext.Provider>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </SafeAreaProvider>
  );
}