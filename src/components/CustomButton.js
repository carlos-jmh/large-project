import { Pressable, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import { getStyles } from "./styles";

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
