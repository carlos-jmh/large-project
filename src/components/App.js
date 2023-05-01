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
} from "react-native";
import { Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Platform } from "react-native";
import { HouseHoldContext } from "./HouseHoldContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideBar from "./SideBar";
import { UserContext } from "./UserContext";
import Wrappy from "./Wrappy";

const Stack = createNativeStackNavigator();

// Prevent splash screen from hiding until everything is loaded
SplashScreen.preventAutoHideAsync();

// const processLists = async (lists) => {
//   const processedLists = await Promise.all(
//     lists.map(async (list) => {
//       const listItems = await fetchItemsByListId(list.id);

//       return {
//         ...list,
//         listItems: listItems,
//       };
//     })
//   );

//   return processedLists;
// };

// export const processTasks = async (tasks) => {
//   const processedTasks = await Promise.all(tasks.map(async (task) => {
//     if (!task.eventHandlerId || task.eventHandlerId === '') {
//       return task;
//     }

//     const eventHandler = await fetchEventHandlerById(task.eventHandlerId);

//     return {
//       ...task,
//       eventHandler,
//     };
//   }));

//   return processedTasks;
// };

/* Root app component, sets up theme and fonts */
export default function App() {
  const scheme = useColorScheme();
  const theme = DarkTheme; //scheme === "dark" ? DarkTheme : LightTheme;
  const colors = theme.colors;

  const [houseHold, setHouseHold] = useState({
    id: "",
    calendarId: "",
    lists: [],
    tasks: [],
    events: [],
    eventHandlers: [],
  });

  const [user, setUser] = useState(null);

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
              <Wrappy />
            </HouseHoldContext.Provider>
            </UserContext.Provider>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </SafeAreaProvider>
  );
}
