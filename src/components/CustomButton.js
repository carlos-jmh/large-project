import { Pressable, Text } from "react-native";

import { getStyles } from "./styles";
import { useTheme } from "@react-navigation/native";

/* Custom button component from Pressable to fit with theme */
export default function CustomButton({ title, onPress }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <Pressable
      onPress={onPress}
      style={styles.buttonContainer}
      android_ripple={{ color: colors.highlight }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
