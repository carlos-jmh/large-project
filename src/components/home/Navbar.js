import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import AddButton from "./AddButton";
import { getStyles } from "../styles";
import { useTheme } from "@react-navigation/native";

/* Header bar for home pages */
// TODO: Make header background extend into notification bar
export default function Navbar({ navigation, screenName, household }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View
      style={{
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: colors.card,
      }}
    >
      <NavbarButton
        screenName="Events"
        currentScreenName={screenName}
        colors={colors}
        navigation={navigation}
        household={household}
        icon={({ size, color }) => (
          <FontAwesome5 name="calendar-alt" size={size} color={color} />
        )}
      />
      <NavbarButton
        screenName="Tasks"
        currentScreenName={screenName}
        colors={colors}
        navigation={navigation}
        household={household}
        icon={({ size, color }) => (
          <MaterialCommunityIcons
            name="checkbox-outline"
            size={size}
            color={color}
          />
        )}
      />
      <AddButton />
      <NavbarButton
        screenName="Lists"
        currentScreenName={screenName}
        colors={colors}
        navigation={navigation}
        household={household}
        icon={({ size, color }) => (
          <MaterialCommunityIcons
            name="clipboard-list-outline"
            size={size}
            color={color}
          />
        )}
      />
      <NavbarButton
        screenName="Chat"
        currentScreenName={screenName}
        colors={colors}
        navigation={navigation}
        household={household}
        icon={({ size, color }) => (
          <Ionicons
            name="md-chatbox-ellipses-outline"
            size={size}
            color={color}
          />
        )}
      />
    </View>
  );
}

function NavbarButton({
  navigation,
  screenName,
  currentScreenName,
  household,
  icon,
}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const isCurrentScreen = currentScreenName == screenName;

  return (
    <Pressable
      onPress={() => navigation.navigate(screenName, { household: household })}
      style={{
        width: 70,
        height: 60,
        padding: 6,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: isCurrentScreen ? colors.border : colors.card,
        borderRadius: 8,
      }}
    >
      {icon({
        size: 24,
        color: isCurrentScreen ? colors.text : colors.textFaded,
      })}
      <Text
        style={[
          styles.navbarText,
          { color: isCurrentScreen ? colors.text : colors.textFaded },
        ]}
      >
        {screenName}
      </Text>
    </Pressable>
  );
}
