import { Text, View } from "react-native";

import HeaderBar from "../HeaderBar";
import Navbar from "../Navbar";
import { getStyles } from "../../styles";
import { useTheme } from "@react-navigation/native";

/* Chat page */
export default function Chat({ navigation, route }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title={route.params.household.name} screenName={route.name} />
      <View style={{ flex: 1 }}></View>
      <Navbar
        screenName={route.name}
        navigation={navigation}
        household={route.params.household}
      />
    </View>
  );
}
