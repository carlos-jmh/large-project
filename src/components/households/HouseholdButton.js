import { Pressable, Text } from "react-native";

import { getStyles } from "../styles";
import { useTheme } from "@react-navigation/native";

/* Custom button component from Pressable to fit with theme */
export default function HouseholdButton({ title, onPress }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Pressable
      onPress={onPress}
      style={styles.householdButtonContainer}
      android_ripple={{ color: colors.border }}
    >
      <Text style={styles.householdButtonText}>{title}</Text>
    </Pressable>
  );
}
