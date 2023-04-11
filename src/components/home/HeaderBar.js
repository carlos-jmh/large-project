import { Text, View } from "react-native";

import { getStyles } from "../styles";
import { useTheme } from "@react-navigation/native";

/* Header bar for home pages */
// TODO: Make header background extend into notification bar
export default function HeaderBar({ title }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View
      style={{
        height: 50,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={[styles.textTitle, { flex: 1 }]}>{title}</Text>
    </View>
  );
}
