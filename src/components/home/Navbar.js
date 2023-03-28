import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

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
        icon={
          <FontAwesome5 name="calendar-alt" size={24} color={colors.text} />
        }
      />
      <NavbarButton
        screenName="Tasks"
        currentScreenName={screenName}
        colors={colors}
        navigation={navigation}
        household={household}
        icon={
          <MaterialCommunityIcons
            name="checkbox-outline"
            size={24}
            color={colors.text}
          />
        }
      />
      <Pressable
        style={{
          borderRadius: 100,
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: colors.border,
          height: 54,
          width: 54,
          borderRadius: 100,
        }}
      >
        <Entypo name="plus" size={32} color={colors.text} />
      </Pressable>
      <NavbarButton
        screenName="Lists"
        currentScreenName={screenName}
        colors={colors}
        navigation={navigation}
        household={household}
        icon={
          <MaterialCommunityIcons
            name="clipboard-list-outline"
            size={24}
            color={colors.text}
          />
        }
      />
      <NavbarButton
        screenName="Chat"
        currentScreenName={screenName}
        colors={colors}
        navigation={navigation}
        household={household}
        icon={
          <Ionicons
            name="md-chatbox-ellipses-outline"
            size={24}
            color={colors.text}
          />
        }
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

  return (
    <Pressable
      onPress={() => navigation.navigate(screenName, { household: household })}
      style={{
        width: 70,
        height: 60,
        padding: 6,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor:
          currentScreenName == screenName ? colors.border : colors.card,
        borderRadius: 8,
      }}
    >
      {icon}
      <Text style={styles.navbarText}>{screenName}</Text>
    </Pressable>
  );
}
