import { StyleSheet } from "react-native";

export function getStyles(colors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-evenly",
      margin: 32,
    },
    header: {
      color: colors.text,
      fontFamily: "Inter_600SemiBold",
      fontSize: 36,
    },
    text: {
      color: colors.text,
      fontFamily: "Inter_600SemiBold",
      fontSize: 14,
    },
    label: {
      color: colors.textFaded,
      fontFamily: "Roboto_500Medium",
      fontSize: 12,
    },
    inputContainer: {
      alignSelf: "stretch",
      backgroundColor: colors.card,
      width: "auto",
      height: 40,
      borderRadius: 8,
      padding: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      color: colors.text,
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      flex: 1,
    },
    buttonContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primary,
      height: 40,
      borderRadius: 8,
    },
    buttonText: {
      color: colors.primaryText,
      fontFamily: "Roboto_500Medium",
      fontSize: 14,
    },
  });
}
