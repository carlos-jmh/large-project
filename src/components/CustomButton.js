import {Text, View , TouchableOpacity} from "react-native";

import { getStyles } from "./styles";
import { useTheme } from "@react-navigation/native";

/* Custom button component from Pressable to fit with theme */
export default function CustomButton({ title, onPress, style }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={[{ height: 40, borderRadius: 8, overflow: "hidden" }, style]}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.buttonContainer}
        android_ripple={{ color: colors.highlight }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
