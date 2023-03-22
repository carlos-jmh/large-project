import { StyleSheet } from "react-native";

/* Returns StyleSheet object for given theme colors */
// TODO: figure out better solution and implement constants for common values
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
      textAlign: "center"
    },
    p: {
      color: colors.text,
      fontFamily: "Inter_400Regular",
      fontSize: 18,
      textAlign: "center"
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
    householdButtonContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.card,
      height: 72,
      borderRadius: 30,
      width: 240,
    },
    titleContainer: {
      height: 72,
      alignContent: "flex-start",
      width: 290,
    },
    buttonText: {
      color: colors.primaryText,
      fontFamily: "Roboto_500Medium",
      fontSize: 14,
    },
    householdButtonText: {
      color: colors.primaryText,
      fontFamily: "Roboto_500Medium",
      fontSize: 30,
    },
    circleButton:{
      borderRadius:100,
      justifyContent: "center",
      alignSelf:"center",
      alignItems:"center",
      textAlign:"center",
      backgroundColor: colors.primary,
      height: 75,
      width:75,
      borderRadius: 100,
    },
    circlePlus:{
      fontFamily: "Inter_600SemiBold",
      color:"white",
      fontSize: 50,
      textAlign:"center",
      alignContent:"center"
    }
  });
}
