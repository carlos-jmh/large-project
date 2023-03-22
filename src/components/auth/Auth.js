import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialPage from "../InitialPage";

const Stack = createNativeStackNavigator();

/* As of now, basic login/register pages without backend connection */
// TODO: Connect to backend
export default function Auth({ theme }) {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
