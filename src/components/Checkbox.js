import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FontAwesome } from "@expo/vector-icons";
import { getStyles } from "./styles";
import { useTheme } from "@react-navigation/native";

/* Custom checkbox component */
export default function Checkbox({
  onChecked,
  isChecked,
  disableBuiltInState,
  size = 18,
  fadedWhenChecked = false,
}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const primaryTextColor =
    isChecked && fadedWhenChecked
      ? colors.primaryTextFaded
      : colors.primaryText;

  return (
    <BouncyCheckbox
      size={size}
      isChecked={isChecked}
      iconStyle={{ borderRadius: 4 }}
      innerIconStyle={{ borderRadius: 4 }}
      fillColor={primaryTextColor}
      ImageComponent={Checkmark}
      onPress={onChecked}
      disableBuiltInState={disableBuiltInState}
    />
  );
}

function Checkmark({}) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return <FontAwesome name="check" size={12} color={colors.primary} />;
}
